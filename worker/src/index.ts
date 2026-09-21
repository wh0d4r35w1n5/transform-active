import Stripe from 'stripe'

export interface Env {
  DB: D1Database
  API_RATE_LIMITER: RateLimit
  SITE_URL: string
  STRIPE_SECRET_KEY?: string
  STRIPE_WEBHOOK_SECRET?: string
}

// Server-owned catalog — prices are never taken from the client.
const PLANS: Record<string, { name: string; weeklyAud: number; description: string }> = {
  'ongoing': { name: 'The Ongoing Membership', weeklyAud: 2495, description: '24/7 gym access · debited weekly' },
  'ongoing-plus': { name: 'The Ongoing Plus', weeklyAud: 2995, description: 'Gym + unlimited classes + infrared sauna · debited weekly' },
  'lifestyle-12-months': { name: '12 Months Lifestyle', weeklyAud: 2495, description: 'All-inclusive · 12-month term · debited weekly' },
}

const DEV_ORIGINS = ['http://127.0.0.1:5173', 'http://localhost:5173', 'http://127.0.0.1:4173']

function corsHeaders(env: Env, origin: string | null) {
  const allowed = origin && (origin === env.SITE_URL || DEV_ORIGINS.includes(origin)) ? origin : env.SITE_URL
  return {
    'Access-Control-Allow-Origin': allowed ?? '',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Stripe-Signature',
    'Vary': 'Origin',
  }
}

function json(env: Env, request: Request, body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(env, request.headers.get('Origin')) },
  })
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

async function newsletter(env: Env, request: Request) {
  let email = ''
  try {
    const body = await request.json() as { email?: unknown }
    if (typeof body.email === 'string') email = body.email.trim().toLowerCase()
  } catch {
    return json(env, request, { error: 'Invalid request body' }, 400)
  }
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return json(env, request, { error: 'Please provide a valid email address' }, 400)
  }
  const result = await env.DB.prepare('INSERT INTO subscribers (email) VALUES (?) ON CONFLICT(email) DO NOTHING').bind(email).run()
  if (!result.meta.changes) return json(env, request, { error: 'already subscribed' }, 409)
  return json(env, request, { ok: true })
}

async function checkout(env: Env, request: Request) {
  if (!env.STRIPE_SECRET_KEY) {
    return json(env, request, { error: 'Online checkout is not configured yet — join via MyClub Fitness or reception.' }, 503)
  }
  let planId = ''
  let email: string | undefined
  try {
    const body = await request.json() as { planId?: unknown; email?: unknown }
    if (typeof body.planId === 'string') planId = body.planId
    if (typeof body.email === 'string' && EMAIL_RE.test(body.email)) email = body.email
  } catch {
    return json(env, request, { error: 'Invalid request body' }, 400)
  }
  const plan = PLANS[planId]
  if (!plan) return json(env, request, { error: 'Unknown membership plan' }, 400)

  const stripe = new Stripe(env.STRIPE_SECRET_KEY, { httpClient: Stripe.createFetchHttpClient() })
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{
      quantity: 1,
      price_data: {
        currency: 'aud',
        unit_amount: plan.weeklyAud,
        recurring: { interval: 'week' },
        product_data: { name: `Transform Active — ${plan.name}`, description: plan.description },
      },
    }],
    customer_email: email,
    metadata: { planId, source: 'transform-active-web' },
    subscription_data: { metadata: { planId } },
    success_url: `${env.SITE_URL}/#/welcome?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${env.SITE_URL}/#membership`,
    allow_promotion_codes: false,
    billing_address_collection: 'auto',
  })
  return json(env, request, { url: session.url })
}

async function stripeWebhook(env: Env, request: Request) {
  if (!env.STRIPE_SECRET_KEY || !env.STRIPE_WEBHOOK_SECRET) {
    return json(env, request, { error: 'Webhooks are not configured' }, 503)
  }
  const signature = request.headers.get('Stripe-Signature')
  if (!signature) return json(env, request, { error: 'Missing signature' }, 400)
  const stripe = new Stripe(env.STRIPE_SECRET_KEY, { httpClient: Stripe.createFetchHttpClient() })
  let event: Stripe.Event
  try {
    event = await stripe.webhooks.constructEventAsync(await request.text(), signature, env.STRIPE_WEBHOOK_SECRET, undefined, Stripe.createSubtleCryptoProvider())
  } catch {
    return json(env, request, { error: 'Invalid signature' }, 400)
  }
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    await env.DB.prepare('INSERT OR IGNORE INTO signups (id, email, plan_id, stripe_session_id) VALUES (?, ?, ?, ?)')
      .bind(session.id, session.customer_details?.email ?? null, session.metadata?.planId ?? null, session.id)
      .run()
  }
  return json(env, request, { received: true })
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    const origin = request.headers.get('Origin')

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(env, origin) })
    }

    if (url.pathname === '/api/health') {
      return json(env, request, { ok: true, payments: Boolean(env.STRIPE_SECRET_KEY) })
    }

    if (url.pathname === '/api/stripe-webhook' && request.method === 'POST') {
      return stripeWebhook(env, request)
    }

    const rateLimited = { success: true }
    const limit = env.API_RATE_LIMITER ? await env.API_RATE_LIMITER.limit({ key: request.headers.get('CF-Connecting-IP') ?? 'anonymous' }) : rateLimited
    if (!limit.success) return json(env, request, { error: 'Too many requests — please wait a moment.' }, 429)

    if (url.pathname === '/api/newsletter' && request.method === 'POST') return newsletter(env, request)
    if (url.pathname === '/api/checkout' && request.method === 'POST') return checkout(env, request)

    return json(env, request, { error: 'Not found' }, 404)
  },
} satisfies ExportedHandler<Env>
