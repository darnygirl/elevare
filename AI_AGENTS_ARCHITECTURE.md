# Elevare AI Agent System Architecture

> **Revised 2026-04-17 (Nick):** aligned to the 5-product taxonomy decision (Elevare AI / Speak / Fluency / Pro / Med) and the Section 14 scoping of Elevare AI as a shippable-in-one-week WhatsApp bot rather than a Stage-4 voice-streaming build. Earlier 5-agent pantheon (Luna / Atlas / Athena / etc.) superseded — replaced with a leaner 3-agent system that matches the current plan.

## Overview

Elevare runs on **three AI agents** orchestrated around the 5-product family. Each agent has a single job, a single interface, and a clear upgrade path. No speculative agents in the system diagram until revenue justifies the build.

## The three agents

### 1. Elevare AI — Student-Facing Practice Companion

**Role:** primary AI surface for students across all 5 products.

**Channel:** WhatsApp (Twilio Business API or Typebot/Chatfuel).

**LLM:** `anthropic/claude-haiku-4.5` via OpenRouter. Typical cost: $0.001-0.02 per student session.

**Three capabilities (Section 14 scope):**
1. **Scenario Role-Play** — student picks situation, AI plays counterpart, 10-min max
2. **Session Warm-Up** — 3 confidence prompts before real coach call, 2 min
3. **Between-Session Recap** — reviews coach's session notes (from Google Sheet), asks 3 recall questions, sends to coach

**Product integration:**
- **Elevare AI ($29/mo):** sold standalone — all 3 modes unlocked
- **Speak ($199/mo):** AI included as daily practice layer between coach sessions
- **Fluency ($497 12wk):** AI is the drill engine that compounds weekly coach sessions
- **Pro ($449/mo):** AI runs business-scenario role-plays (pitches, meetings, negotiations)
- **Med ($699/mo):** AI runs OET-aligned clinical scenarios (history-taking, handover, etc.)

**Rise methodology enforcement:** system prompt requires non-judgmental, encouraging tone; celebrates effort not outcome; soft-routes distress signals to human coach.

**Build status:** design spec in [`courses/elevare-ai.md`](courses/elevare-ai.md) + plan-feedback Section 14. Not built yet. Trigger to build: first 10 paying customers on any tier (validates demand). Estimated effort when triggered: 1 week (Donal).

**Future v0.5 (voice mode):** triggers at $2k MRR. 11Labs free-tier voice clones Debby's voice. WhatsApp voice-note input from student. Same 3 modes.

**Future v1 (Stage 4 ambitions):** Orpheus streaming + RVC on M5 + <2.5s latency. Triggers at $5k MRR × 2 months (per Ambitious Phase framing in plan-feedback Section 17).

---

### 2. Tutor Operations Agent — Backend Automation

**Role:** zero customer-facing surface. Automates ops so tutors can focus on coaching.

**Platform:** Make.com (per `MAKE_COM_AUTOMATIONS.md`).

**Handles:**
- Calendly booking → Airtable student record
- Whop payment webhook → unlock Elevare AI access + assign cohort + notify coach
- Coach session notes (Google Sheet) → student history log (Airtable)
- Weekly NPS pulse via WhatsApp
- At-risk student flag (missed 2 sessions → coach pinged)
- Monthly progress report auto-generated from session logs
- Tutor payout calculation (pay-per-lesson schedule from plan-feedback Section 16)
- Content queue → posting reminders (manual copy-paste phase) or Buffer API (automated phase)

**Human-in-loop gates:**
- Every student outreach gets tutor sign-off before send
- Every testimonial request gets coach review before send
- Every refund / churn-save has 1-hr human delay before auto-response

**Build status:** `MAKE_COM_AUTOMATIONS.md` has scenario specs. Some running (payment webhook), most pending. Donal owns implementation.

---

### 3. Marketing Content Agent — Content Flywheel

**Role:** produces ad creative + organic content at 2026 quality thresholds.

**Platform:** Elevare's own `marketing/marketing-dashboard.html` (audited 2026-04-17 — improvement plan in [`marketing-agent-improvement-plan.md`](marketing-agent-improvement-plan.md)).

**Content split (Section 15 of plan-feedback):**
- **Paid (AI-generated):** 2 short video variants + 1 carousel per week, per product. Voice clone (when available) + stock footage via marketing dashboard. Rotation every 48 hrs.
- **Organic (human-led):** 3 Debby-led phone videos per week (30-60 sec each) + 1 long-form LinkedIn/YouTube per week. Not AI-replaced — 2026 platforms downrank detected AI.

**Per-product scenario libraries:**
- Elevare AI: casual / general English hooks, low-threshold CTAs ($29 tripwire)
- Speak: conversation-confidence stories, peer-cohort social proof
- Fluency: deadline-urgency hooks, graduation stories, cohort-countdown ads
- Pro: business-English fails and fixes, LinkedIn-first thought-leadership
- Med: OET pass stories, NMC/AHPRA pathway content, nurse-forum value posts

**Build status:** marketing agent is a cosmetic UI with stub integrations. 5 prioritized fixes (9-hr critical path) in `marketing-agent-improvement-plan.md`. Top priority: wire in Med + Pro content so the highest-margin products can be pitched.

---

## What the earlier architecture got wrong (for the record)

The v1 architecture defined 5 agents (Luna / Atlas / Athena / Nova / Orion). Problems with that model:

- **Named personas for agents users don't see** — Atlas / Athena do backend work, naming them confused the build
- **5 agents meant 5× the integration complexity** — we couldn't ship any of them well
- **Agent names collided with product plans** — was "Luna" the student chatbot or the AI tutor? Plan had both
- **Forecasting agents that didn't yet solve real problems** — Nova (analytics) and Orion (predictive) are Phase B+ ambitions, not Month 1 scope

**The 3-agent model above is built around jobs, not names.** Each agent's existence traces directly to a revenue mechanism: AI to the $29 tier + included layer, tutor-ops to the coach-led tiers' margin, marketing agent to the lead funnel. When we need more agents, they earn their way in by solving a real problem we're currently solving manually.

---

## Trigger points — when to extend the system

- **10+ paying students across all tiers** → build Elevare AI v0 (3-mode WhatsApp bot)
- **$2k MRR sustained 1 month** → Elevare AI v0.5 voice mode
- **$2k MRR sustained 2 months** → real marketing agent analytics (Meta/Buffer APIs)
- **$5k MRR sustained 2 months** → Ambitious Phase A begins (autonomous client pipeline)
- **5 tutors + 50 students** → dedicated Operations Agent UI (vs Make.com + sheets)

Until those triggers hit, we don't build. The discipline is the architecture.

---

## What lives outside this architecture (explicit non-goals)

- Agent personas / chatbots with names meant to be recognized by students (Luna / Amara / etc.) — superseded by "Elevare AI" as the single brand
- Stage 4 voice streaming, Orpheus / RVC / Coqui XTTS — deferred to $5k MRR trigger
- Custom dashboards / MDash / GHL-killer — Ambitious Phase B, $5k MRR trigger
- Multi-language marketplace — Year 2+
- Email nurture bots (Month 2+, after lead magnet proves out)
- Social posting bots (Month 3+, after manual cadence proves content-market fit)

---

## File references

- [`courses/implementation-methodology.md`](courses/implementation-methodology.md) — universal 5-stage delivery loop (applies to all products)
- [`courses/elevare-ai.md`](courses/elevare-ai.md) — Elevare AI v0 course outline
- [`plan-feedback-2026-04-17.md`](plan-feedback-2026-04-17.md) Section 14 — full AI tutor scoping
- [`marketing-agent-improvement-plan.md`](marketing-agent-improvement-plan.md) — marketing agent fixes
- [`MAKE_COM_AUTOMATIONS.md`](MAKE_COM_AUTOMATIONS.md) — tutor operations automation specs
- [`courses/oet-diagnostic-rubric.md`](courses/oet-diagnostic-rubric.md) — intake scoring (feeds Elevare AI persona for Med students)

---

*Architecture v2 — 2026-04-17. Author: Nick (Claude) for Debby. Previous v1 retired as it predated the 5-product taxonomy decision.*
