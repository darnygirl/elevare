# Week 1 Execution Cheat-Sheet — Elevare

> One page. Distilled from master plan lines 438-690 + Round-1 + Round-2 feedback. Every day has ≥1 pass/fail gate. Owner: [Debby] executes, [Donal] unblocks on explicit asks only (directive line 44 of master plan).

---

## Success criteria at end of Week 1

- [ ] Domain `elevare.work` purchased + DNS resolving
- [ ] Zoho Mail live at `debby@elevare.work`
- [ ] At least one payment rail verified + tested ($1 self-transaction)
- [ ] Honesty fixes deployed (no fake testimonials, real WhatsApp number, real coach count)
- [ ] Privacy + Terms pages live at `/privacy` and `/terms`
- [ ] Warm-contact Google Sheet ≥ 30 rows
- [ ] 11Labs free tier signed up + 50-sec clone tested
- [ ] Risk-acceptance template signed (`risk-acceptance-template.md`)

If any unchecked by Sun EOD → do not start Week 2 paid-ad work.

---

## Mon — "Rail day"

| Action | Owner | Pass/fail gate | Fallback |
|---|---|---|---|
| Buy `elevare.work` at Cloudflare Registrar | [Debby] | Domain owned in Debby's CF account | If CF Registrar can't process Uganda card → use Namecheap, point NS to Cloudflare |
| Submit Whop KYC (upload Uganda passport + proof of address) | [Debby] | Whop "verification pending" email received | Flag for Wed check (see `payment-contingency.md`) |
| Submit Meta Business Manager setup + domain verify | [Debby] | BM created, domain verify row pending | No fallback — MUST ship Mon |
| Optional 60-min pair with [Donal] to unblock R2 keys OR Debby does solo | [Debby] + [Donal] | R2 keys generated + stored in 1Password | If [Donal] unavailable → Debby generates in her own CF account |

**Gate:** Whop submitted + domain owned + Meta BM started. 3/3 = PASS.

---

## Tue — "Mail day"

| Action | Owner | Pass/fail gate | Fallback |
|---|---|---|---|
| DNS: point `@` + `www` to GitHub Pages | [Debby] | `elevare.work` loads the current site | — |
| Zoho Mail Free signup + domain verify (MX/SPF/DKIM via Cloudflare) | [Debby] | Send + receive test from `debby@elevare.work` | If Zoho rejects → use Cloudflare Email Routing → Gmail |
| Email signature block v1 (logo + tagline + WhatsApp + site) | [Debby] | Paste into Gmail + Zoho; test-send to personal | — |
| Brand lockup v1 (wordmark + monogram + favicon) | [Debby] solo OR [Donal] via Claude Code | Assets in `brand/` folder, pushed to repo | Delegate to Fiverr $50 if stuck |

**Gate:** `debby@elevare.work` sends + receives. 1/1 = PASS.

---

## Wed — "Tools day"

| Action | Owner | Pass/fail gate | Fallback |
|---|---|---|---|
| OpenCode readiness test (`gh auth status` + `wrangler whoami` + SSH test) | [Debby] | All 5 commands from plan line 490 green | [Donal] jumps on 15-min screen-share |
| Check Whop KYC status | [Debby] | "Verified" email OR start Lemon Squeezy backup (per `payment-contingency.md`) | If both stalled → start PayPal Business upgrade |
| Warm-contact Google Sheet started (SMS/WA/LINE/IG/Messenger/LinkedIn) | [Debby] | ≥ 30 rows | Keep dumping Thu-Fri |
| 11Labs Free signup + upload 50-sec AirDrop sample + generate 3 test clips | [Debby] | 3 clips generated, side-by-side QA vs real audio | If quality <80% → defer to Week 2 (50-sec already in hand) |

**Gate:** OpenCode runs + warm list has rows + 11Labs tested. 3/3 = PASS.

---

## Thu — "Copy day"

| Action | Owner | Pass/fail gate | Fallback |
|---|---|---|---|
| Honesty fixes: remove fake testimonials + fix WA number + real coach count | [Debby] | PR merged + live on `elevare.work` | Already partially shipped (commit `2acd4f6`) — audit remaining |
| Privacy + Terms: generate via Termly → deploy to `/privacy` + `/terms` + link in footer | [Debby] | Both pages live + linked | Already exist per frontend/ — verify content matches new brand |
| Apply Round-2 Meta-compliant hero copy (done tonight) | [Debby] | `elevare.work` H1 = "Measurable English Progress in 30 Days" | Done — verify after push |
| Draft first 10 warm-contact DMs in Hormozi referral style (plan line 2034) | [Debby] | 10 drafts saved to Google Doc | Review with [Donal] if stuck on tone |

**Gate:** Honesty fixes live + Privacy/Terms live + 10 DMs drafted. 3/3 = PASS.

---

## Fri — "Reach day"

| Action | Owner | Pass/fail gate | Fallback |
|---|---|---|---|
| Send 20 warm-contact DMs (SMS/WA/LINE/IG/Messenger) | [Debby] | 20 sent, replies logged in sheet | Push 10 more to Sat |
| Attend Chiang Mai Language Exchange (Thu or Tue, whichever next) | [Debby] | ≥ 6 contacts added to Google Sheet | Substitute: coworking day at Yellow or Punspace |
| Confirm payment rail live + test $1 self-transaction | [Debby] | Whop OR Lemon Squeezy OR PayPal: $1 clears + credited | If 0 rails live Fri EOD → escalate to [Donal] weekend unblock |
| Sign `risk-acceptance-template.md` for resolved P0s | [Debby] | File committed with initials on S3, W1, W2, W3 rows | Leave S1, S2 as ACCEPTED with reason if guarantee + DPA not yet in hand |

**Gate:** ≥20 DMs sent + ≥1 rail live + risk template signed. 3/3 = PASS.

---

## Sat — "Follow day"

| Action | Owner | Pass/fail gate | Fallback |
|---|---|---|---|
| Send 15 more warm DMs (different contacts) | [Debby] | 15 sent | — |
| Reply to all responses from Fri DMs | [Debby] | Inbox zero by EOD | — |
| Attend second Language Exchange (Saturday session) | [Debby] | ≥ 6 contacts added | — |
| Book first free-consult call if any reply booked | [Debby] | Calendly link sent to ≥1 lead | OK if zero — numbers game |

**Gate:** ≥15 DMs + inbox zero. 2/2 = PASS.

---

## Sun — "Review day"

| Action | Owner | Pass/fail gate | Fallback |
|---|---|---|---|
| Review Week-1 success criteria list (top of this doc) | [Debby] | Every box checked or risk-accepted | — |
| Review marketing-agent output from the week (plan line 2097) | [Debby] | Content queue populated for Week 2 | If empty → manual post Mon-Tue |
| Post-mortem: what worked, what didn't, 3 things to change for Week 2 | [Debby] | 5-bullet note pushed to repo as `week-1-retro.md` | — |
| Zero new work today — rest | [Debby] | rest | — |

**Gate:** Success-criteria list all GREEN (or documented ACCEPTED). If any RED or missing → triage Mon AM before Week 2 work.

---

## Explicitly NOT in Week 1 (deferred)

Per Round-1 + Round-2 feedback — these belong in Week 2+ and are OFF the Week-1 surface to avoid dilution:

- Paid ads (Day 8+)
- 30-min voice recording (Week 2 RED)
- RVC training on M5 (Week 3-4)
- Astro rebuild (Month 2)
- Stage 4 AI tutor deep-build (Month 2+)
- Bot automation #1-#15 (Month 2+)
- Pillar rename decision execution (blocked on [Donal] sign-off — Week 1 just LOCKS the decision)

---

*Owner: [Debby] executes, [Donal] answers explicit asks only. Compiled from master plan lines 438-690 + `plan-feedback-2026-04-17.md` Round-1 + Round-2. Last revised: 2026-04-17.*
