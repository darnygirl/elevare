# Elevare — Status + Gaps (2026-04-17 night)

> Single-page snapshot of where Elevare stands tonight, where the AI tutor track is, and what's still missing. Written as the final piece in an intense strategy + build day. Owner: [Debby] to triage Monday morning.

---

## Where the AI tutor track stands

### Plan vs reality

| What Donal's master plan said | What we agreed in Round 2 | Today's state |
|---|---|---|
| Full Stage 4 AI tutor — voice-cloned Amara, Orpheus streaming on M5, 280 lines of spec (plan lines 1488-1770) | **Scoped to "Elevare AI Practice Companion v0" — 3-mode WhatsApp bot, shippable in 1 week** (plan-feedback Section 14 + `courses/elevare-ai.md`) | Design locked. Not yet built. |
| Ambiguous naming — Amara vs Luna contradictions between plan + `AI_AGENTS_ARCHITECTURE.md` | **Elevare AI** is the product + brand name. Internal persona can be whatever the final bot answers to. | Decision made, docs aligned. |
| Tied to Stage 4 voice clone + Orpheus + RVC on M5 | **Text-only v0**, voice mode deferred to v0.5 (needs $2k MRR trigger) | Clean defer. |
| Standalone product OR tech layer — unclear | **Standalone $29/mo product** (Option B locked). Powers all other products as included layer too. | Decision made. |

### Three modes built into v0 (per `courses/elevare-ai.md`)

1. **Scenario Role-Play** — 10 min max, student picks situation, AI plays counterpart
2. **Session Warm-Up** — 2 min before live coach call, 3 confidence prompts
3. **Between-Session Recap** — 5 min, AI reviews last coach session (notes piped in), asks recall questions

### Existing repo artefacts

- `tutor-agent/tutor-dashboard.html` — 90KB UI built before v0 scope was locked. Will likely need gutting or adapting.
- `tutor-agent/tutor_server.py` — 3KB Python server stub
- `tutor-agent/README.md` — notes from earlier design
- `AI_AGENTS_ARCHITECTURE.md` — describes 5-agent system (Luna / Atlas / Athena / etc) — predates the 5-product taxonomy decision. **Needs rewrite** to align with current plan.

### What ships next on the AI tutor track

1. **Nothing yet in Month 1** — Month 1 is sell-before-build. Launch Elevare Med + Speak + Pro manually first.
2. **Month 2:** build v0 three-mode bot using Typebot or Chatfuel + OpenRouter (Haiku 4.5). WhatsApp-native. Cost estimate: $0.02 per student per 10-min session.
3. **Month 2:** rewrite `AI_AGENTS_ARCHITECTURE.md` to match 5-product taxonomy
4. **Month 3+:** voice mode (v0.5) — trigger $2k MRR sustained
5. **Month 4+:** full Stage 4 ambitions (Orpheus / RVC / streaming) — trigger $5k MRR sustained

### Owner

- [Donal] — bot build (when triggered)
- [Debby] — scenario library content + prompt engineering for Rise methodology alignment
- [Claude] — rewrite `AI_AGENTS_ARCHITECTURE.md` once triggered

---

## What's shipped today (commit history)

```
2a1eb72 feat: Full curricula + Med landing copy + OET Pass Playbook
481e2f8 feat: 5-product taxonomy — course outlines + implementation methodology
5c72bb1 docs: Sections 13-17 — ADDs, AI Tutor v0, content split, tutor model, vision framing
8ee367d docs: Add Section 11 (10 strategic recommendations) + kickoff block
[d511f46, 979758b, e88049f, earlier]
```

Tonight will add on top:
- `frontend/med.html` — full Elevare Med landing page (live-site-ready)
- `courses/oet-diagnostic-rubric.md` — intake scoring tool
- `courses/email-capture-flow.md` — 5-email lead magnet sequence
- `marketing-agent-improvement-plan.md` — 5 prioritized marketing agent fixes
- `courses/exports/*.pdf` — 8 PDF exports of all course docs for reading
- `status-and-gaps-2026-04-17.md` — this file

---

## Gap analysis — what's still missing across the whole Elevare setup

### P0 — Must close before Month 1 sales start (5 items)

1. **OET Pass Playbook PDF doesn't exist as a real PDF yet** — only as markdown (`courses/oet-pass-playbook.md`) and PDF via LibreOffice export (`courses/exports/oet-pass-playbook.pdf`). Need a designed PDF with branding + cover + layout for the lead magnet to look professional. Effort: 2-4 hrs (Canva or Google Docs + Elevare branding). Owner: [Debby].

2. **Real testimonials from past India students** — Section 13.8 recommendation. Zero real testimonials exist. The Med landing page has a placeholder. Without these, cold-traffic ads convert ~40% below with-testimonials baselines. Owner: [Debby] DM 20 former students this week.

3. **Coach photos + 30-sec intro videos** — Section 13.7. Site still uses stock images. Ads need faces. Debby + 4 tutors × 3 photos + 1 clip = one afternoon of work. Owner: [Debby] + tutors.

4. **Whop KYC submitted** — per `payment-contingency.md` Mon Day 1 action. Still pending. Blocks every payment flow. Owner: [Debby].

5. **Meta Business Manager setup** — blocks Day-8 ad launch. Owner: [Debby].

### P1 — Must close before ads launch Day 8 (4 items)

6. **Privacy + Terms pages live** — P7 in `plan-feedback-2026-04-17.md`. Meta rejects ads without working ToS/Privacy URLs. Use Termly free generator, deploy to `/privacy` + `/terms`. Effort: 1-2 hrs. Owner: [Debby].

7. **Risk acceptance template signed** — `risk-acceptance-template.md`. 11 P0 items from plan Stage-4 audit. Each needs Debby's initial + date. Effort: 30 min. Owner: [Debby].

8. **Elevare Med first tutor onboarded** — landing page goes live, assessment calls happen, no OET-specialist coach exists yet. Can Debby cover intake + first-week herself? Yes. But for actual delivery need 1 dedicated Med coach. Effort: ongoing recruiting. Owner: [Debby].

9. **Calendly setup for `cal.com/elevare/med-assessment`** — med.html references this URL. It may not exist yet. Create the 10-min slot type with the intake-rubric prompt. Effort: 30 min. Owner: [Debby].

### P2 — Should close by end of Month 1 (6 items)

10. **Marketing-agent Med templates wired in** — per `marketing-agent-improvement-plan.md` #1. 4 hrs. Owner: [Donal].
11. **Tutor dashboard updated to 5-product taxonomy** — lines 85-101 of `tutor-agent/tutor-dashboard.html`. 1 hr. Owner: [Donal].
12. **AI_AGENTS_ARCHITECTURE.md rewrite** — align to 5-product taxonomy. 2 hrs. Owner: [Claude] or [Debby].
13. **Elevare AI v0 WhatsApp bot built** — Section 14 scope. Estimate 1 week. Trigger: first 10 paying students on any tier (validates demand). Owner: [Donal].
14. **AI content creative for Meta ads** — 2 short videos + 1 carousel per week. Pulls from marketing-agent once updated. Owner: marketing-agent + [Debby] QA.
15. **Speak + Fluency + Pro landing pages** — currently only Med has a live page. Others need `/frontend/speak.html` etc. Effort: 3-4 hrs each if templated off med.html. Owner: [Debby] or [Donal].

### P3 — North-star items (defer to trigger events)

16. **Astro + MDash rebuild** — $5k MRR trigger. Do not start before.
17. **Voice-cloned Amara / Orpheus streaming** — $2k MRR trigger.
18. **Ambitious Phase A/B/C** — $5k MRR sustained 2 months trigger.
19. **Pro industry variants** (tech/finance/medical/real estate) — 3+ students in a category trigger.
20. **Multi-language marketplace** — Year 2+.

---

## The 1-sentence summary of where Elevare is tonight

**Strategy clear, content shipped, infrastructure 30% built, first paying student still 2-7 days away pending Debby's Monday morning KYC + domain + Meta BM actions.**

---

## Monday morning action list (non-negotiable, ≤ 2 hrs total)

1. Buy `elevare.work` on Cloudflare Registrar (5 min)
2. Submit Whop KYC with Uganda passport + Chiang Mai lease (10 min)
3. Create Meta Business Manager + start domain verify (15 min)
4. DM 20 former India students for testimonials (15 min)
5. Ask 4 tutors for 3 photos + 30-sec clip each (10 min)
6. Review `execution-week-1.md` — lock rest-of-week schedule (10 min)
7. Deploy `frontend/med.html` (pushed tonight) — verify live on GitHub Pages (5 min)
8. Sign `risk-acceptance-template.md` for every P0 with current resolved/accepted state (20 min)

After Mon AM: ad-creative work + assessment-rubric testing begin. Ads launch gated on Day-8 readiness.

---

*Status + gap analysis by Claude for Debby, 2026-04-17. Revisit Monday night to score what shipped vs slipped.*
