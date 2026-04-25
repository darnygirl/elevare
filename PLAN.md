# Elevare — Current Plan

> Living doc. One source of truth. Supersedes `status-and-gaps-2026-04-17.md` + scattered TODOs.
> Last sync: Nick + Debby working session.

---

## Taxonomy — LOCKED (3 tiers + 3 add-ons)

| Key | Name | Price | Hook |
|---|---|---|---|
| `elevare-general` | Elevare General | $99/mo self-serve · $199/mo with tutor drops | Fluency + confidence. Small groups, AI facilitator. |
| `elevare-pro` | Elevare Pro | $299/mo · employer-reimbursable | Business English for working pros. |
| `elevare-med` | Elevare Med | $699/mo · 12-week programme | OET Grade B in 12 weeks. Pass-or-keep-coaching. |
| `addon-ai-bot` | AI Practice Bot | +$29/mo | Stacks on any tier. WhatsApp 24/7 drills. |
| `addon-1to1` | Extra 1:1 Tutor Time | +$199/mo | Private weekly coaching on top. |
| `addon-oet-bundle` | OET Exam Bundle | +$449 one-time | Med only. Exam-month intensive + mocks. |

**Dead names — must NEVER appear in user-facing copy:** Lingua, Rise, Flex Nexus, Elevare AI, Elevare Speak, Elevare Fluency.

---

## Where we are right now

- **Last commit:** `f2f3d91 feat(frontend): retire dead product names in team.html visible labels`
- **Site URL (target):** `https://elevaremind.io` (domain needs buying)
- **Ads launch target:** TBD — Monday `2026-04-27` if Saturday list is done, else slip
- **Site-side P0 + P1: ~100% done** (P0 by Nick this session, P1 by concurrent agent commits `41aa235` + `f2f3d91`)
- **Marketing dashboard:** rebuild Phase 3 shipped per `8770a9c`; pending live Buffer connection test

---

## Shipped this session

| Item | Status |
|---|---|
| Recording pack for 4 tutors | ✅ `marketing/recording-pack.md` |
| Site audit for 3-tier leakage | ✅ findings actioned |
| Saturday AM trigger | ✅ `trig_01MRsQNNZvv3WM9Lgxm3oXcC` |
| Sunday recording-day trigger | ✅ `trig_01S3g3yjvwevEReezog5GeZW` (08:01 Bangkok) |
| P0 homepage cleanup — kill dead `$19/$29/$39/$97` cards + 5-program → 3-tier copy | ✅ `index.html` (uncommitted) |
| Marketing agent dashboard fixes (5-product) | ❌ reverted — wrong taxonomy |
| Marketing rebuild TODO + pitch scripts | ✅ commit `27f8292` |
| P1 cleanup (speak→general rename, team.html labels) | ✅ commits `41aa235` + `f2f3d91` (concurrent agent) |

---

## Pending — site-side (I own)

### P2 — cosmetic (defer to post-launch)
- CSS vars `--lingua`, `--rise`, `--flexnexus` — rename next refactor pass
- "Rise methodology" phrase — decision: kill or keep as pedagogy name
- Marketing dashboard Buffer live-test (needs real Buffer access token)

---

## Pending — infra (Debby owns — "Saturday list")

Status unknown as of this sync — Nick to update.

1. [ ] Buy `elevaremind.io` on Cloudflare Registrar (5 min) — **critical path for DNS → Meta domain verify**
2. [ ] Submit Whop KYC — Ugandan passport + Chiang Mai lease
3. [ ] Create Meta Business Manager + start domain verify
4. [ ] DM 20 former students for testimonials (deferred Sat → push to Mon or skip)
5. [ ] Ask 4 tutors for photos + clips — **Sunday's work block**
6. [ ] Review `execution-week-1.md`
7. [ ] Deploy `frontend/med.html` — verify live on GitHub Pages
8. [ ] Sign `risk-acceptance-template.md` for P0 items

---

## Pending inputs (blocking but waiting on others)

- **Tony's Telegram bot link** (`t.me/<bot_username>`) — for team.html:1096 placeholder. Debby chasing Tony.
- **Coach photos + 30-sec clips** from Debby + 4 tutors — **Sunday recording session**.

---

## Tomorrow (Sunday 2026-04-26)

Hard stop **17:00** (6pm date). P1 cleanup already done by concurrent agent — Nick's morning slot frees up.

| Time | Who | Task |
|---|---|---|
| 09:00–10:30 | Debby | Coffee + skim `marketing/recording-pack.md` (extra time since P1 done) |
| 10:30–11:00 | Debby | WhatsApp 4 tutors the pack link — they arrive prepped |
| 11:00–12:00 | Debby | Tutor 1 — photos + clip, 2 takes |
| 12:15–13:15 | Debby | Tutor 2 |
| 13:30–14:15 | Debby | Lunch + review Tutor 1-2 muted-then-audio-only |
| 14:15–15:15 | Debby | Tutor 3 |
| 15:30–16:30 | Debby | Tutor 4 |
| 16:30–16:45 | Debby | File naming (`clip-<firstname>-v1.mp4`), upload, ping me |
| 17:00 | Debby | **HARD STOP — date prep** |

If Saturday list has open items, they slip to Monday (not tomorrow).

---

## Monday (ads launch day — tentative)

Depends on Saturday list status. Best case:
- Morning: wire tutor footage into homepage + med.html
- Meta ad review (48 hr window — so ads actually live Wed at earliest even if submitted Mon AM)
- Post first round of creative using `marketing/pitch-scripts/*`

---

## Deferred (explicit — don't drift)

- Placement test (real quiz) — post-launch conversion upgrade
- OET Pass Playbook designed PDF — post-launch, Canva job
- `courses/*.md` pricing update to 3-tier — Donal's domain
- Legacy orphan pages (`ai.html`, `fluency.html`, `rise.html`, `lingua.html`, `flexnexus.html`) — keep as redirects, full removal post-launch
- Voice cloning integration — $2k MRR trigger
- Astro + MDash rebuild — $5k MRR trigger

---

## Decision log

| Date | Decision | Why |
|---|---|---|
| 2026-04-18 | Pricing rethink: AI $19, Pro $549, Fluency $175×3 | Was 5-product taxonomy — **superseded** by 3-tier pivot |
| 2026-04-24 | Site pivoted to 3 tiers + 3 add-ons | Commit `4613f52` |
| 2026-04-24 | Marketing agent rebuild scope = 9hr handed to Donal | Rebuild spec in `marketing/TODO-marketing-agent-rebuild.md` |
| 2026-04-24 | Buffer chosen over Mailchimp | Attacks avoidance #2 (posting) directly |

---

*Update this file at each session close. Don't let plan state scatter across TODOs again.*
