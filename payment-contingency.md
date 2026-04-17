# Payment Contingency Tree — Elevare Week 1-4

> Closes gap #7 from `plan-feedback-2026-04-17.md`. The master plan names Whop primary + Lemon Squeezy backup but lacks a failover tree if Whop KYC hangs. This is that tree. Owner: [Debby] executes, [Donal] approves trigger thresholds.

---

## Why this exists

Debby's Wise KYC failed. Uganda ID + non-Thai-resident status makes Whop KYC slower than the plan assumes (3-7 days realistic, not same-day). If the Day-1 Whop signup isn't verified by Day 5, there is NO payment rail for Week 1 and the $750 MRR target slips. This tree ensures a 2-deep fallback at all times.

---

## T1 — Whop (primary)

- **Action Day 1 (Mon):** Debby signs up at whop.com, uploads Ugandan passport + proof-of-address (Chiang Mai lease or Thai utility bill), submits business: "Elevare — English tutoring + AI practice subscriptions"
- **Verification window:** 24-72 hrs typical; Uganda/Thailand edge-case = 5-7 days possible
- **Fee:** 2.7% flat
- **Go-live gate:** "Whop account verified" email received + test $1 self-transaction clears

### Trigger to fall back
- If no verification by **end of Day 3 (Wed)** → spin up T2 in parallel; keep Whop ticket open
- If Whop rejects verification → abandon, move to T2 primary, T3 backup

---

## T2 — Lemon Squeezy (first backup, global MoR)

- **Action (if T1 not verified by Wed):** Debby signs up at lemonsqueezy.com, same docs. Lemon Squeezy is a full Merchant of Record → handles VAT/sales-tax globally, good for Flex Nexus $497 cohort
- **Verification window:** 24-48 hrs typical, accepts non-US founders more smoothly than Stripe
- **Fee:** 5% + $0.50 per transaction (higher than Whop but global coverage)
- **Go-live gate:** Lemon Squeezy dashboard shows "Stores active" + test $1 self-transaction

### Trigger to fall back
- If no verification by **end of Day 5 (Fri)** → escalate to T3 parallel path

---

## T3 — PayPal Business + manual invoicing (emergency rail)

- **Action (if T1 + T2 both stalled by Fri):** Debby opens PayPal Business (already has personal PayPal; business upgrade takes <1 hr)
- **Verification window:** same-day for business-upgrade if personal account is verified
- **Fee:** 4-5% for international
- **Payment flow:** Debby sends a PayPal invoice link per customer (manual, not self-serve). For subscriptions, PayPal recurring billing is available but clunky.
- **Go-live gate:** First $1 self-invoice clears

**Acceptable for Week 1 only** — PayPal is NOT a long-term solution because it lacks the self-serve subscription UX customers expect. But it IS an acceptable bridge that gets cash flowing while T1/T2 resolve.

---

## T4 — LINE Pay / PromptPay (Thai-local, Month 2+)

- **Defer to Month 2.** Requires Thai business registration to unlock merchant rails, which is out of scope for Week 1.
- **Parked until:** $2k MRR + Debby confirms she wants Thai-specific customers enough to register an entity. If yes, pair with Thai accountant and onboard.

---

## Decision triggers at a glance

| Day | Check | If FAIL | Do this |
|---|---|---|---|
| Mon Day 1 | Whop signup submitted | submit today | Start T1 |
| Wed Day 3 EOD | Whop verified? | Start T2 in parallel | Lemon Squeezy signup |
| Fri Day 5 EOD | T1 OR T2 verified? | Start T3 | PayPal Business upgrade |
| Sun Day 7 EOD | ANY rail live? | Escalate to [Donal] | Friendly intervention or 1-wk delay |
| Mon Day 8 | Ad launch gated on live rail | no-rail → push ads to Day 10 | |

---

## Cost comparison — where each rail breaks even

| Rail | $29 AI Tutor | $149 Lingua Live | $497 Flex Nexus |
|---|---|---|---|
| Whop 2.7% | $28.22 net | $144.98 net | $483.58 net |
| Lemon Squeezy 5% + $0.50 | $27.05 net | $141.05 net | $471.85 net |
| PayPal ~4.5% | $27.70 net | $142.30 net | $474.64 net |

**Implication:** Whop preferred on low-ticket volume (AI Tutor). Lemon Squeezy acceptable for Flex Nexus (global VAT handled). PayPal is emergency-only.

---

## Post-launch: when to switch primary

- Switch from Whop → Lemon Squeezy as primary **when** >20% of signups are EU/UK (VAT compliance wins)
- Switch to Stripe **when** Thai or US LLC is registered (>$5k MRR, post-Day 90)

---

*Owner: [Debby] executes, [Donal] signs off on T1→T2 trigger Wed EOD, T2→T3 Fri EOD. Last revised: 2026-04-17.*
