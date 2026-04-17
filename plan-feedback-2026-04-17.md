# Changelog — 2026-04-17 Debby × Claude Review Session

> Response to the 2026-04-15 master plan (`handover-elevare-master-plan-2026-04-15.md`) after a focused improvement pass. Attribution convention matches the master plan: `[Debby]` = Debby's voice, `[Claude]` = AI analysis, `[Donal]` = decisions needed.

---

## 1. Messaging — state of the live site [Debby decides between two taglines]

Two parallel Claude sessions made tagline changes to `darnygirl/elevare`. State reconciled on top of remote master after this commit:

| Slot | Current live (2026-04-17 eve) | My recommendation |
|---|---|---|
| Master tagline | **"Speak With Confidence. Coach-Led. AI-Supported."** (remote PR #5 — plan's #1) | swap to **"The English Program That Actually Sticks."** (plan's #2) |
| Hero H1 | **"Measurable English Progress in 30 Days."** (Meta-compliant) | keep |
| Hero sub | **"A real coach + a 24/7 AI practice partner. From $29/mo — or we keep coaching until you see it."** | keep |
| Flex Nexus pillar | **"Boardroom English. In 30 Days."** (this commit) | keep |

**Pending decision [Debby]:** keep "Coach-Led. AI-Supported." or swap to "Actually Sticks"?

**My rationale for "Actually Sticks" (plan's #2) over "Coach-Led. AI-Supported." (plan's #1):**
- Plan's #1 is a features list dressed as a tagline — sells mechanism, not promise. Every coaching brand can claim "coach-led"; every AI product can claim "AI-supported." Says nothing unique.
- Plan's #2 ("Actually Sticks") names the enemy (apps that don't work, tutors that don't deliver). Creates implicit comparison. Tests better on cold traffic (6 words, high recall).
- Flex Nexus "Where Language Meets Confidence" was sentimental, no job-to-be-done → swapped to "Boardroom English. In 30 Days." regardless of master-tagline outcome.

**Why the hero H1 is locked (not optional):** plan line 1861 explicitly flags "fluent + guaranteed + 30 days" as Meta-rejecting copy. Remote's original H1 "Speak English with Confidence — Coach + AI, 30 Days" is borderline; an earlier attempt "Fluent English in 30 Days — Guaranteed" was explicitly violating. Current "Measurable English Progress in 30 Days" + "or we keep coaching until you see it" matches the plan's approved safe pattern at line 1865.

---

## 2. Critical-path corrections [Claude analysis]

Five issues in the Week 1 RED-gate list + blocker matrix:

### Issue 1 — "15-min voice sample" contradicts the voice-clone plan
Line 9 critical-path + B2 blocker list "15-min clean voice sample" as RED. But lines 1183-1200 say 50-sec (already in hand via AirDrop) is enough for 11Labs free-tier IVC to unblock Week 1 shipping; the 30-min sample is for Week 2+ PVC/RVC training.
**Fix:** strike voice sample from Week 1 RED. Recast B2 as Week 2 RED (30-min recording for PVC/RVC).

### Issue 2 — "Donal off critical path" contradicts 2/3 Week 1 RED items
Line 44 directive says Donal is coach-only. But R2 keys (B3) + OpenCode screen-share fallback (B4) require him.
**Fix (pick one):**
- (a) Lock a single 60-min Monday AM window with Donal to batch-clear both, OR
- (b) Debby spins R2 keys herself in her own Cloudflare account (they're hers anyway per line 1247). Drop Donal from B3.

### Issue 3 — Whop verification is mis-categorized as YELLOW
B5 labeled YELLOW ("gates Day 7-10"). Uganda/Thai KYC takes 3-7 days. Week 1 sequencing (line 636) assumes Whop ready Thu-Sun.
**Fix:** escalate to RED. Start Whop signup Mon Day 1, not Thu. Keep Lemon Squeezy setup in parallel as failover (global MoR, handles VAT, faster approval).

### Issue 4 — Privacy/ToS (B7) should be RED for Week 2, not YELLOW
Meta ad policy review checks live ToS + Privacy URLs before approving creative. Ads launch Day 8 (line 2149). Drafts without hosting = ad rejection = $200 Month-1 ad budget burn + creative rebuild delay.
**Fix:** escalate B7 to RED by end of Week 1. Use Termly free plan for generated boilerplate, deploy to `/privacy` + `/terms` on the live site, link in footer.

### Issue 5 — Cash vs MRR conflation is embedded in the plan
Line 1166 says "2× Flex Nexus ($1,000 cash)" as the "easier path" to $750 MRR. But Flex Nexus is one-time $497 — 2 sales = $994 cash, ~$82/mo amortized. **The "easier path" does NOT hit $750 MRR; it hits $1k cash receipts.**
**Fix:** split Day 30 / 60 / 90 targets into two tracked metrics:
- **Recurring MRR** — renewable monthly subscriptions (AI Tutor, Lingua Live, Complete Communicator)
- **Cohort cash receipts** — one-time Flex Nexus sales, tracked separately (cash in, not MRR)
The $5k target at Day 90 should be explicitly "recurring MRR", with cohort cash tracked as a second line.

---

## 3. 90-day MRR math — rebuilt with churn + LTV

See companion doc: [`mrr-model-v2.md`](mrr-model-v2.md).

**Topline finding:** the master plan's $5,197 MRR at Day 90 has five gaps (no churn, Flex Nexus-as-MRR sleight-of-hand, tutor capacity saturation, Day 30 acquisition math doesn't check out, undefined LTV). Rebuilt honestly:

- Recurring-MRR target at Day 90 **drops from $5,197 to ~$4,150** once Flex Nexus is split out and 10%/mo churn is priced in.
- Still hits $5k **if** either (a) AI Tutor tier scales to 45+ seats (requires ad creative shipped Day 8), or (b) 2 more Complete Communicator seats close in Month 3.
- **Tutor capacity is the hidden bottleneck:** need 6 tutors onboarded by Day 60, not 4, to absorb churn replacement + Complete Communicator volume.
- **Day 30 $750 MRR is achievable but needs 2 Lingua Live + 2 Complete Communicator + 5 AI Tutor** — not the "2× Flex Nexus" shortcut in the plan.

---

## 4. Decisions needed from [Donal] before Monday

- [ ] **Guarantee wording** — confirm "we coach you free until you're fluent" + define refund/extension mechanic (proposed: "If you don't hit CEFR B2 conversational benchmark on Day 30 assessment, program extends free until you do")
- [ ] **Critical-path unblock** — pick: (a) 60-min Monday AM session with Donal, OR (b) green-light Debby spinning her own R2 keys in her own Cloudflare account
- [ ] **MRR tracking split** — confirm future reporting splits "recurring MRR" from "cohort cash receipts" (one shared dashboard, two rows)
- [ ] **Tutor onboarding target** — move from 4 tutors by Day 60 → 6 tutors by Day 60, to absorb churn + Complete Communicator volume

---

# Round 2 — 2026-04-17 (evening) — Deep Audit Findings

Second pass audit of the 12 plan sections not covered in Round 1 surfaced **15 additional issues** (one is self-referential to Round 1). Three new operational runbooks shipped alongside to close the highest-risk gaps. See also `execution-week-1.md` for a 1-page distilled Mon-Sun grid.

---

## 5. Contradictions to reconcile

### Issue 1 — Stage 4 Orpheus vs Week-1 11Labs timeline 🔴
Lines 1455-1567 extensively architect Orpheus real-time streaming TTS as the AI-tutor voice layer. But line 1178 says 11Labs Creator is Month-1 primary and RVC is Week 3-4. The Stage 4 section reads as if Orpheus is simultaneous when it's actually Week 4+.
**Fix:** add one line to the top of Stage 4 Deep-Dive: "Week 1-3 uses 11Labs Creator. Orpheus on M5 activates Week 4+ once M5 setup + RVC are ship-validated."

### Issue 2 — AI Chatbot widget specced against unaudited UX 🔴
Line 1448 explicitly admits "I haven't deep-dived `frontend/book.html`, `tutors.html`, the pillar hubs." But lines 1461-1487 then spec the Stage 1 widget anyway.
**Fix:** [Donal] crawls the existing `darnygirl.github.io/elevare/frontend/*` pages before freezing widget spec. OR widget spec gets marked DRAFT-pending-site-audit.

### Issue 3 — "Your coach doesn't sleep" wedge contradicts hero copy 🔴
Session learnings (line 2393+) claim the one-line wedge "Your coach doesn't sleep. Your tutor doesn't forget." becomes the lead on `elevare.work`. Hero Section spec at line 750 has different copy ("Speak English with Confidence — in 30 Days…"). Round-1 applied yet another version ("Measurable English Progress in 30 Days").
**Fix:** pick one. Recommend hero stays with the Meta-compliant "Measurable progress" H1 (just applied to the live site); the "coach doesn't sleep" wedge becomes **ad headline copy only** (paid creative), not site copy.

### Issue 11 — Niche-Decision ads split contradicts Pillar-Ranking 🔴
Lines 1056-1074 pick "keep 3 pillars, lead with Executive in ads." But ad math (line 2001-2012) allocates 70% Meta spend to Chiang Mai expats (a cross-pillar audience) and 30% to global nomads (Lingua/Flex Nexus).
**Fix:** either narrow ads to Executive-only (remove 30% nomad allocation), or acknowledge the split in Niche-Decision: "Executive leads; ads test all three in Month 1 at 60/20/20."

### Issue 15 — My own Round-1 hero violates the plan's own ad policy 🔴
My Round-1 H1 "Fluent English in 30 Days — Guaranteed." is explicitly listed at [line 1861](/tmp/elevare-plan.md) as a Meta-rejecting claim ("unrealistic guarantees"). The plan's approved safe version (line 1865): "Measurable progress in 30 days — or we work with you until you see it."
**Fix applied tonight:** H1 on live site updated to **"Measurable English Progress in 30 Days."** Sub: "A real coach + a 24/7 AI practice partner. From $29/mo — or we keep coaching until you see it." Section-desc at line 1951 also revised. Need to push + verify ads-compliance before launching paid creative.

---

## 6. Bloat to cut or defer to Phase-2 appendix

### Issue 4 — 15-bot taxonomy distracts from Month-1 manual outreach 🟡
Lines 2059-2075 list 15 automation bots. Line 2077 explicitly admits "Month 1 picks: None built. All manual." So the 200-line taxonomy adds zero velocity to $750 MRR.
**Fix:** move the bot taxonomy table to a Phase-2 appendix file (`phase-2-bots.md`), leave a one-line stub in the main plan: "Bots deferred to Month 2+. See `phase-2-bots.md` for build order."

### Issue 5 — Stack Comparison Tables introduce false urgency 🟡
Lines 1279-1368 compare 25+ tools. Only 2-3 (Whop, Zoho, 11Labs) are Day-30 decisions.
**Fix:** keep the Day-30 tier as-is; move "Post-$750 Optimization" rows to an appendix. Adds the caveat "revisit after Day 30."

### Issue 6 — Ambitious Phase A/B/C mislabeled, sits in execution plan 🟡
Lines 2179-2213 describe autonomous-bot + custom-dashboard + multi-language-marketplace futures. Labeled "post-$5k MRR" but lives inside a Month-1 execution plan, creating gravitational pull.
**Fix:** move Phase A/B/C to a standalone `phase-2-roadmap.md`. Main plan ends at "$5k MRR achieved."

---

## 7. Gaps to fill before Week 1

### Issue 7 — Payment contingency is under-specified 🟢
Wise blocked (KYC failed). Whop is primary; Lemon Squeezy backup; LINE Pay mentioned but not integrated; PromptPay flagged as "nice-to-have." If Whop Uganda ID verification hangs 5+ days, there's no documented pivot.
**Fix:** see new `payment-contingency.md` — failover tree with KYC timelines + "switch by Day X" triggers.

### Issue 8 — AI Tutor demo payment path ambiguous 🟢
Lines 1662-1671 describe a "guest session, no signup" demo. Lines 1673-1679 require Whop account for tutor access. Prospects told to "try it" then hit a paywall.
**Fix:** [Donal] + [Debby] confirm: (a) free guest-session capped at 5 min, email-capture only; OR (b) Whop-gated with $0 "free trial" tier. Currently ambiguous; pick one before the AI tutor demo link is shared with any prospect.

### Issue 9 — P0 risk acceptance has no template 🟢
Stage-4 audit (lines 1771-1833) flags 11 P0s. Pre-ship gate at line 1834 says "all P0s resolved or explicitly accepted-risk with Debby's sign-off." But no sign-off template exists.
**Fix:** see new `risk-acceptance-template.md` — one row per P0, Debby initials + dates each, file committed to repo as audit trail.

### Issue 10 — M5 is a single point of failure with no monitoring 🟢
Donal's Mac M5 hosts Orpheus TTS + RVC training + Coqui XTTS fallback + marketing-cron. Stability audit (ST1) acknowledges SPOF but mitigation is "graceful degrade." No monitoring or alerting.
**Fix:** see new `m5-monitoring.md` — heartbeat endpoint, alert thresholds, Debby-side 11Labs-cloud fallback procedure when M5 is dark >15 min.

---

## 8. Deferred items that should be promoted to RED/Week 1

### Issue 12 — Brand rename decision blocks Astro rebuild 🔵→🔴
Lines 882-945 propose renaming pillars (Lingua→Language, Rise→Confidence, Flex Nexus→Executive). Line 102 says "[Debby] keeps Lingua/Rise/Flex Nexus naming." But Astro rebuild (line 1001) references the new names. Unresolved.
**Fix:** Lock decision by EOD Mon Week 1. If rename happens, every pillar page + footer + nav + pitch deck + email template changes. If it doesn't, Astro rebuild copy must be reverted. Escalate B10 to RED.

### Issue 13 — Whop + Meta verification tight for Day-8 ad launch 🟡→🔴
B5 (Whop) + B6 (Meta BM) both YELLOW in master plan. Both must be GREEN by Day 7 for ads to launch Day 8. Uganda ID KYC can take 3-7 days.
**Fix:** escalate both to RED. Start Whop + Meta BM setup Monday Day 1, not Thu-Day 5. Lemon Squeezy setup runs in parallel (see `payment-contingency.md`).

### Issue 14 — Voice-sample contingency if Debby is late 🟢
B2 is RED for 15-min voice sample (actually 50-sec is already enough for Week 1 per Round-1 Issue #1). But if the 30-min Week-2 recording slips, content cadence targets 25 posts/day (line 2099) hit the 11Labs free-tier 10 min/mo cap by Day 10.
**Fix:** escalation path: if 30-min sample not delivered by Day 14, content cadence drops from 25/day to 5/day (stays under 10 min/mo cap) until sample lands. Ad launch is unaffected; organic content volume throttled, not killed.

---

## 9. Operational runbooks shipped alongside this doc

| File | Addresses | Owner |
|---|---|---|
| `payment-contingency.md` | Issue 7 | [Debby] (execute) + [Donal] (approve triggers) |
| `risk-acceptance-template.md` | Issue 9 | [Debby] (sign) + [Donal] (review) |
| `m5-monitoring.md` | Issue 10 | [Donal] (implement) + [Debby] (fallback drill) |
| `execution-week-1.md` | distills lines 438-690 of master plan into Mon-Sun grid | [Debby] (execute) |

---

## 10. Updated decisions needed from [Donal]

Round-1 still pending (4):
- [ ] Guarantee wording — confirm "or we keep coaching until you see it" as Meta-compliant replacement for Round-1's "guaranteed" claim
- [ ] Critical-path unblock — pick (a) 60-min Monday AM session OR (b) Debby spins her own R2 keys
- [ ] MRR tracking split — "recurring MRR" vs "cohort cash receipts"
- [ ] Tutor onboarding target — 6 by Day 60, not 4

Round-2 new (5):
- [ ] **Pillar rename** — Lingua/Rise/Flex Nexus (keep) or Language/Confidence/Executive (rename)? Blocks Astro + all brand assets (Issue 12)
- [ ] **AI tutor demo path** — free 5-min guest session OR Whop $0 free trial tier (Issue 8)
- [ ] **Niche ads split** — Executive-only ads OR 60/20/20 across 3 pillars in Month 1 (Issue 11)
- [ ] **Cut bloat** — approve moving Phase A/B/C + 15-bot taxonomy + Stack-Comparison non-critical rows to appendix files (Issues 4, 5, 6)
- [ ] **Escalate Whop + Meta BM to RED** — start Day 1, not Day 5 (Issue 13)

---

---

## 11. Ten more changes I'd make (beyond the 15 issues above) [Claude recommendation]

A broader editorial pass on the plan surfaced 10 additional changes/additions that would materially reduce risk and speed time-to-$750-MRR. They sit outside the 15 audit findings because they're strategic calls, not contradictions/bloat/gaps. Each needs Debby sign-off before execution.

### Five things to CHANGE

11.1 **Kill the 5-offer homepage grid — lead with ONE CTA.** Confused visitor picks nothing. Make "$1 AI Tutor trial" the single hero CTA; move the 5-offer comparison table to `/pricing`. Plan line 755 ("The 5 Offers Only") contradicts its own principle — a hero should have ONE job.

11.2 **Replace the free trial with a $1 trial.** Free attracts tire-kickers who never convert. Hormozi-style $1 trial filters for intent + collects a payment method, which 3-4x's conversion to paid. Whop supports this natively. Apply to AI Tutor tier only; keep coach tiers at their current price with a free 15-min discovery call.

11.3 **WhatsApp primary CTA, Calendly secondary.** Thai/SEA market converts 3-5x higher on WhatsApp than booking forms. Current site hierarchy is inverted. Make WhatsApp the dominant button; Calendly backup.

11.4 **Kill AI Tutor $29/mo standalone for Month 1.** The tier's math only works at ad-scale (CAC <$80 per `mrr-model-v2.md`), which requires creative that isn't built yet. Month 1 sells coach-gated offers only ($149 Lingua Live / $199 Complete / $497 Flex Nexus). AI Tutor standalone launches Month 2 with ad creative.

11.5 **Define the 30-day "progress" gate BEFORE selling anything.** The guarantee is "measurable progress or we keep coaching" — but measurable *by what*? CEFR B2 conversational? 10 new phrases used unprompted? Tutor sign-off? Without a pre-locked rubric, refunds become arguments. Rubric must exist in writing before first sale.

### Five things to ADD

11.6 **Placement quiz as the SINGLE lead magnet.** Plan treats it as one of several ideas. Ship it Monday, not Week 3. Quizzes convert 2-3x vs email capture + self-segment visitors into correct tier (AI Tutor / Lingua / Flex Nexus). Typeform free tier is 30 minutes to stand up.

11.7 **Real coach photos + 30-sec intro videos BEFORE ads run.** Plan schedules Day 7. Should be Mon Day 1. Faces-in-ads convert 30-50% better than abstract branding. Debby + 4 tutors = 5 photos + 5 clips. One afternoon on a phone with good light.

11.8 **Mine Debby's 10 years of India teaching for testimonials.** Plan says "real testimonials by Week 3." She has 10+ years of alumni. Reach out to 20 former students this week, ask for 1 sentence. Even 3 real quotes kill the biggest cold-traffic objection ("does this actually work?").

11.9 **Wizard-of-Oz the AI tutor for Month 1.** Plan builds the full Stage 4 system over weeks before shipping. Skip that. Month 1 "AI tutor chat" = Debby + tutors manually responding in WhatsApp, transparently badged as "AI-assisted" or "human-augmented coach." Ship the funnel first; automate the product once demand is proven.

11.10 **Refund-to-credit mechanic.** Every refund request gets offered 4 free weeks of extra coaching instead. Saves 30-50% of refunds, keeps cash in, gives the customer a fair second chance. Costs nothing operationally. Write into Terms before first sale.

### The pattern across all ten

The master plan keeps **confusing "what we'll build" with "what to sell tomorrow."** Every recommendation above trims build work and prioritizes sales motion. Month 1 goal is $750 MRR, not product completeness. Every hour spent on Stage 4 Orpheus streaming or the 15-bot taxonomy is an hour not spent on real testimonials, coach photos, and Whop KYC.

---

## 12. Implementation kickoff — next 60 minutes [Debby]

When this commit lands, pull it into your working directory and start Mon Day 1 actions:

```bash
cd ~/Desktop/elevare-site
git pull origin master
cat execution-week-1.md  # read Mon row
```

Then in parallel (3 actions, no dependencies between them):

1. **Buy `elevare.work` at Cloudflare Registrar** — ~$10, 5 min
2. **Start Whop KYC** — whop.com signup, upload Uganda passport + Chiang Mai proof-of-address, submit
3. **Start Meta Business Manager** — business.facebook.com, create, add Elevare page, domain verify

While those verifications run in the background, begin the quick-wins from Section 11:
- 11.6 Placement quiz — Typeform free tier, draft 5 questions (goal / level / timeframe / budget / preferred format)
- 11.7 Coach photos — phone call with each tutor, ask for 3 good photos + 1 30-sec "why I teach" clip
- 11.8 India testimonials — DM/email 20 former students with: "Hey — building something new for English learners. Could you share one sentence about what changed after our sessions? Happy to quote you with just your first name."

End-of-day Monday check (run from terminal):

```bash
cd ~/Desktop/elevare-site
cat execution-week-1.md | grep -A4 "## Mon"
# verify the 3 "pass/fail gate" items all shipped
```

If any item fails to ship Mon → push to Tue; if two fail → stop and call Donal for unblock.

---

*Drafted by Claude for [Debby] × [Donal]. Round 1: 2026-04-17 afternoon. Round 2: 2026-04-17 evening. Recommendations + kickoff: 2026-04-17 night. Live site hero updated to Meta-compliant copy in the same commit stream.*
