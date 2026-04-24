# TODO — Marketing Agent Rebuild (current 3-tier taxonomy)

**Created:** 2026-04-24 by Nick (Claude) for Donal × Debby
**Supersedes:** `../marketing-agent-improvement-plan.md` + `../marketing-agent-snippet-for-donal.md` (both targeted dead 5-product taxonomy)
**Goal:** Move marketing dashboard from non-functional demo → real tool that Debby can post from.
**Estimated effort:** 9-12 hrs across 4 phases. Ship Phase 1 + 2 first (~5 hrs) — that alone unblocks Debby.

---

## Context

Audit (2026-04-24) of `marketing/marketing-dashboard.html`:

| Issue | Verified |
|---|---|
| References to current products (Med/Pro/General) | **0** (grep) |
| References to dead products (Lingua/Rise/Flex Nexus) | **53** (grep) |
| Live API integrations | **0** (all `YOUR_xxx` placeholders) |
| Save Settings button | Stub — no localStorage |
| Analytics dashboard | Hardcoded fake numbers |
| Real posting capability | None — `postToPlatform()` shows manual-paste alert |

The dashboard is currently avoidance dressed as productivity. After this rebuild, it should remove ≥1 real friction point in Debby's posting flow.

---

## Current taxonomy (LOCKED — source: `index.html` lines 1958-2047)

### 3 tiers

| Key | Name | Price | Hook |
|---|---|---|---|
| `elevare-general` | Elevare General | $99/mo self-serve · $199/mo with tutor drops | Fluency + confidence. Group speaking with AI facilitator. |
| `elevare-pro` | Elevare Pro | $299/mo · employer-reimbursable | Business English for working professionals. Industry variants. |
| `elevare-med` | Elevare Med | $699/mo · 12-week programme | OET Grade B in 12 weeks. Pass-or-keep-coaching guarantee. |

### 3 add-ons

| Key | Name | Price |
|---|---|---|
| `addon-ai-bot` | AI Practice Bot | +$29/mo |
| `addon-1to1` | Extra 1:1 Tutor Time | +$199/mo |
| `addon-oet-bundle` | OET Exam Bundle (Med only) | +$449 one-time |

**Dead names — must NOT appear anywhere in the dashboard:** Lingua, Rise, Flex Nexus, Elevare AI, Elevare Speak, Elevare Fluency.

---

## Phase 1 — Replace dashboard taxonomy + content templates (~3 hrs)

### Files to edit
- `marketing/marketing-dashboard.html` — dropdowns, templates, hashtags, all program references
- `marketing/README.md` — update Voice Studio section + Quick Ad Scripts section

### 1a. Drop-in `<select>` block

Replace the existing program `<select>` blocks at all 3 dropdown locations (currently around lines ~518, ~626, ~727 — verify with grep):

```html
<select class="form-select" id="programSelect">
    <option value="">— Select program —</option>
    <optgroup label="Tiers">
        <option value="elevare-general">Elevare General — $99/$199 (group speaking)</option>
        <option value="elevare-pro">Elevare Pro — $299/mo (business English)</option>
        <option value="elevare-med">Elevare Med — $699/mo (OET, 12 weeks)</option>
    </optgroup>
    <optgroup label="Add-ons">
        <option value="addon-ai-bot">AI Practice Bot — +$29/mo</option>
        <option value="addon-1to1">Extra 1:1 Tutor Time — +$199/mo</option>
        <option value="addon-oet-bundle">OET Exam Bundle — +$449 one-time</option>
    </optgroup>
</select>
```

Keep `id` unique per instance (`programSelectContent`, `programSelectAds`, etc.).

### 1b. `contentTemplates` object — replacement

Source-of-truth content lives in [marketing/pitch-scripts/](pitch-scripts/) (6 .docx files, written 2026-04-24). Use the 30s pitch as social-post backbone, the 2min pitch as email backbone.

```javascript
const contentTemplates = {
    'elevare-general': {
        'linkedin-post': [
            "Be honest — you've 'learned English' for years. Apps. YouTube. Maybe a class. And you still freeze when someone talks to you. That's not an English problem. That's a speaking-reps problem. Elevare General — small groups, AI facilitator that won't let you stay quiet. $99/mo, 5 days free.",
            "The single highest-leverage thing for your English in 2026? A small cohort of peers at your level + an AI facilitator that tracks who hasn't spoken. Elevare General. $99/mo.",
            "Stop studying English. Start speaking it. Elevare General — 4 to 8 person groups, 2 sessions a week, AI facilitator in every one."
        ],
        'instagram-post': [
            "🗣️ You don't freeze because your English is bad. You freeze because you don't get the reps.\n\nElevare General — small groups + AI facilitator. $99/mo. 5 days free, no card.",
            "👥 Cohort of 4-8. Two 60-min sessions a week. AI facilitator pulls in the shy, balances the dominant. Nobody hides.\n\n$99/mo · elevaremind.io",
            "Apps don't talk back. 1:1 tutoring is expensive. Group classes are 30 people. Elevare General is the third option — small group + AI in every session."
        ],
        'email-subject': "Stop studying English. Start speaking it.",
        'email-body': "Hi [First Name],\n\nQuick question — when was the last time you spoke English out loud, with another human, for more than five minutes straight?\n\nYeah. That's the problem.\n\nYou don't freeze because your English is bad. You freeze because you never get the reps. Apps don't talk back. YouTube is one-way. 1:1 tutoring is expensive and you only get an hour a week.\n\nElevare General is built for exactly this. Small groups — 4 to 8 peers at your level. Two 60-min sessions a week. An AI facilitator in every session that tracks who's spoken and who hasn't, pulls in the shy, balances the dominant. Named feedback after every session — not 'good job' but 'you hesitated three times when describing your project, here's the structure to fix that.'\n\n$99/month self-serve. $199/month with weekly human tutor drops.\n\n5-day free trial, no card: elevaremind.io",
        'whatsapp-message': "Hey! Quick one — would a small-group English speaking class (4-8 people, twice a week, AI facilitator) be useful? Just launched Elevare General. $99/mo, 5 days free, no card. Happy to share details."
    },

    'elevare-pro': {
        'linkedin-post': [
            "You're 'functional' in English meetings. You want to be commanding. That gap isn't vocabulary — it's deployment of frameworks under pressure. Elevare Pro: small group, weekly tutor, industry variants (tech / finance / clinical). $299/mo, often employer-reimbursable.",
            "Lead the meeting. Deliver the pitch. Close the deal. Elevare Pro is business English for professionals — your real meetings become curriculum. $299/mo.",
            "Business-English buyers: Elevare Pro is usually employer-reimbursable. Ask HR. $299/mo is a rounding error on most professional-development budgets."
        ],
        'instagram-post': [
            "🎯 One meeting. One pitch. One promotion.\n\nElevare Pro — small group + AI facilitator + weekly tutor drop. $299/mo.",
            "Your LinkedIn says 'fluent in English.' Your meetings say 'still working on it.' Elevare Pro closes that gap.",
            "Industry variants: tech / finance / clinical. Your real upcoming meetings become the curriculum. $299/mo."
        ],
        'email-subject': "Lead the meeting. Deliver the pitch. Close the deal.",
        'email-body': "Hi [First Name],\n\nYou're past 'getting by' in English. You want to command the room. That's a specific kind of work — deploying frameworks under pressure, not just vocabulary.\n\nElevare Pro: 2× 60-min business-English groups per week + weekly tutor drop-in + AI facilitator in every session. Industry variants for tech, finance, clinical. Your actual upcoming meetings become the curriculum.\n\n$299/month. Often employer-reimbursable — ask HR.\n\n5-day free trial, no card: elevaremind.io",
        'whatsapp-message': "Hey! If your English is 'functional' but not yet 'commanding' in work meetings, we just opened Elevare Pro — small group + weekly tutor for working pros. $299/mo. Often employer-reimbursable."
    },

    'elevare-med': {
        'linkedin-post': [
            "60% of internationally-trained nurses fail OET speaking on first attempt. Not on knowledge — on under-rehearsal of a 5-minute performance. Elevare Med fixes that. 12 weeks. Pass-or-keep-coaching guarantee. $699/mo.",
            "OET Grade B in 12 weeks, or we keep coaching free. That's the commitment. UK NMC, AHPRA, NCNZ, Irish NMBI. Elevare Med — for nurses and doctors prepping registration.",
            "The gap between Grade C and Grade B isn't more vocabulary. It's specific rubric dimensions scored by a coach. Self-study can't get you there. Elevare Med can."
        ],
        'instagram-post': [
            "👩‍⚕️ OET Grade B, 12 weeks. Or we keep coaching free.\n\nFor internationally-trained nurses + doctors. UK NMC, AHPRA, NCNZ, Irish.\n\nFree 5-day trial → elevaremind.io",
            "Weekly 1:1 with OET-trained coach. Group session with peers at your level (AI facilitated). 30 clinical scenarios on WhatsApp. $699/mo. Pass guarantee.",
            "£2,400 — what it costs to delay UK NMC registration by 3 months. The math on Elevare Med pays for itself."
        ],
        'email-subject': "Why most nurses fail OET speaking twice (and how to fix it in 12 weeks)",
        'email-body': "Hi [First Name],\n\nYou've studied English for years. You handle patients in English on shift. But OET speaking scored you C+. Maybe twice.\n\nYou're not bad at English. You're under-rehearsed for a very specific 5-minute performance. And no self-study course can coach you out of patterns you can't hear in yourself.\n\nElevare Med: 12-week programme. Weekly 1:1 with an OET-trained coach. Weekly group session with peers at your level, AI-facilitated. 30 clinical scenarios delivered to WhatsApp. Pass-or-keep-coaching guarantee.\n\n$699/month. Built for UK NMC / AHPRA / NCNZ / Irish NMBI candidates.\n\nBook a free 5-day trial — no card: elevaremind.io",
        'whatsapp-message': "Hey! Know any nurses prepping for OET? Just opened Elevare Med — 12-week programme, pass Grade B guarantee or we keep coaching free. $699/mo."
    },

    'addon-ai-bot': {
        'linkedin-post': ["Your English coach doesn't sleep. Between sessions, the AI Practice Bot keeps you in the game on WhatsApp. +$29/mo on any tier."],
        'instagram-post': ["📱 24/7 solo speaking drills on WhatsApp. +$29/mo on any Elevare tier."],
        'email-subject': "Practice between sessions — on WhatsApp",
        'email-body': "Stack the AI Practice Bot on any Elevare tier (+$29/mo). 24/7 solo drills on WhatsApp. Reps when you have 5 minutes.",
        'whatsapp-message': "Quick add-on heads-up — for +$29/mo you can add the AI Practice Bot to any Elevare tier. 24/7 WhatsApp drills."
    },

    'addon-1to1': {
        'linkedin-post': ["Group + AI not enough? Add weekly 1:1 with a tutor. +$199/mo on any Elevare tier."],
        'instagram-post': ["🎯 Want a private tutor on top of your group? Extra 1:1 — +$199/mo, any tier."],
        'email-subject': "Private tutor on top of your group",
        'email-body': "Stack Extra 1:1 Tutor Time on any Elevare tier (+$199/mo). Private weekly coaching on top of your group session.",
        'whatsapp-message': "Heads up — you can add weekly 1:1 with a tutor to any Elevare tier for +$199/mo. Useful for pre-interview prep, presentation rehearsal, etc."
    },

    'addon-oet-bundle': {
        'linkedin-post': ["Exam-month coaching + mock exams. The OET Exam Bundle stacks on Elevare Med. +$449 one-time."],
        'instagram-post': ["📋 OET exam coming up? +$449 = exam-month coaching + mock exams. Stacks on Elevare Med."],
        'email-subject': "Exam-month boost for your OET",
        'email-body': "OET Exam Bundle (+$449 one-time) — stacks on Elevare Med. Exam-month intensive coaching + multiple mock exams scored against the real rubric.",
        'whatsapp-message': "If you're booking your OET exam date, ask about the +$449 OET Exam Bundle — exam-month coaching + mock exams stacked on Med."
    }
};
```

### 1c. `voicelessAds` object — replacement

```javascript
const voicelessAds = {
    'elevare-general': {
        short: "Hook: Frozen in English conversations?\nSetup: It's not your English. It's your reps.\nPromise: Small group + AI facilitator. Nobody hides.\nCTA: 5 days free → elevaremind.io",
        medium: "OPEN: Person at café, friend asks question, they freeze.\nVO: \"You've studied English for years. You still freeze.\"\nCUT: Zoom grid, 6 people speaking, AI facilitator overlay.\nVO: \"Elevare General — small group, AI facilitator that won't let you stay quiet. $99 a month.\"\nCUT: Pricing card.\nVO: \"5 days free. No card.\"\nEND: elevaremind.io",
        long: "OPEN: Time-lapse of apps, books, YouTube tabs.\nVO: \"10 years of apps. 5 years of YouTube. Your English is intermediate. Your confidence isn't.\"\nCUT: Zoom call, 4-8 people on grid, AI overlay tracking who's spoken.\nVO: \"Elevare General puts you in a small group with peers at your level. Two 60-min sessions a week. An AI facilitator that nobody can hide from.\"\nCUT: Pricing.\nVO: \"$99 a month self-serve. $199 with human tutor drops. 5 days free, no card.\"\nEND: elevaremind.io"
    },
    'elevare-pro': {
        short: "Hook: 'Functional' in meetings — but not yet commanding?\nPromise: Business English. Small group. Weekly tutor.\nCTA: $299/mo · employer-reimbursable · elevaremind.io",
        medium: "OPEN: Conference room, boss asks question, person freezes.\nVO: \"Functional English isn't career English.\"\nCUT: Small Zoom group, business scenario role-play.\nVO: \"Elevare Pro: small group + weekly tutor + AI facilitator. Industry variants — tech, finance, clinical.\"\nCUT: Pricing + 'often employer-reimbursable'.\nVO: \"$299 a month. Ask HR.\"\nEND: elevaremind.io",
        long: "OPEN: Montage of meetings, pitches, negotiations.\nVO: \"The 4 moments that define business careers in English: leading, pitching, negotiating, writing.\"\nCUT: Pro group session — peer-to-peer with tutor drop-in.\nVO: \"Elevare Pro builds muscle memory on all four. Your real meetings become the curriculum.\"\nCUT: Pricing + employer-reimbursable note.\nVO: \"$299 a month. Often employer-reimbursable. 5 days free, no card.\"\nEND: elevaremind.io"
    },
    'elevare-med': {
        short: "Hook: OET Grade C+ stuck?\nPromise: Grade B in 12 weeks, or we keep coaching free.\nCTA: elevaremind.io",
        medium: "OPEN: Nurse in scrubs, OET result slip showing C+.\nVO: \"Your English isn't the problem. Your rehearsal is.\"\nCUT: 1:1 coaching session + group session with peers.\nVO: \"Elevare Med — weekly 1:1 with OET coach, weekly group session, 30 clinical scenarios on WhatsApp.\"\nCUT: Guarantee graphic.\nVO: \"Grade B in 12 weeks, or we keep coaching free. $699 a month.\"\nEND: elevaremind.io",
        long: "OPEN: Montage — internationally-trained nurses + doctors prepping registration.\nVO: \"You've been a nurse for years. You've cared for English-speaking patients on every shift. Your OET still scored C+.\"\nCUT: 12-week roadmap graphic.\nVO: \"Because you've never had someone score your speaking against the real 5-dimension rubric. Every week. Elevare Med fixes that.\"\nCUT: Guarantee.\nVO: \"Grade B in 12 weeks. Or we keep coaching you free until you pass. $699/mo. UK NMC, AHPRA, NCNZ, Irish NMBI.\"\nEND: elevaremind.io"
    }
    // Add-ons don't need voiceless ads in v1 — they're upsells, not lead-gen.
};
```

### 1d. `hashtags` bank — replacement

```javascript
const hashtags = {
    'elevare-general': ['#LearnEnglish', '#EnglishConfidence', '#SpeakEnglish', '#EnglishCohort', '#SmallGroupLearning', '#ChiangMai', '#DigitalNomad', '#ESL', '#Elevare'],
    'elevare-pro': ['#BusinessEnglish', '#ExecutiveEnglish', '#ProfessionalCommunication', '#EnglishForWork', '#CareerFluency', '#LinkedInEnglish', '#Elevare'],
    'elevare-med': ['#OETprep', '#MedicalEnglish', '#NurseAbroad', '#UKNMC', '#AHPRA', '#NCNZ', '#NMBI', '#OETspeaking', '#OETpass', '#InternationalNurse', '#Elevare']
};
```

### 1e. README cleanup

Find-and-replace in `marketing/README.md`:

| Old | New |
|---|---|
| `Lingua, Rise, or Flex Nexus` | `Elevare General, Pro, or Med` |
| `Lingua (Language Learning)` | `Elevare General` |
| `Rise (Confidence Building)` | (delete line — no separate Rise product) |
| `Flex Nexus (Business Communication)` | `Elevare Pro` |

Add to bottom: "Elevare Med (OET prep) - 15-90 second versions"

---

## Phase 2 — Fix API key persistence + warning banner (~2 hrs)

### What to change in `marketing-dashboard.html`

Replace mock `saveApiSettings()` (around line 1662 — verify) with:

```javascript
function saveApiSettings() {
    const config = {
        mailchimp: { apiKey: document.getElementById('mailchimpKey').value, audienceId: document.getElementById('mailchimpAudience').value },
        buffer: { accessToken: document.getElementById('bufferToken').value },
        sendgrid: { apiKey: document.getElementById('sendgridKey').value }
        // add others as needed
    };
    localStorage.setItem('elevare_marketing_config', JSON.stringify(config));
    refreshIntegrationStatusBadges();
    alert('Settings saved.');
}

function loadApiSettings() {
    const stored = localStorage.getItem('elevare_marketing_config');
    if (!stored) return;
    const config = JSON.parse(stored);
    if (config.mailchimp?.apiKey) document.getElementById('mailchimpKey').value = config.mailchimp.apiKey;
    if (config.mailchimp?.audienceId) document.getElementById('mailchimpAudience').value = config.mailchimp.audienceId;
    if (config.buffer?.accessToken) document.getElementById('bufferToken').value = config.buffer.accessToken;
    if (config.sendgrid?.apiKey) document.getElementById('sendgridKey').value = config.sendgrid.apiKey;
    refreshIntegrationStatusBadges();
}

function refreshIntegrationStatusBadges() {
    const stored = JSON.parse(localStorage.getItem('elevare_marketing_config') || '{}');
    document.getElementById('mailchimp-badge').textContent = stored.mailchimp?.apiKey ? 'Connected' : 'Not connected';
    document.getElementById('buffer-badge').textContent = stored.buffer?.accessToken ? 'Connected' : 'Not connected';
    document.getElementById('sendgrid-badge').textContent = stored.sendgrid?.apiKey ? 'Connected' : 'Not connected';
    const anyMissing = !stored.buffer?.accessToken || !stored.mailchimp?.apiKey;
    document.getElementById('demo-mode-banner').style.display = anyMissing ? 'block' : 'none';
}

window.addEventListener('DOMContentLoaded', loadApiSettings);
```

Add at top of `<body>`:
```html
<div id="demo-mode-banner" style="display:none; background:#ff9800; color:#000; padding:12px; text-align:center; font-weight:600;">
    ⚠ Marketing agent is in DEMO mode. Configure API keys in Settings to enable live posting.
</div>
```

Add status badges next to each integration's input field in the Settings tab:
```html
<span id="buffer-badge" class="status-badge">Not connected</span>
```

---

## Phase 3 — Buffer integration (~3 hrs) **← recommended live integration**

### Why Buffer over Mailchimp first

| Factor | Buffer | Mailchimp |
|---|---|---|
| Attacks Debby's #2 avoidance (posting) | ✅ direct | ❌ no |
| Needs a pre-existing audience to be useful | No | Yes (she has none) |
| Time-to-first-value | Day 1 (queue + auto-post) | Weeks (build list first) |
| Setup complexity | Medium | Higher (audience config + GDPR) |

**Verdict:** Buffer first. Mailchimp = Phase 5 once Debby has 50+ email subscribers.

### What to build

1. Add `bufferAccessToken` read from localStorage (Phase 2 supplies it)
2. Replace `postToPlatform()` (currently shows manual-paste alert) with:

```javascript
async function postToPlatform(platform, content) {
    const config = JSON.parse(localStorage.getItem('elevare_marketing_config') || '{}');
    const token = config.buffer?.accessToken;
    if (!token) { alert('Connect Buffer in Settings first.'); return; }

    // Get profile IDs
    const profilesRes = await fetch(`https://api.bufferapp.com/1/profiles.json?access_token=${token}`);
    const profiles = await profilesRes.json();
    const profile = profiles.find(p => p.service === platform.toLowerCase());
    if (!profile) { alert(`No ${platform} profile in your Buffer. Connect it at buffer.com.`); return; }

    // Queue update
    const formData = new FormData();
    formData.append('text', content);
    formData.append('profile_ids[]', profile.id);
    const res = await fetch(`https://api.bufferapp.com/1/updates/create.json?access_token=${token}`, {
        method: 'POST',
        body: formData
    });
    const result = await res.json();
    if (result.success) {
        alert(`Queued to ${platform} via Buffer ✓`);
    } else {
        alert(`Buffer error: ${result.message || 'unknown'}`);
    }
}
```

3. Update each "Post to X" button in the Create tab to call `postToPlatform()` with the generated content.

### Buffer setup Debby needs to do (one-time)

1. Sign up at buffer.com (free tier supports 3 channels — IG, FB, LinkedIn)
2. Connect each social account inside Buffer
3. Settings → Apps → Create Access Token (or use OAuth)
4. Paste token into dashboard Settings tab
5. Click Save → badge turns green → DEMO banner disappears

---

## Phase 4 — Kill (or honestly label) fake analytics (~1 hr)

The Analytics tab currently shows hardcoded numbers like "2.4K reach / 4.8% engagement / 156 clicks." This actively misleads decision-making.

**Two options — Donal's call:**

- **A) Remove the Analytics tab entirely** until real Buffer Analytics integration ships (later phase).
- **B) Keep the UI but replace stats with `—` placeholders** + banner: *"Analytics dashboard requires Buffer/Meta integration (coming next). Numbers shown are placeholders."*

Either way, **DELETE the hardcoded numbers** at lines ~880-896.

---

## Out of scope (don't drift)

- Voice cloning integration (Resemble / 11Labs / Play.ht) — defer to Month 2+
- Real Meta Ads Insights API integration — Phase 5+
- Mailchimp/SendGrid live integration — Phase 5+ (no list yet)
- Custom dashboards for tutors/students — frozen until $5k MRR × 2 months
- Auto-posting to platforms beyond Buffer's reach — manual is fine for now

---

## Verification checklist (Donal runs after each phase)

### After Phase 1
- [ ] `grep -c "Lingua\|Rise\|Flex Nexus" marketing/marketing-dashboard.html` returns **0**
- [ ] `grep -c "elevare-general\|elevare-pro\|elevare-med" marketing/marketing-dashboard.html` returns **>0**
- [ ] Open dashboard → Create tab → select each new program → "Generate LinkedIn Post" → output mentions correct product
- [ ] Same check for Voiceless Ads tab + each new product
- [ ] README references match new taxonomy

### After Phase 2
- [ ] Save API key in Settings → reload page → key still there
- [ ] Status badges show "Connected" / "Not connected" accurately
- [ ] DEMO banner appears when keys missing, hides when present

### After Phase 3
- [ ] Connect Buffer in Settings → click Post to LinkedIn from a generated post → check Buffer queue → post is there
- [ ] Test on at least 2 platforms (LinkedIn + Instagram via Buffer)

### After Phase 4
- [ ] No hardcoded fake numbers anywhere visible
- [ ] If kept, banner clearly labels placeholders

---

## Critical path

| Phase | Effort | Depends on | Ships value |
|---|---|---|---|
| 1 — Taxonomy + content | 3 hrs | none | Debby can copy correct copy |
| 2 — Save settings + badges | 2 hrs | none | No more re-entering keys |
| 3 — Buffer posting | 3 hrs | 2 | Real auto-posting |
| 4 — Kill fake stats | 1 hr | none | Honest dashboard |

**Minimum shippable:** 1 + 2 = 5 hrs → Debby can use it for real-but-manual posting.
**Full shippable:** 1 + 2 + 3 + 4 = 9 hrs → Debby can post directly from dashboard.

Recommend Donal does 1 + 2 first session, 3 + 4 next session.

---

## Source content for templates

All pitch language above derives from [marketing/pitch-scripts/](pitch-scripts/) — 6 .docx files (General + Med × 30s/2min/5min) authored 2026-04-24. Pro pitch language is adapted from existing site copy at [index.html:1977-1999](../index.html#L1977-L1999).

If new pitch scripts are added later (Pro 30s/2min/5min, add-on-specific), update `contentTemplates` accordingly.
