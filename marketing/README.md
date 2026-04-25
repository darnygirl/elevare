# Elevare Marketing Agent

Content generation for social media, email marketing, and voice ads — wired to the current 3-tier taxonomy (General / Pro / Med) + 3 add-ons.

## Quick Start

1. Open `marketing-dashboard.html` in your browser
2. Select content type (social post, email, ad copy, etc.)
3. Choose platform (LinkedIn, Instagram, Email, etc.)
4. Click "Generate Content"
5. Copy, edit, and post!

## Files

- `marketing-dashboard.html` - Main dashboard with all features
- `api-config.js` - API key configuration (you fill in your keys)
- `pitch-scripts/` - Source-of-truth pitch scripts (6 .docx files, General + Med × 30s/2min/5min)
- `TODO-marketing-agent-rebuild.md` - Rebuild spec (Phases 1, 2, 4 shipped; Phase 3 Buffer integration shipped 2026-04-25, awaiting live test with real Buffer token)

## Features

### Content Create Tab
Generate marketing copy for:
- Social Media Posts (LinkedIn, Instagram, Facebook, Twitter/X, YouTube)
- Email Newsletters
- WhatsApp Messages
- Ad Copy

### Voice Studio Tab
Record YOUR OWN voice for ads — no external services needed.

**How it works:**
1. **Record Sample** - Record a 10-30 second voice sample
2. **Generate Script** - Pick an ad script (General, Pro, or Med)
3. **Record Ad** - Use the script to record your ad with YOUR voice
4. **Save & Download** - Keep recordings in your library or download

**Why it's great:**
- Your voice, not AI - sounds authentic
- No API keys or external services needed
- Unlimited recordings
- Your voice stays private (stored in browser)

### Quick Ad Scripts
Pre-written ads for the current 3 tiers — 15-90 second versions:
- **Elevare General** ($99/$199) — group speaking, stop-freezing hook
- **Elevare Pro** ($299/mo) — business English, employer-reimbursable
- **Elevare Med** ($699/mo) — OET pass guarantee for internationally-trained nurses + doctors

### 📱 Voiceless Video Ads Tab (NEW!)
Perfect for Instagram Reels, TikTok, LinkedIn, Facebook - where 80% watch with sound OFF!

**How it works:**
1. Select your program (General, Pro, Med, AI Practice Bot, Extra 1:1, or Free trial)
2. Choose ad length (5-10s, 15-30s, or 30-60s)
3. Pick your platform (Instagram, TikTok, LinkedIn, Facebook, YouTube)
4. Add optional key message/offer
5. Click "Generate Voiceless Ad"

**What you get:**
- 🎬 HOOK - The attention-grabbing first 2-3 seconds
- 📝 SCENE 1-3 - Text overlays for each section
- 💪 CALL TO ACTION - What viewers should do next
- 🎨 VISUAL SUGGESTIONS - What to show in the video

**Quick Templates:**
- 😤 Problem Agitation - Show the pain, then the solution
- 👥 Social Proof - "Join 2,000+ students..."
- 🔥 Transformation - Before → After story

**Why it works:**
- 80-90% of people scroll with sound OFF on social
- Bold text + strong visuals stop the scroll
- Easy to produce, no recording equipment needed
- Works across all platforms

## API Setup (Optional)

Voice Studio works WITHOUT any API keys. The integrations below unlock auto-posting.

### Buffer (Social Media Scheduling) — **wired**
1. Get Access Token: buffer.com/developers/apps → Create App → access token
2. Settings tab in dashboard → paste into "Buffer Access Token" → Save
3. Make sure your social accounts (LinkedIn / Instagram / Twitter) are connected at buffer.com/app/account/channels
4. Generate a post in Create tab → click the platform icon (LinkedIn / IG / X) → it queues to Buffer for review

### Mailchimp (Email Marketing) — token storage only, sending not yet wired
1. Get API key: mailchimp.com → Account → API keys
2. Audience ID: Audience → Settings → Audience name and defaults
3. Stored in localStorage but no auto-send yet — use Buffer for now

### SendGrid (Email Sending) — token storage only, sending not yet wired
1. Get API Key: sendgrid.com → Settings → API Keys
2. Create with "Full Access" permissions
3. Stored but inactive — same as Mailchimp

## Best Posting Times (Based on Research)

| Platform | Best Times |
|----------|------------|
| LinkedIn | Tue-Thu, 7-8am, 12pm, 5-6pm |
| Instagram | Mon-Fri, 11am-1pm, 7-9pm |
| Facebook | Wed, 11am-1pm |
| Twitter | Weekdays, 8-9am, 12pm |
| YouTube | Thu-Fri, 12-3pm, Sat-Sun |

## Voice Studio Tips

- Record in a quiet environment
- Speak clearly and at a natural pace
- A 10-30 second sample is enough
- Scripts are customizable - edit them to match your style
- Recordings are saved in your browser (clear cache to reset)
- Download recordings to keep them permanently