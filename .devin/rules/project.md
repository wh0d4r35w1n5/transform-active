---
description: Studio website development and verification context
trigger: always_on
---

# Project context

- This is a frontend-only React, Vite, TypeScript, Tailwind CSS 4, Motion, and shadcn/ui-style Radix application. Dependencies are pinned in package.json and package-lock.json.
- Run commands from this project directory, not the parent workspace.
- `npm run dev` serves on http://127.0.0.1:5173 with a strict port.
- `npm run build` runs TypeScript checking and creates the production dist directory.
- `npm run preview` serves the production build on http://127.0.0.1:4173.
- `npm test` runs Playwright desktop/mobile interaction, accessibility, layout, and schedule tests. On a fresh machine, first run `npx playwright install chromium`.
- `npm audit --audit-level=moderate` checks dependency advisories.

# Implementation notes

- Studio copy, practice types, teachers, pricing, and the timetable live in src/lib/studio.ts. Styling and design tokens live in src/index.css.
- The useReducedMotion helper in src/lib/utils.ts deliberately subscribes to media-query changes. Motion 12's bundled hook captures only the initial preference; retain the live-preference regression test.
- Dialogs restore focus to their originating controls. The mobile menu waits for its close-focus event before opening a booking dialog.
- Booking, membership, gift-card, newsletter, and social interactions are explicitly previews. No payment is collected and no personal details are transmitted or persisted. Preserve that transparency until actual providers are integrated.
- Toolkit state (meal picks, routine config, last-opened tool) persists in localStorage only — keys are prefixed `ta-`. Body Metrics numbers are saved solely via the explicit "Keep my numbers on this device" opt-in (`ta-body`); keep that opt-in pattern if personal data handling ever expands.
- The supplied brief combines Mullumbimby branding with GBP prices and Bristol contact details. Confirm the address, currency, studio timezone, prices, schedule, and service terms before launch.
- Photos are locally served stock images from Pexels, not verified portraits of the named instructors. Verify or replace them with studio-owned photography before representing them as actual team portraits.
