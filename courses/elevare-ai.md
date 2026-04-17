# Elevare AI — Course Outline & Implementation Plan

> Standalone $29/mo AI practice companion. Conforms to `implementation-methodology.md` 5-stage loop. Full design spec lives in `plan-feedback-2026-04-17.md` Section 14 — this file is the course-outline-format version for consistency across the 5-product folder.

---

## Positioning + ICP

**ICP:** price-sensitive learners globally who want daily English practice without committing to a coach yet. Entry tier in the Elevare funnel. Many will upgrade to Speak / Pro / Med within 30-60 days.

**Pricing:** $29/mo. First week free (on intake call booking), so the assessment call feeds Elevare AI signups for those not ready for coach-led tiers.

---

## Stage 1 — Intake (abbreviated for AI tier)

- 5-min assessment call (same lead magnet, all tiers)
- Baseline level estimate
- If student declines coach-led tier → offer Elevare AI as entry
- Provision WhatsApp bot access immediately

---

## Stage 2 — Onboard (Day 1-3)

- Welcome voice message (Debby) within 1 hr of signup
- Bot walks student through first scenario role-play (10 min guided)
- Sets daily practice reminder time
- Day 3 coach check-in message ("How's the AI practice going?") — priming for upgrade

---

## Stage 3 — Deliver (daily, ongoing)

Three modes only, per Section 14:

1. **Scenario Role-Play** (10 min) — student picks situation, AI plays counterpart
2. **Warm-Up** (2 min) — 3 confidence prompts, optional before any verbal commitment (interview, meeting, class)
3. **Weekly Recap** (5 min) — AI reviews the past week's practice, highlights what improved, suggests focus area

**Scenario library:** 30+ scenarios across categories (ordering, small talk, work meeting, interview, negotiation, complaint, presentation). Student picks; AI runs.

**Progression:** AI auto-adjusts difficulty based on student performance. Easy → medium → hard within each scenario.

---

## Stage 4 — Measure

**Weekly auto-email to student:**
- Minutes practiced
- Scenarios completed
- Skill areas reinforced
- Rise layer: 1 specific "you can now X" callout

**Upgrade trigger:** student practicing 5+ days/week + completing 10+ scenarios = warm upgrade prospect. At Day 30, coach sends WhatsApp: "You've been practicing great with the AI — want to try a real coach session free this week?"

---

## Stage 5 — Graduate or Renew

Auto-renews monthly via Whop. Upgrade is the "graduation" — Speak / Fluency / Pro / Med.

**Churn trigger:** no practice for 10 days → coach-led win-back WhatsApp (not automated).

---

## What's built + what's not

**Built:** WhatsApp bot (Typebot + Chatfuel), Haiku 4.5 via OpenRouter, 30 scenarios, coach notes pipe (Google Sheet → Zapier → bot prompts).

**Not built yet (v0.5 / v1):** voice mode, voice clone, Orpheus streaming, real-time. These ship when $2k+ MRR earns the build cost.

---

*Course outline v1 — 2026-04-17. Full design spec: `plan-feedback-2026-04-17.md` Section 14.*
