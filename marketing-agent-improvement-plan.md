# Marketing Agent — Improvement Plan (2026-04-17)

> ⚠️ **SUPERSEDED 2026-04-24** — site repositioned from 5-product (AI/Speak/Fluency/Pro/Med) to 3-tier + add-ons (General/Pro/Med + AI Bot/1:1/OET Bundle). The taxonomy in this doc is dead. See [marketing/TODO-marketing-agent-rebuild.md](marketing/TODO-marketing-agent-rebuild.md) for current scope.

---

## Current Status (2026-04-24, after commit `c46c081`)

This audit was written 2026-04-17 against a now-dead taxonomy. Most of the gaps it identified have since been closed by the rebuild plan in `marketing/TODO-marketing-agent-rebuild.md`. Status of every original finding:

### Broken / stub-only items

| Original finding | Status now | Evidence |
|---|---|---|
| API keys are `YOUR_xxx` placeholders (Mailchimp / Buffer / SendGrid / Resemble / 11Labs / Play.ht) | ❌ **Still true** | Phase 3 work — needs Buffer signup + token paste |
| Save Settings button does nothing — no localStorage persistence | ✅ **Already fixed** (pre-session) | `localStorage` save at `marketing-dashboard.html:1914`, load at `:2305` |
| Voice clone functions (Resemble / 11Labs / Play.ht) are uncalled stubs | ❌ **Still true** | Plus pre-existing JS parse bug at `marketing-dashboard.html:2192` (orphaned `try` block from prior refactor). Voice Studio doesn't run at all. |
| Analytics dashboard hardcoded fake numbers (2.4K reach / 4.8% engagement / 156 clicks) | ✅ **Fixed in `c46c081`** | All stat values replaced with `—` placeholders + orange banner: *"Do not use any number on this page until it's live"* |
| Calendar shows fake scheduled posts | ⚠️ **Partially fixed in `c46c081`** | Placeholder text updated to current tier names + disclaimer added: *"Real scheduling ships with Buffer (Phase 3)"*. UI still cosmetic but no longer misleading. |
| Content queue lives in browser memory only | ❌ **Still true** | Phase 5+ work — explicit defer in TODO |
| `postToPlatform()` just alerts "copy/paste manually" | ❌ **Still true** | Phase 3 work — needs Buffer access token |

### Critical taxonomy gap

| Original finding | Status now | Evidence |
|---|---|---|
| Dashboard only knows Lingua / Rise / Flex Nexus | ✅ **Fixed in `c46c081`** | `grep -c "Lingua\|Rise\|Flex Nexus"` returns **0** |
| Zero references to Elevare AI / Speak / Fluency / Pro / Med | ✅ **N/A** — that 5-product taxonomy is also dead | Current taxonomy is General / Pro / Med + 3 add-ons (74 references confirmed) |
| Pricing references `$149` (old Lingua), not `$199` (old Speak) | ✅ **Fixed in `c46c081`** | Now $99/$199 (General), $299 (Pro), $699 (Med) — matches current site at `index.html:1958-2047` |
| No OET-related content, no medical-English templates — cannot pitch the highest-margin product | ✅ **Fixed in `c46c081`** | Full Elevare Med templates wired across LinkedIn, Instagram, voiceless ads, and voice clone scripts. Source: `marketing/pitch-scripts/elevare-pitch-med-*.docx` |

### Net score (5 phases from rebuild plan)

| Phase | Status | Commit |
|---|---|---|
| Phase 1 — taxonomy + content rewrite | ✅ **100% shipped** | `c46c081` (pushed to `origin/master`) |
| Phase 2 — settings persistence + demo banner | ✅ Already shipped pre-session | (pre-existing) |
| Phase 3 — Buffer integration / real posting | ❌ **Queued** — blocked on Buffer signup | — |
| Phase 4 — kill fake analytics | ✅ **Shipped** | `c46c081` |
| Phase 5 — real Meta analytics, voice clone, scheduling | ❌ **Deferred** per TODO scope lock | — |

### What's left (real work)

Two items are still live blockers, in priority order:

1. **Buffer integration** (~3 hrs Donal time, after Debby signs up at buffer.com and pastes access token into Settings) — see Phase 3 in [marketing/TODO-marketing-agent-rebuild.md](marketing/TODO-marketing-agent-rebuild.md).
2. **Pre-existing JS parse bug** at `marketing/marketing-dashboard.html:2192` — orphaned `try { const stream = await ... }` outside any function. ~5 min fix. Flagged in commit `c46c081` body.

Everything else (voice clone, real analytics, Mailchimp, content queue persistence) is Phase 5+ and explicitly deferred until either MRR > $2k or Buffer-driven traffic proves the dashboard ROI.

---

## Original audit (2026-04-17 — kept for historical context)

> Audit of `/home/debby/Desktop/elevare-site/marketing/marketing-dashboard.html` + related config against the new 5-product taxonomy (Elevare AI / Speak / Fluency / Pro / Med). Owner: [Donal] to implement, [Debby] to supply new product copy from `courses/*.md`.

---

## State of the marketing agent today

**What it is:** ~90KB single-page dashboard HTML with inline CSS/JS. Six tabs — Voiceover, Create, Voiceless Ads, Calendar, Analytics, Settings.

**What works:**
- Clean navy/gold UI, responsive, professional
- ~12 weeks of email + social copy already written for Lingua/Rise/Flex Nexus
- 5 voiceless ad templates with narrative arcs — immediately usable
- Local-state content queue (persists within session)
- Ad script generator produces plausible draft copy

**What's broken or stub-only:**
- **All API keys are `YOUR_xxx` placeholders** (`marketing/api-config.js` lines 6-45). Mailchimp / Buffer / SendGrid / Resemble / 11Labs / Play.ht — none connected.
- **Save Settings button does nothing** — no localStorage persistence. User re-enters keys every session.
- **Voice clone functions exist but are uncalled stubs.** `generateVoiceoverResemble()` etc. never fire; will error without real keys.
- **Analytics dashboard is hardcoded fake numbers** (2.4K reach / 4.8% engagement / 156 clicks). Actively misleading for decisions.
- **Calendar shows fake scheduled posts.** UI is cosmetic.
- **Content queue lives in browser memory only** — page reload wipes it.
- **No posting integration.** `postToPlatform()` just alerts "copy paste manually."

**Critical gap vs new 5-product taxonomy:**
- Dashboard only knows Lingua / Rise / Flex Nexus
- Zero references to Elevare AI, Speak, Fluency, Pro, Med
- Pricing references `$149` (old Lingua) not `$199` (new Speak)
- No OET-related content, no medical-English templates — cannot pitch the highest-margin product ($699 Elevare Med) from this dashboard at all

---

## Top 5 improvements — prioritized by revenue impact

### #1 — Wire in Elevare Med + Pro content templates (4 hrs)

**What to change:**
- Add `elevare-ai`, `elevare-speak`, `elevare-fluency`, `elevare-pro`, `elevare-med` options to all product dropdown selects (lines 518, 626, 727, 1461 in `marketing/marketing-dashboard.html`)
- Pull content templates from `courses/elevare-med.md` + `courses/oet-pass-playbook.md` + `courses/elevare-pro.md` into the dashboard's `contentTemplates`, `voicelessAds`, and email template objects
- Add 2 new voiceless ad templates: "OET Pass Guarantee" (Meta-compliant: "measurable progress or we keep coaching") + "Medical Professional" (target nurses + foreign medical grads)
- Update all pricing references to match Section 18 (AI $29 / Speak $199 / Fluency $497 / Pro $449 / Med $699)

**Why (revenue link):** Elevare Med is $699/mo vs $199 Speak = 3.5× MRR per student. If Debby can pitch Med on Day 8 (when ads launch), she unlocks the highest-LTV funnel first. Currently impossible — no copy exists.

**Effort:** 4 hrs (copy already exists in `courses/*.md`, just wire into JS objects)
**Depends on:** nothing. Do first.

---

### #2 — Fix API key persistence + warning banner (2 hrs)

**What to change:**
- Replace mock `saveApiSettings()` (line 1662) with actual localStorage save/load
- On page load, read keys from localStorage and populate `api-config.js` placeholders
- Add status badge per integration ("Connected" / "Not Connected") using existing HTML at lines 926-928
- Add a blocking warning banner when ANY key is still a stub: **"⚠ Marketing agent is in DEMO mode. Configure API keys in Settings to enable live posting."**

**Why (revenue link):** Debby cannot launch integrated auto-posting (Buffer, SendGrid emails) until keys are real. Current save does nothing → she re-enters every session → gives up. Removing friction = she actually uses the tool.

**Effort:** 2 hrs
**Depends on:** nothing. Do in parallel with #1.

---

### #3 — Rebuild analytics dashboard with real Meta/Buffer data (6 hrs)

**What to change:**
- Replace hardcoded stats (lines 880-896) with fetch from Meta Ads Insights API (if Meta keys configured) or Buffer Analytics API
- Fallback: show "Connect your Buffer account in Settings to see live stats" when no keys detected
- Display: weekly reach, click-through rate, cost-per-lead — not made-up percentages

**Why (revenue link):** Fake metrics kill decision-making. If Debby sees "4.8% engagement" is fake, she trusts nothing on the dashboard. Real metrics let her A/B test ad creative and double down on what converts.

**Effort:** 6 hrs (API integration + error handling + fallback UI)
**Depends on:** #2 (keys must be real first)

---

### #4 — Add dedicated "Medical English Marketing" section (3 hrs)

**What to change:**
Create a new top-level tab on the dashboard: **"Med Marketing"** with:
- Elevare Med ad script generator (pre-filled with OET language: "OET pass guarantee," "medical vocabulary mastery")
- 2-3 Elevare Med voiceless ad templates (nurses / foreign-trained doctors / healthcare professionals)
- "Record Med ad intro" (separate from Speak/Pro recording flow to avoid brand confusion)
- 1 "Med student testimonial" template (placeholder until first real testimonial)

Move old Lingua/Rise/Flex Nexus dropdowns to a "Legacy Programs" collapsed section OR rename inline per new taxonomy.

**Why (revenue link):** Separating Med marketing from other products signals premium positioning ($699 ≠ $199). Elevare Med is the fastest path to $750 MRR — close 2 Med students + 2 Speak = $1,796 MRR Day 30.

**Effort:** 3 hrs
**Depends on:** #1 (templates must exist first)

---

### #5 — Wire content queue to real scheduling via Make.com (3 hrs)

**What to change:**
Replace fake "save to queue" at line 1335 with Make.com webhook:
- On queue save → trigger Make scenario → email Debby a reminder + calendar invite for the posting date
- Show "Next scheduled: [date/time] on [platform]" in the UI

Alt (slower): Buffer API integration — queue directly to Buffer.

**Why (revenue link):** A content queue that vanishes on page reload is useless. Real scheduling enforces discipline (3 posts/week vs "post when I remember"). Consistent posting = better organic reach = more free leads = lower CAC.

**Effort:** 3 hrs (Make.com webhook)
**Depends on:** #2 (keys real) + existing `MAKE_COM_AUTOMATIONS.md` docs

---

## Follow-up audit — tutor dashboard

`/home/debby/Desktop/elevare-site/tutor-agent/tutor-dashboard.html` also references old program badges (`.user-badge.lingua`, `.rise`, `.flexnexus` at lines ~85-101). Same treatment needed — add Elevare AI/Speak/Fluency/Pro/Med badges + swap Lingua/Rise/Flex Nexus.

**Effort:** 1 hr (separate follow-up commit)

---

## What NOT to build yet (explicit defer list)

- **Voice cloning integration** — already deferred to Month 2+ per Section 14 of `plan-feedback-2026-04-17.md`. No work on Resemble / 11Labs / Play.ht in dashboard until voice clone is actually needed.
- **TTS generation at scale** — Elevare AI v0 is text-only. Voice mode v0.5 comes when $2k+ MRR proven.
- **Auto-posting to multiple platforms** — manual copy/paste is fine until 25+ students on deck. Scaling problems are good problems.
- **Custom dashboard for tutors/students** — Ambitious Phase B territory. Stays frozen until $5k MRR × 2 months.

---

## Total effort + critical path

| # | Improvement | Effort | Depends on | Revenue impact |
|---|---|---|---|---|
| 1 | Med + Pro content | 4 hrs | — | HIGH — unlocks $699 product |
| 2 | API key persistence | 2 hrs | — | MEDIUM — removes friction |
| 3 | Real analytics | 6 hrs | #2 | MEDIUM — decision-making |
| 4 | Med marketing tab | 3 hrs | #1 | HIGH — premium positioning |
| 5 | Real scheduling | 3 hrs | #2 | MEDIUM — posting discipline |

**Week 1 critical path:** #1 + #2 + #4 = **9 hours total**. Can ship by EOD Thursday if Donal starts Monday AM.

**Month 2 follow-up:** #3 + #5 = 9 hrs, once paid ads are running and queue needs real automation.

---

## Handover to Donal

Donal: when you pick this up, the content to wire in lives at:
- `courses/elevare-med.md` — full 12-week curriculum + positioning
- `courses/elevare-med-landing-copy.md` — section-by-section landing copy
- `courses/oet-pass-playbook.md` — lead magnet content
- `courses/elevare-pro.md` — 4-week business-English curriculum
- `courses/elevare-speak.md` / `elevare-fluency.md` / `elevare-ai.md` — rest of the 5-product family
- `courses/implementation-methodology.md` — universal 5-stage framework

Pricing (Section 18 in `plan-feedback-2026-04-17.md`):
- Elevare AI: $29/mo
- Elevare Speak: $199/mo
- Elevare Fluency: $497 (12-wk) or $199×3 mo
- Elevare Pro: $449/mo
- Elevare Med: $699/mo

Meta ad policy compliance: use **"measurable progress"** not "guaranteed fluent" in ad copy (plan line 1861).

---

*Plan v1 — 2026-04-17. Audit by Claude (Explore agent pass) + recommendation prioritization. Revisit after Week 1 ship to confirm revenue impact.*
