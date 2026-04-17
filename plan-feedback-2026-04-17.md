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

---

## 13. Six ADDs — the business I'd actually run [Claude recommendation]

Asked directly "if this were your business, what would you add or deduct." This section is the ADD half. (The DEDUCT half is captured by Sections 6 + 11 bloat cuts — the AI tutor deferral, Flex Nexus consolidation, $29 tier kill, content-flywheel kill, 4-tutor over-hire, Ambitious Phase deletion. Noted for Donal visibility but not repeated here.)

### 13.1 Niche 10× harder — ONE audience, ONE problem
"Business English for Chiang Mai expats who need to close deals in English." Everything else waits 6 months. You cannot dominate 3 pillars × 3 audiences on $200/mo ad budget. Concentration wins against Preply/Cambly/Speak precisely because *they* have to serve everyone.

**Action:** update homepage H2 + about page + all ad copy to this single positioning. Remove Lingua/Rise/Flex Nexus cross-linking from hero; they live on `/programs` as sub-paths.

### 13.2 Raise prices to $299-349/mo for the core
$149 is underpriced for what's inside (4 coaching sessions + AI + library). Price signals quality, filters for serious buyers, funds real 1:1 time, repels tire-kickers who increase support load and churn. Test $299 for 2 weeks; if close rate holds, move to $349.

**Action:** swap `index.html` pricing block from `$149` → `$299` on Lingua Live. Update Whop product + overview sheet.

### 13.3 Group coaching cohorts, not 1:1
One 90-min cohort call with 6 students replaces six separate 1:1 sessions. Higher margin, cohort effect boosts retention, students refer inside their cohort. This is the unlock that takes you from $2k → $10k MRR without adding tutors.

**Action:** convert Lingua Live format: weekly 90-min group call (max 6) + weekly 15-min 1:1 + 24/7 WhatsApp Q&A. Keep 1:1-only as a $599/mo premium tier for those who want it.

### 13.4 You on camera — one 30-sec video per day
Hardest behavioral change, biggest growth lever. The plan's entire "25-posts-a-day AI content flywheel" is a workaround for your discomfort with the camera. Fix the root problem, not the symptom. Founder-led organic beats any amount of AI-generated content in 2026 (algorithms downrank detected-AI).

**Action:** one phone video per day. No script. 30 seconds. Answer a question a student asked recently. Post to TikTok + IG Reels. That's the content strategy. Weeks 1-4 will feel awful; by Week 8 you'll be a different person.

### 13.5 Coworking partnerships — not coworking flyers
Walk into Punspace / Yellow / Alt this week. Pitch: *"Free 30-min English assessment for every member. In exchange: I'm your featured English coach on your community board."* Zero-cost distribution directly into your exact audience. Each space is 100-300 members of your ICP.

**Action:** Mon-Tue visit 3 coworking spaces. Goal: one partnership locked by Fri. Community-manager conversations, not poster drops.

### 13.6 One killer lead magnet — 5-min assessment call
Kill the placement quiz as lead magnet; demote it to onboarding tool. The actual lead magnet is: *"Book a free 5-min English fluency assessment — I'll tell you exactly where you are and send a personalized 3-week plan."* Converts 10× better because humans respond to humans. Doubles as warm-up for the sales call.

**Action:** dedicated Calendly: `https://cal.com/elevare/assessment`. 5-min slots only. Post-call: you + Claude draft the 3-week plan, email within 24 hrs with offer.

---

### The business this becomes

| Element | Specification |
|---|---|
| One product | $299/mo "Boardroom English Cohort" — 90-min group call (6 max) + 15-min 1:1 + 24/7 WhatsApp |
| One premium | $599/mo "Executive 1:1" — weekly 60-min private + 24/7 WhatsApp (for the few who need it) |
| One lead magnet | Free 5-min assessment call + personalized 3-week plan |
| One channel (M1) | Coworking partnerships + your founder TikTok — no ads |
| One promise | "Confident in English meetings in 30 days. Measurable by [rubric]. Or we keep coaching until you're there." |

**Math:** $299 × 20 students × 2 active cohorts = $11,960 MRR with 2 coaches (you + 1). Simpler, higher-margin, defensible. One-tenth the plan's complexity. Probably 2-3× the Year-1 revenue ceiling.

### Decision needed from [Debby] before executing 13.x

- [ ] Do you accept narrowing to Chiang Mai Business English as the sole Month-1 positioning (13.1)?
- [ ] Do you accept the price move from $149 → $299 on Lingua Live (13.2)?
- [ ] Do you commit to one 30-sec phone video per day from Week 2 onward (13.4)?

Ship all three = the new business. Ship zero = keep the existing plan. Shipping partial (e.g., group cohort without the price raise) erodes the margin that makes group work.

---

---

## 14. AI Tutor v0 — "Elevare AI Practice Companion" [Debby approved]

Replaces the 280-line Stage 4 build (plan lines 1488-1770) which deferred first paying student by weeks. v0 ships in 1 week, aligns with your methodology (psychology-informed, hybrid coach + AI, augments not replaces), and becomes the $29/mo entry tier — **Elevare AI** in the new product taxonomy.

> Assumes **Option B**: Elevare AI is a standalone $29/mo product, not a tech layer. If you pick Option A (tech layer only, no standalone tier), drop the pricing + funnel framing below and treat the three modes as features embedded inside Speak/Fluency/Pro/Med. Lock this before commit.

### Scope — three modes, nothing else

1. **Scenario Role-Play** (10 min max)
   Student picks a real-life situation they're nervous about: negotiate price with supplier, answer a tough interview question, lead a standup, order in a restaurant, handle a patient handover (for Med). AI plays the counterpart. Student practices in a safe space where failing has zero cost. Session transcript saved to student history.

2. **Session Warm-Up** (2 min)
   Ran right before a live coach session. 3 confidence prompts: "What's one sentence you wish you could say fluently today? → let's rehearse it → how did that feel?" Drops anxiety, primes the coach call. Coach sees warm-up output before the session starts.

3. **Between-Session Recap** (5 min)
   Coach's session notes (in a shared Google Sheet) feed into the AI's prompt. AI asks 3 recall questions based on what the coach covered, plus 1 application prompt. Results sent back to coach for next session personalisation loop.

### Stack — ship-in-1-week list

- **Channel:** WhatsApp (not site widget). Thai/SEA market lives in WhatsApp.
- **Bot framework:** Typebot (free, open-source) or Chatfuel (free tier). Pick based on WhatsApp Business API cost.
- **LLM:** `anthropic/claude-haiku-4.5` via OpenRouter. ~$0.001 per exchange. 5-minute role-play ≈ $0.02 cost.
- **Voice (optional v0.5):** 11Labs Free tier, on-demand only (not streaming). Voice clone comes in v1 once 30-min sample is recorded.
- **Coach notes:** shared Google Sheet, one tab per student, Zapier pipes into bot prompts.
- **Student history:** Airtable free tier, one row per session.
- **No M5, no Orpheus, no Stage-4 streaming, no voice clone, no Cloudflare Workers.** All that waits for v1+.

### Methodology alignment

- **Psychology-informed:** system prompt enforces non-judgmental, encouraging, celebrates effort not outcome. Never marks student wrong — reframes as "let's try another way."
- **Mental-health-aware:** detects distress language (via Haiku classifier), soft-routes to coach ("I can tell this is hard — let's have your coach check in with you"). Never pretends to be therapy.
- **Coach-augmenting, not replacing:** every session ends with "bring this to your coach on [next call date]." AI is the gym; coach is the trainer.
- **Measurable progress:** each session tags 1-3 skills practiced. Weekly roll-up visible to student + coach.

### Positioning copy

> "Your Elevare coach doesn't sleep. Between your weekly sessions, **Elevare AI** is the practice companion that keeps you speaking — safe to fail, always available, always encouraging. The gym, not the trainer. $29/month."

Matches the "coach doesn't sleep, tutor doesn't forget" wedge from plan line 2401.

### Launch gate

Ship v0 (text-only, 3 modes, WhatsApp) by **end of Week 2**. First paying student on Elevare AI tier by **end of Week 4**. Voice mode (v0.5) ships when it stops blocking signups; upper bound Week 6. Stage-4 ambition (streaming, voice clone, real-time) defers to Month 3+ pending $2k MRR.

### What gets DELETED from the master plan

Plan lines 1488-1770 (Stage-4 Deep-Dive) compress to the above ~60 lines. Orpheus, RVC, Coqui XTTS, streaming TTS, 2.5s latency targets, grammar classifiers, Oxford-grammar JSON cross-check — all deferred to post-$2k-MRR v1+ work. Referenced in a footer appendix `stage-4-deferred.md` for when revenue earns the right to build them.

---

## 15. Content — hybrid AI + human split [Debby approved]

**Paid (AI-generated, Meta / TikTok / Google):**
- 2 short video variants + 1 carousel per week
- Built from voice clone + stock footage via your marketing-agent
- Rotation: swap creative every 48 hrs (plan line 2022)
- Budget: $200 Month 1 split across 4 channels per plan line 2001

**Organic (human-led, Debby-led):**
- **3 posts per week.** Your face, phone camera, 30-60 sec each. One story per post: student win / teaching insight / behind-the-scenes.
- **1 long-form per week:** LinkedIn article OR 3-5 min YouTube video, pulling from the 3 short posts.
- Platform priority: TikTok (#1, highest organic reach) + IG Reels (#2) + LinkedIn (#3 for Pro niche).

**What gets KILLED:**
- The 25-posts-per-day steady-state number (plan line 2099). AI slop at that volume, platforms downrank detected-AI content.
- The "Debby doesn't post, the system does" framing (plan line 2079). You DO post — it's the moat.

### Why the split works

AI is acceptable and required for paid creative (volume + rotation). Organic now demands authenticity signals that AI content can't fake — platform algorithms reward faces, voice cadence, "messy" over-polish. Founder-led organic + AI-scaled paid is the right split for 2026.

---

## 16. Tutor model — agency (standard rate) + pay-per-lesson [Debby approved]

### Pricing (student-facing)
Standard **Elevare** rate per product. Students never see different tutor prices — protects brand consistency + simplifies pricing pages. Products per Section 13 + image taxonomy: Elevare Speak $149 / Fluency $497 (12wk) / Pro $349 / Med $499. All paid monthly (or upfront for Fluency).

### Tutor compensation (internal)
Pay-per-lesson flat rate. Proposed schedule:

| Product | Student pays | Tutor per-lesson pay | Platform margin |
|---|---|---|---|
| Elevare Speak (group, 90 min weekly) | $149/mo ÷ 4 sessions ≈ $37/session | **$20/session** | 46% |
| Elevare Fluency (12wk cohort) | $497 ÷ 12 weeks ÷ sessions-in-cohort | **$25/session** | 50% |
| Elevare Pro (1:1 + group) | $349/mo ÷ ~6 sessions ≈ $58/session | **$35/session** | 40% |
| Elevare Med (1:1 specialist) | $499/mo ÷ ~6 sessions ≈ $83/session | **$50/session** (specialist premium) | 40% |
| Elevare AI | N/A (no tutor) | — | ~95% |

Rationale: platform margin covers R2/Whop/SaaS/CAC. Tutor pay is high enough to retain quality coaches in Chiang Mai + Philippines (standard rates $15-25/hr), premium for Med specialization. Pay weekly via Wise/PayPal/LINE depending on tutor's country.

### Tutor obligations (what agency model requires them to do)

- Teach to the Elevare curriculum (not their own). You write + maintain the per-product lesson plans.
- Use the Elevare booking + progress tracking tools (Calendly + Google Sheet → Airtable eventually).
- Log session notes within 24 hrs (feeds AI Practice Companion per Section 14).
- Availability minimum: 10 hours/week per tutor, reservable on Calendly.

### What agency model requires from YOU

- **Curriculum ownership.** You write/maintain the lesson framework for each product. Tutors execute; they don't freelance methodology. This is ~20-30 hrs of upfront work, then 2-4 hrs/week maintenance.
- **Quality control.** Spot-check 1 session per tutor per month (recorded + reviewed). Consistency signal to students.
- **Tutor pipeline.** Per Round-2 recommendation, aim for 6 tutors by Day 60 (not 4). Agency model makes replacement easier since students don't form a hard bond with "their specific tutor's rate."

### Tutor contract template (Donal to draft)

Needs: (a) revenue-per-lesson terms, (b) curriculum adherence clause, (c) 2-week notice on availability changes, (d) IP assignment for any session recordings used in marketing (voice-clone/testimonials), (e) non-compete on direct-to-student poaching.

---

## 17. Ambitious Phase framing [Debby approved — keep as motivation]

The plan's Phase A (Autonomous Client Pipeline), Phase B (Custom Dashboard / GHL-killer), and Phase C (Multi-Language Marketplace) at lines 2179-2216 stay in the master plan as a **north-star vision**, not a Month-1 execution surface.

### Proposed header to add to the master plan's Ambitious Phase section

> **North-star vision — motivation, not Month-1 scope. Trigger to activate: $5k MRR sustained for 2 consecutive months.**
>
> *This section paints the 12-24 month horizon. It exists to remind us what we're building toward, not to pull execution gravity into Month 1-3. No work in Phase A/B/C is in scope until the trigger hits. If it pulls at your attention before then, treat that as a signal to refocus on the `execution-week-1.md` grid, not a signal to start Phase A early.*

### Why keep it

- Motivation compounds — looking at a bold horizon makes the drudgery of Week 1 Whop-KYC easier to endure
- Investors/partners/visa officers ask "where is this going?" — Phases A/B/C answer that in one read
- Recruiting future tutors/team: the vision matters as much as the current MRR

### What it's NOT for

- Any decision you make before Day 60
- Any code written before Day 90
- Any resource allocation today

**Maintenance cost:** zero. Leave the section as written. Just add the header.

---

---

## 18. Pricing recommendations [Debby locked product ladder, Claude recommends raises]

With the 5-product taxonomy locked (Elevare AI / Speak / Fluency / Pro / Med), revised pricing vs Round-2 proposal:

| Product | Previously proposed | **Recommended** | Delta | Rationale |
|---|---|---|---|---|
| Elevare AI | $29/mo | **$29/mo** | — | Entry tier, acquisition-focused. Don't move. |
| Elevare Speak | $149/mo | **$199/mo** | +$50 | Group cohort economics (6 students × same delivery cost as 1:1). Cambly $99-199, Preply $150-250 — $199 sits premium. |
| Elevare Fluency | $497 (12wk) | **$497** launch, test **$697** at Month 3 | +$0 now | Competitive for 12-week intensives; raise once you have testimonials. Also offer $199×3 monthly split. |
| Elevare Pro | $349/mo | **$449/mo** | +$100 | Business English buyers have budget + employer reimbursement. Clear premium vs Speak. |
| Elevare Med | $499/mo | **$699/mo** | +$200 | Kaplan OET charges $700+, E2 Language $89 self-serve. You're Kaplan-tier + beat their outcomes. Annual price difference ~$2,400 per student. |

**Plus: annual plans at 20% discount** on all core products — reduces churn, locks cash.

**Expected revenue lift vs previous pricing** (same volume):
- Day 90 target portfolio = 15 Speak + 8 Fluency + some Pro + Med mix
- Old: 15×$149 + 8×$199 = $3,827/mo core recurring
- New: 15×$199 + 8×$199 + some Pro $449 + Med $699 = significantly higher per-customer LTV
- Easier to hit $5k recurring MRR with 20-25 students vs 40+

---

## 19. Course outlines + implementation methodology [shipped in this commit]

All 5 products now have course outline files under `courses/`:

| File | What's in it |
|---|---|
| [`courses/implementation-methodology.md`](courses/implementation-methodology.md) | Universal 5-stage delivery loop (Intake → Onboard → Deliver → Measure → Graduate/Renew) + Rise layer spec + tutor curriculum discipline. **Every product conforms to this.** |
| [`courses/elevare-ai.md`](courses/elevare-ai.md) | $29/mo AI companion — 3-mode WhatsApp bot. Full spec in Section 14. |
| [`courses/elevare-speak.md`](courses/elevare-speak.md) | $199/mo group cohort conversation training. Skeleton — expand to full 4-week curriculum before launch. |
| [`courses/elevare-fluency.md`](courses/elevare-fluency.md) | $497 12-week intensive (rebrand from Flex Nexus). Skeleton — expand to full 12-week curriculum. |
| [`courses/elevare-pro.md`](courses/elevare-pro.md) | $449/mo business English for professionals. Skeleton — expand business scenario library. |
| [`courses/elevare-med.md`](courses/elevare-med.md) | $699/mo medical English + OET prep. **Full 12-week curriculum shipped.** This is the goldmine — build first. |

### Ship order (priority for the next 30 days)

1. **Elevare Med full build** (Month 1 priority) — diagnostic rubric + first 5 scenarios + OET Pass Playbook PDF + landing page + 1 tutor onboarded
2. **Elevare AI v0** (Month 1 parallel) — WhatsApp bot, 3 modes, 30 scenarios
3. **Elevare Pro skeleton → full** (Month 2) — business scenario library + landing page
4. **Elevare Speak full** (Month 2) — 4-week curriculum + first cohort launches
5. **Elevare Fluency full** (Month 2-3) — 12-week curriculum + rebrand from Flex Nexus complete

### Curriculum ownership model

Per `implementation-methodology.md` + Section 16: **Debby writes v1 of every product's curriculum, tutors execute consistently.** Tutors can give feedback → revisions monthly → senior tutor can help maintain in Month 3+ under Debby's editorial sign-off. This protects brand + enables tutor replacement without disrupting students.

---

*Drafted by Claude for [Debby] × [Donal]. Round 1: 2026-04-17 afternoon. Round 2: 2026-04-17 evening. Recommendations + kickoff: 2026-04-17 night. Sections 13-17 product design: 2026-04-17 late. Sections 18-19 pricing + courses folder: 2026-04-17 late evening. Live site hero updated to Meta-compliant copy in the same commit stream.*
