# MRR Model v2 — Elevare 90-Day, Rebuilt with Churn + LTV

> Companion to `plan-feedback-2026-04-17.md`. Rebuilds the Day-90 $5k MRR model from the master plan (line 1158) with explicit churn, LTV, and cohort-separated revenue. Drafted 2026-04-17.

---

## Assumptions (explicit, so they're checkable)

| Variable | Value | Source / rationale |
|---|---|---|
| Monthly churn, AI Tutor $29 | 12% | Price-sensitive consumer SaaS benchmarks (Duolingo Plus, Babbel all ~10-15%) |
| Monthly churn, Lingua Live $149 | 8% | Structured coaching with human accountability retains better |
| Monthly churn, Complete Communicator $199 | 6% | Highest-commitment customers, multi-pillar sticky |
| Flex Nexus repurchase rate | 15% | 12-week cohort is finite; 15% buy another cohort |
| Tutor capacity (part-time) | 30 sessions/mo | 6-8 hrs/week, leaves buffer for prep + illness |
| Blended ad CPM (Chiang Mai expats) | $3.50 | Midpoint of plan's $2-5 range |

## LTV + CAC ceiling by tier

| Tier | Monthly $ | Avg lifespan (mo) | LTV | CAC ceiling (LTV/3) |
|---|---|---|---|---|
| AI Tutor | $29 | 8.3 (1/0.12) | **$241** | $80 |
| Lingua Live | $149 | 12.5 (1/0.08) | **$1,862** | $621 |
| Complete Communicator | $199 | 16.7 (1/0.06) | **$3,323** | $1,108 |
| Flex Nexus (one-time + 15% repurchase) | — | n/a | **$571 blended** | $190 |

**Implication:** the $29 tier is the ONLY tier that can absorb paid-ad CAC at scale (ceiling $80 vs Thai ad CPCs of $0.20-0.50). Higher tiers sell via warm network + organic + call — not cold ads.

---

## Month-by-month model (net of churn)

### Day 30 — $750 MRR target

Gross acquisitions needed this month (net of ~0 churn since new cohort):

| Tier | Gross adds | Active Day 30 | MRR contribution |
|---|---|---|---|
| AI Tutor $29 | 5 | 5 | $145 |
| Lingua Live $149 | 2 | 2 | $298 |
| Complete Communicator $199 | 2 | 2 | $398 |
| **Subtotal recurring** | **9** | **9** | **$841 MRR** ✓ |
| Flex Nexus $497 (one-time) | 1 | 1 cohort seat | $497 cash, NOT MRR |

**Source:** 9 recurring + 1 Flex from 50 warm DMs + 26 in-person contacts/wk + 1 ad creative live = ~80 lead-surfaces in Week 1-4. 11% close on recurring is realistic.

**Day 30 outputs:** $841 recurring MRR + $497 cohort cash = **$1,338 total cash in Month 1**.

### Day 60 — $2,500 MRR target

Starting Day 30 base: 9 recurring.
Month 2 churn: 12%×5 + 8%×2 + 6%×2 = 0.6 + 0.16 + 0.12 ≈ 1 lost.
Starting active entering Month 3: 8.

Need gross adds Month 2:

| Tier | Gross adds M2 | Active Day 60 | MRR contribution |
|---|---|---|---|
| AI Tutor $29 | 10 | 13 (5-1 churned+10-1 churned) ≈ 13 | $377 |
| Lingua Live $149 | 3 | ~5 | $745 |
| Complete Communicator $199 | 3 | ~5 | $995 |
| **Subtotal recurring** | **16** | **~23** | **$2,117 MRR** |
| Flex Nexus cohort 2 | 2 | +2 seats | $994 cash |

Gap to plan's $2.5k gate: **$383 short**. Close via either +2 Complete Communicator (+$398 = clears gate) or +15 AI Tutor (requires ad tier scaling from $200 → $400 Month 2).

**Day 60 outputs:** $2,117 recurring MRR + $994 cohort cash = $3,111 total Month 2 cash.

### Day 90 — $5,000 MRR target (honest version)

Starting Day 60 base: ~23 recurring.
Month 3 churn: 12%×13 + 8%×5 + 6%×5 = 1.6 + 0.4 + 0.3 ≈ 2 lost.
Starting active entering Month 4: 21.

Need gross adds Month 3:

| Tier | Gross adds M3 | Active Day 90 | MRR contribution |
|---|---|---|---|
| AI Tutor $29 | 30 | 40 (13 + 30 - ~3 churn) | $1,160 |
| Lingua Live $149 | 8 | ~12 | $1,788 |
| Complete Communicator $199 | 3 | ~8 | $1,592 |
| **Subtotal recurring** | **41** | **~60** | **$4,540 MRR** |
| Flex Nexus cohort 3 | 3 | +3 seats | $1,491 cash |

**Gap to plan's $5,000 MRR gate: $460 short.**

Paths to close the gap:
- **Path A:** +15 more AI Tutor (requires ad tier $400 → $800 Month 3, produces +$435 MRR)
- **Path B:** +3 more Lingua Live (requires 30 more warm/organic contacts, produces +$447 MRR)
- **Path C:** +2 more Complete Communicator (requires 2 upsell calls closing at 50%+, produces +$398 MRR — just misses)

**Day 90 outputs:** $4,540 honest recurring MRR + $1,491 cohort cash = $6,031 total Month 3 cash. Plan's claimed "$5,197 MRR" was $210 of Flex Nexus amortization + optimism about 40 AI Tutor seats surviving churn.

---

## Tutor capacity check

Day 90 active Lingua + Complete = ~12 + 8 = 20 students × 4 sessions/mo = **80 sessions/mo**.

4 tutors × 30 session capacity = 120/mo. **Utilization 67%.** OK on paper.

But: churn replacement requires constant onboarding. If 1 Lingua + 1 Complete churn per month, that's 2 new discovery calls, 2 matching sessions, and 2 weeks of reduced utilization during handover. With 4 tutors, any single tutor dropping off = 25% capacity loss for 2-4 weeks while backfilling.

**Recommendation:** onboard **6 tutors by Day 60** (not 4). Redundancy absorbs churn, holidays, and the Complete Communicator multi-pillar demand. Marginal cost is tiny (revenue-share, not fixed).

---

## Summary table — honest vs plan

| Metric | Plan (line 1158) | Model v2 (honest) | Delta |
|---|---|---|---|
| Day 30 recurring MRR | $750 (via "2× Flex Nexus cash") | $841 (via 9 recurring + 1 Flex) | ✅ clears cleanly |
| Day 30 cash receipts | conflated | $1,338 | split out |
| Day 60 recurring MRR | $2,500 | $2,117 | $383 gap — closeable |
| Day 60 cash receipts | conflated | $3,111 | split out |
| Day 90 recurring MRR | $5,197 (with $210 amortized Flex) | $4,540 (Flex excluded) | $657 gap — closeable via Path A or B |
| Day 90 cash receipts | conflated | $6,031 | split out |
| Tutors needed | 4 by Day 90 | **6 by Day 60** | onboard earlier |
| Total paying at Day 90 | 68 | ~60 recurring + 6 cohort | honest count |

---

## Three actions this unlocks

1. **Dashboard:** Add two rows to whatever tracker Debby + Donal share — `Recurring MRR` and `Cohort cash receipts`. Never sum them into a single number again.
2. **Tutor pipeline:** Debby starts sourcing tutors 4-6 now so there's a funnel of 6 onboarded by Day 60 (not a last-minute scramble).
3. **Ad budget ramp:** Month 1 $200 → Month 2 $400 → Month 3 $800 — gated on CAC staying under $80 for AI Tutor tier. If CAC holds, scaling is how you close the Day 90 gap.

---

*Drafted by Claude for [Debby] × [Donal], 2026-04-17. Numbers are assumption-driven — replace each with actuals as Weeks 1-12 run.*
