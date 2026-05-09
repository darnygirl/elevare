# TODO — Student Success Agent (v0)

**Created:** 2026-04-24 by Nick (Claude) for Debby
**Updated:** 2026-05-01 — decisions locked, Phase 1 ready to start
**Goal:** Build the retention loop that fills the "Student Success" slot in [frontend/admin.html](frontend/admin.html) org chart. Automate onboarding → check-ins → at-risk rescue → NPS → churn-save so Debby stops doing follow-ups by hand.
**Estimated effort:** 10–13 hrs across 4 phases. Ship Phase 1 alone (~3–4 hrs) for immediate onboarding coverage.
**Owner:** Debby. Suggested cadence: 2 hr/day blocks (matches daily-workflow ritual). Phase 1 = 2 sittings.

---

## Decisions locked (2026-05-01)

| # | Decision | Locked value | Reasoning |
|---|---|---|---|
| 1 | Owner | **Debby** | Marketing rebuild already with Donal; this is lower-skill (Make.com scenarios + email templates), Debby can own. |
| 2 | Email provider | **Resend** | Free tier (3k/mo, 100/day) covers us 12+ months at current scale. Modern API, dev-friendly. |
| 3 | Student DB | **Notion** | Already in daily tool stack; no second tool to learn. |
| 4 | Escalation channel | **Notion daily digest** | Single page lists "students needing your attention today." Fits end-of-day ritual. No interruption noise. |
| 5 | Phase timing | **Ship Phase 1 alone, gather 2 weeks real data, then build Phase 2–4** | All thresholds (14 days, 2 no-shows, day-30 NPS) are guesses today. Real signup data will calibrate them before we lock them in. |
| 6 | Rise methodology | **Keep** | Still live on [index.html:2186](index.html#L2186) as "methodology layer that pairs with every program" — non-judgmental, celebrates effort tone applies to agent emails. |

---

## Positioning — not a new agent

[AI_AGENTS_ARCHITECTURE.md](AI_AGENTS_ARCHITECTURE.md) already defines three agents:

1. **Elevare AI** — student-facing practice companion (Typebot/WhatsApp + OpenRouter)
2. **Tutor Operations Agent** — backend Make.com automations
3. **Marketing Content Agent** — dashboard (rebuild in progress, Donal)

The retention loops this spec covers (welcome flow, at-risk flag, NPS pulse, churn-save) are already scoped under **Tutor Operations Agent** in that doc (lines 47–56) but **not built**. So this TODO is not a 4th agent — it's the unbuilt retention half of agent #2. The org-chart slot name "Student Success" is the role; the agent behind it is the existing Tutor Ops agent, extended.

> ⚠️ `AI_AGENTS_ARCHITECTURE.md` is written against the dead 5-product taxonomy (Elevare AI / Speak / Fluency / Pro / Med). Current taxonomy is 3-tier + 3 add-ons (General / Pro / Med + AI Bot / 1:1 / OET Bundle). That doc needs its own refresh TODO — out of scope here but flagged.

---

## Why this first (triage link)

From the admin-structure triage (2026-04-24):

| Ops slot | MRR impact | Debby's avoidance rank | Verdict |
|---|---|---|---|
| Student Success (retention / follow-ups) | **High** — every saved student = recurring MRR | #1 (follow-ups are her worst avoidance) | **BUILD FIRST** |
| Marketing | High | #2 (posting) | Already in progress (Donal, 9 hr) |
| Tutor Ops (scheduling, payouts) | Low | — | Calendly + Make.com, no agent |
| Customer Support | Medium | — | Extend existing Typebot, no new agent |
| Finance / Admin | Low | — | Defer to $10k MRR |

**Why Student Success moves MRR** — ops agents save time; retention agents save money. One saved $99/mo General student over 6 months = $594 recovered. The agent pays for its build cost within 2 saves.

---

## Current state (what exists vs. gaps)

### What exists (verified — grep-checked)

| Component | Status |
|---|---|
| Typebot + OpenRouter (LLM chat infra) | Running — used on site chat widget ([CHAT_WIDGET_SETUP.md](CHAT_WIDGET_SETUP.md)) |
| Whop (payments + course access) | Running — see [payment-contingency.md](payment-contingency.md) |
| Calendly (booking) | Running — see [CALENDLY_SETUP.md](CALENDLY_SETUP.md) |
| Make.com (automation platform) | Account exists — scenarios specced in [MAKE_COM_AUTOMATIONS.md](MAKE_COM_AUTOMATIONS.md) |
| Whop payment webhook → cohort assign | **"Some running"** per architecture doc line 62 — needs verification |

### Gaps (confirmed missing)

| Gap | Evidence |
|---|---|
| No welcome message on new Whop payment | Architecture doc line 49 mentions it as spec'd but build status "pending" |
| No booking-followup if student never schedules first session | No reference in repo |
| No at-risk flag (missed 2 sessions → coach pinged) | Architecture doc line 52 lists as "pending" |
| No NPS pulse | Architecture doc line 51 lists as "pending" |
| No churn-save flow on Whop cancel-pending | Not mentioned in any doc |
| No WhatsApp Business API / Twilio account | Assumed in architecture doc but no setup evidence found |

### Channel — locked

**v0 channel: email via Resend.** WhatsApp upgrade triggers at 10 paid students (matches Elevare AI trigger in architecture doc line 33). Setup friction for WhatsApp Business / Twilio is not worth paying before that scale.

---

## Scope

### IN (v0)

1. **Onboarding loop** — Whop payment → welcome email → first-booking nudge at 72 hr / 7 days / 14 days (escalate to Debby at day 14 if no booking)
2. **Session-attended loop** — Calendly attended webhook → thank-you + next-booking CTA; no-show → rebook nudge + flag
3. **At-risk flag** — no session in 14 days after last attended → re-engagement email + Debby alert
4. **NPS pulse** — day 30 / day 60 / day 90: 1-question rating (1–5) + optional comment box
5. **Churn-save** — Whop cancel-pending webhook → delay 1 hr (human-in-loop gate) → offer pause / downshift tier / 1:1 with Debby → if confirmed cancel, graceful offboard
6. **Debby dashboard view** — single Notion page or Airtable view listing: at-risk students, low NPS responses, pending churn-saves. This is the handoff surface.

### OUT (v0)

- WhatsApp integration (defer to 10-paid-student trigger)
- Voice messages / voice clone
- LLM-generated personalized essays (v0 uses templates + 1 LLM call per message for name/context variable fills only)
- Auto-refund processing (always goes to Debby)
- Tutor-side notifications beyond the at-risk ping (that's Tutor Ops agent proper, separate TODO)
- Analytics dashboards (use Make.com scenario logs + Notion rollups, no custom UI)

---

## Agent brief — trigger → action → escalation

| # | Trigger | Source | Action | Escalation to Debby |
|---|---|---|---|---|
| 1 | New paid signup | Whop webhook: `membership.created` | Send welcome email with tier-specific onboarding checklist + Calendly link. Record `signup_at` in Notion. | Never (informational only) |
| 2 | No first booking at 72 hr after signup | Make.com scheduled check vs. Calendly API | Send gentle reminder. | No |
| 3 | No first booking at 7 days | Same | Send stronger nudge with testimonial + specific tutor recommendation for their tier. | No |
| 4 | No first booking at 14 days | Same | Send "Is everything OK?" email + Debby alert in Notion. | **Yes** — Debby reaches out personally |
| 5 | Session attended | Calendly webhook: `invitee.created` + tutor marks attended | Thank-you email + next-booking CTA. Update `last_session_at`. | No |
| 6 | Session no-show | Calendly webhook + tutor marks no-show | Rebook nudge email. Increment `no_show_count`. If count ≥ 2, trigger #7. | At count ≥ 2 |
| 7 | At-risk flag (no session 14 days OR 2+ no-shows) | Scheduled Make.com check | Re-engagement email + Notion `at_risk=true`. | **Yes** — Debby follow-up |
| 8 | Day 30 / 60 / 90 anniversary | Scheduled Make.com | Send 1-question NPS email (1–5 scale). | No |
| 9 | NPS response ≤ 3 | Webhook from NPS form | Log in Notion. Send empathetic follow-up offering call. | **Yes** — Debby personal call |
| 10 | Whop cancel-pending | Whop webhook: `membership.cancellation_scheduled` | **1-hr delay (human-in-loop gate).** Then send churn-save email: pause / downshift / 1:1 with Debby. | **Yes** — Debby can intervene in the 1-hr window |
| 11 | Whop cancel confirmed | Whop webhook: `membership.cancelled` | Send gracious offboard + reactivation code. Mark Notion `status=churned`. | No (post-fact) |

**LLM use:** minimal. Templates with variable slots (`{{name}}`, `{{tier}}`, `{{days_since_signup}}`). One OpenRouter Haiku call per message to handle:
- Name-appropriate tone (tutor's first name, student's first name)
- Tier-specific phrasing (General vs. Pro vs. Med)
- 1-turn reply handling when student responds (FAQ deflection → fallback to Debby if uncertain)

Cost estimate: ~50 messages/month × $0.001/message = **$0.05/mo**. Effectively free.

---

## Stack

```
  Whop ──webhook──┐
  Calendly ──webhook──┤
                      ▼
              Make.com scenarios
                (trigger router)
                      │
          ┌───────────┼───────────┐
          ▼           ▼           ▼
       Notion     Typebot/     Resend/
      (records)   OpenRouter   SendGrid
                  (compose)    (email send)
                      │
                      ▼
                  Student inbox
                      │
                      ▼ (if reply)
                  Typebot inbound
                      │
                      ▼ (if uncertain)
                  Debby (Notion alert)
```

**Services in play:**
- **Whop** — payment + cancel webhooks
- **Calendly** — booking + no-show webhooks
- **Make.com** — scenario orchestration + scheduled triggers (daily checks)
- **Notion** — student records + Debby dashboard
- **Typebot + OpenRouter (Haiku 4.5)** — LLM composition layer + inbound reply handler
- **Resend** — email delivery (free tier, 3k/mo)

No new paid services required for v0 (Make.com Free tier = 1k ops/mo, Resend free tier = 3k emails/mo — both cover Phase 1 indefinitely at current scale).

---

## Phase 1 — Onboarding loop (~3–4 hrs)

**Ship this alone first — it's the highest-value, lowest-risk piece.**

### Tasks

1. Create Notion DB `Students` with fields: `name`, `email`, `tier`, `signup_at`, `first_booking_at`, `last_session_at`, `no_show_count`, `nps_last`, `at_risk`, `status`, `debby_action_needed`. (0.5 hr)
2. Make.com scenario: `Whop membership.created` → create Notion row → send welcome email via Resend → log. (1 hr)
3. Write 3 tier-specific welcome email templates (General / Pro / Med) — pull from `courses/*.md` for tier description. (1 hr)
4. Make.com scheduled daily scenario: check Notion for students with `signup_at < now - 72hr` and `first_booking_at IS NULL` → send 72-hr nudge. Repeat conditions for 7-day and 14-day triggers. (1 hr)
5. Wire Calendly webhook → Notion update `first_booking_at`. (0.5 hr)
6. End-to-end test with a dummy Whop purchase. (0.5 hr)

### Success criteria (Phase 1)

- 1 real Whop test payment → welcome email arrives within 60 sec
- Dummy student ignored for 72 hr → nudge email sent
- Student books via Calendly → `first_booking_at` populated → nudges stop firing
- Student ignored for 14 days → Debby sees alert in Notion `debby_action_needed=true`

---

## Phase 2 — Check-in + at-risk loop (~3–4 hrs)

1. Calendly webhook handlers for attended / no-show. (1 hr)
2. Make.com daily scheduled at-risk scanner: `last_session_at < now - 14 days` OR `no_show_count >= 2` → set `at_risk=true`, send re-engagement, alert Debby. (1.5 hr)
3. Re-engagement email templates (3 variants — General / Pro / Med). (1 hr)
4. Test with synthetic student record simulating 14-day inactivity. (0.5 hr)

**Success criteria:** at-risk student gets re-engagement email within 24 hr of crossing threshold; Debby sees new row in "Action needed" Notion view.

---

## Phase 3 — NPS pulse + churn-save (~2–3 hrs)

1. NPS email templates + Typebot form for responses. (1 hr)
2. Scheduled day-30 / 60 / 90 triggers. (0.5 hr)
3. Whop `cancellation_scheduled` webhook → Make scenario with 1-hr delay → churn-save email with pause / downshift / 1:1 options. (1 hr)
4. Wire each churn-save response option to the appropriate action (pause = Whop API pause; downshift = Debby-reviewed manual; 1:1 = Calendly-Debby link). (0.5 hr)

**Success criteria:** Whop cancel-pending event triggers 1-hr Debby window; churn-save email fires after window; at least one of the 3 options (pause / downshift / call) converts in test.

---

## Phase 4 — LLM personalization layer (~2 hrs)

1. OpenRouter integration in Make.com via HTTP module — Haiku 4.5 endpoint. (0.5 hr)
2. Prompt template: given student row + message type, return personalized opener (2 sentences max). System prompt enforces Rise methodology tone (non-judgmental, celebrates effort). (1 hr)
3. Inbound Typebot handler: student replies → LLM classifies intent (FAQ / schedule change / complaint / other) → route to template reply or Debby inbox. (0.5 hr)

**Success criteria:** 5 test messages each get a different, on-brand opener; 5 test inbound replies each route correctly.

---

## MRR model (retention lift)

**Assumptions** (plug in real numbers when known):

| Input | Symbol | Placeholder value |
|---|---|---|
| Current monthly churn rate | `c` | 15% (industry avg for language-learning SaaS) |
| Active paying students | `n` | 10 (post-launch estimate) |
| Weighted avg MRR per student | `arpu` | $180 (mix of $99 General + $299 Pro + $699 Med) |
| % of at-risk students the agent saves | `s` | 30% (conservative — churn-save industry avg 20–40%) |

**Monthly MRR preserved:**

```
saved_students_per_month = n × c × s
                        = 10 × 0.15 × 0.30
                        = 0.45 students/mo

mrr_preserved = saved_students_per_month × arpu
             = 0.45 × $180
             = $81 / month in Month 1
```

That sounds small — but it **compounds**: a student saved in Month 1 still pays in Month 2, 3, 4… Over 12 months, the cumulative MRR recovered from Month-1 saves alone = `0.45 × $180 × 12 = $972`. And the saves stack each month.

**Break-even:** agent costs ~$0.05/mo in LLM + $0 in new infra. 13-hr build at conservative $30/hr shadow rate = $390 opportunity cost. Break-even: **save 2.2 students.** Happens within ~5 months at `n=10`, faster as `n` grows.

**Sensitivity table** (monthly MRR preserved at different student counts):

| n (students) | c=10% | c=15% | c=20% |
|---|---|---|---|
| 10 | $54 | $81 | $108 |
| 25 | $135 | $203 | $270 |
| 50 | $270 | $405 | $540 |
| 100 | $540 | $810 | $1,080 |

At 50 students and 15% baseline churn, this agent preserves ~$405/mo (~5% of $8k MRR at that scale).

---

## Success metrics (deterministic — per Rule 3)

Each phase reports verified numbers after 30 days of operation:

| Metric | Phase | Target v0 |
|---|---|---|
| % new signups who receive welcome email within 60s | 1 | ≥95% |
| % students who book first session within 14 days of signup | 1 | ≥70% |
| Debby manual follow-ups per week | 1–2 | ≤3 (down from current unbounded) |
| At-risk flags per month | 2 | Reported (no target, measure baseline) |
| % at-risk students who re-engage within 7 days of re-engagement email | 2 | ≥25% |
| NPS response rate | 3 | ≥30% |
| Churn-save conversion rate (pending-cancel → save) | 3 | ≥20% |
| LLM message cost per student per month | 4 | ≤$0.05 |

All metrics pulled from Notion DB exports + Make.com scenario logs. Review monthly.

---

## Phase 1 — pre-build checklist

Before opening Make.com on Day 1 of build:

1. **Resend account** — sign up at resend.com, verify sending domain (`elevaremind.io`). ~20 min, includes DNS records on Cloudflare.
2. **Notion `Students` DB** — create page in your existing Notion workspace; fields per Phase 1 task #1.
3. **Whop webhook access** — confirm Whop dashboard → Developers → Webhooks lets you add a Make.com endpoint. (Membership tier needed: standard Whop creator tier.)
4. **Make.com workspace** — confirm Free tier active; bookmark scenario builder.
5. **Email templates draft** — write 3 welcome emails (General/Pro/Med) + 3 nudge variants (72hr/7d/14d) before opening Make.com. Drafts review in Notion, you sign off, THEN paste into the Make scenario. ~1 hr (counts toward Phase 1 effort).

---

## Definition of done (Phase 1)

- [ ] Notion `Students` DB created with all fields
- [ ] Welcome email sends within 60s of Whop test payment
- [ ] 72-hr, 7-day, 14-day nudges fire on schedule for unbooked students
- [ ] First booking stops the nudge sequence
- [ ] Day-14 escalation creates a visible Debby action row in Notion
- [ ] Debby signs off on copy for all 3 welcome email templates + all 3 nudge templates
- [ ] One real customer processed end-to-end

---

## Related files

- [frontend/admin.html](frontend/admin.html) — org chart showing the Student Success slot this fills
- [AI_AGENTS_ARCHITECTURE.md](AI_AGENTS_ARCHITECTURE.md) — Tutor Ops agent definition (this is its retention half)
- [MAKE_COM_AUTOMATIONS.md](MAKE_COM_AUTOMATIONS.md) — existing Make scenario specs
- [CALENDLY_SETUP.md](CALENDLY_SETUP.md) — Calendly state
- [payment-contingency.md](payment-contingency.md) — Whop webhook context
- [marketing/TODO-marketing-agent-rebuild.md](marketing/TODO-marketing-agent-rebuild.md) — parallel rebuild effort (Donal owns)
