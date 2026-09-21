export const STUDIO = {
  website: 'https://www.transformactive.com.au/',
  memberships: 'https://www.transformactive.com.au/memberships',
  timetable: 'https://www.transformactive.com.au/timetable',
  faqs: 'https://www.transformactive.com.au/faqs',
  about: 'https://www.transformactive.com.au/about',
  trial: 'https://myaccount.clubfit.net.au/prospect-inquiry?code=TRANSFORMACTIVE&accountId=1&trial=true',
  bookClasses: 'https://myaccount.clubfit.net.au/groupfitness?code=TRANSFORMACTIVE&accountId=1',
  instagram: 'https://www.instagram.com/transformactivemullum/',
  facebook: 'https://www.facebook.com/mullumgym/',
  review: 'https://g.page/r/CRyxVvKtEeTkEAE/review',
  appStore: 'https://apps.apple.com/au/app/myclub-fitness/id1314239237',
  playStore: 'https://play.google.com/store/apps/details?id=com.ynet.myclub&hl=en_AU',
  phone: '0432 583 716',
  telephone: 'tel:+61432583716',
  email: 'admin@transformactive.com.au',
  mailto: 'mailto:admin@transformactive.com.au',
  address: '4/4 Towers Dr, Mullumbimby NSW 2482',
  timezone: 'Australia/Sydney',
} as const

export const PRICING_VERIFIED_ON = '21 September 2026'
export const TERMS_VERSION = '2026-09-21'
export const KEY_TAG_FEE = 2500
export const CHECKOUT_APP_ID = 'transform-active-mullumbimby'

export function formatAUD(cents: number) {
  return `A$${(cents / 100).toFixed(2)}`
}

export const pricing = [
  {
    id: 'ongoing',
    name: 'The Ongoing Membership',
    weeklyAmount: 2495,
    price: 'A$24.95',
    period: 'per week · debited weekly',
    description: 'Your own rhythm. Your own routine.',
    features: ['24/7 access to the gym', 'Flexible ongoing membership', '30 days’ written cancellation notice'],
    cancellation: 'Cancellation requires 30 days’ written notice by email to the studio.',
    commitment: 'Ongoing membership',
    cta: 'Choose Ongoing',
    signupUrl: 'https://myaccount.clubfit.net.au/onlineoffers/membership/103?code=TRANSFORMACTIVE&accountId=1&sidebar=true&single=true',
  },
  {
    id: 'ongoing-plus',
    name: 'The Ongoing Plus',
    weeklyAmount: 2995,
    price: 'A$29.95',
    period: 'per week · debited weekly',
    description: 'A little more space for your wellbeing.',
    features: ['24/7 access to the gym', 'Unlimited group classes', 'Infrared sauna included', '30 days’ written cancellation notice'],
    cancellation: 'Cancellation requires 30 days’ written notice by email to the studio.',
    commitment: 'Flexible, all-inclusive membership',
    cta: 'Choose Ongoing Plus',
    signupUrl: 'https://myaccount.clubfit.net.au/onlineoffers/membership/101?code=TRANSFORMACTIVE&accountId=1&sidebar=true&single=true',
  },
  {
    id: 'lifestyle-12-months',
    name: '12 Months Lifestyle',
    weeklyAmount: 2495,
    price: 'A$24.95',
    period: 'per week · 12-month commitment',
    description: 'Make your wellbeing a way of life.',
    features: ['24/7 access to the gym', 'Unlimited group classes', 'Infrared sauna included', 'A$150 early-exit fee before term ends', '30 days’ written cancellation notice'],
    cancellation: 'A 12-month commitment applies. Cancelling before the end of the term incurs an A$150 exit fee. All cancellations require 30 days’ written notice by email.',
    commitment: '12-month minimum commitment',
    cta: 'Choose Lifestyle',
    signupUrl: 'https://myaccount.clubfit.net.au/onlineoffers/membership/124?code=TRANSFORMACTIVE&accountId=1&sidebar=true&single=true',
  },
] as const

export type MembershipPlan = (typeof pricing)[number]
export type PlanId = MembershipPlan['id']

export function getPlan(id: string) {
  return pricing.find((plan) => plan.id === id)
}
