# Elevare Project Context

## Mission
Elevare is an AI-facilitated peer-group English coaching platform across three tiers: Elevare General (group speaking + AI facilitation), Elevare Pro (business English for working professionals), and Elevare Med (OET prep for internationally-trained nurses + doctors). Our mission is to help people overcome communication barriers through real conversation reps with peers and AI-supported coaching that addresses the psychology behind speaking, not just the mechanics.

## Current Goal
**$1,000 MRR in 30 days → $5,000 MRR in 90 days**

## Taxonomy (LOCKED — see PLAN.md for canonical reference)

| Key | Name | Price | Hook |
|---|---|---|---|
| `elevare-general` | Elevare General | $99/mo self-serve · $199/mo with tutor drops | Fluency + confidence. Small groups, AI facilitator. |
| `elevare-pro` | Elevare Pro | $299/mo · employer-reimbursable | Business English for working pros. |
| `elevare-med` | Elevare Med | $699/mo · 12-week programme | OET Grade B in 12 weeks. Pass-or-keep-coaching. |
| `addon-ai-bot` | AI Practice Bot | +$29/mo | Stacks on any tier. WhatsApp 24/7 drills. |
| `addon-1to1` | Extra 1:1 Tutor Time | +$199/mo | Private weekly coaching on top. |
| `addon-oet-bundle` | OET Exam Bundle | +$449 one-time | Med only. Exam-month intensive + mocks. |

**Dead names — must NEVER appear in user-facing copy:** Lingua, Rise, Flex Nexus, Elevare AI, Elevare Speak, Elevare Fluency.

## Team
| Person | Role | Responsibilities |
|--------|------|------------------|
| Debby | Founder / Brand | Brand strategy, content, customer acquisition, sales |
| Donald | Technical / Infra | Deployment, Cloudflare, integrations, site maintenance |
| 4 Tutors | Delivery | Coaching sessions, student progress, curriculum delivery |

## Tech Stack
| Phase | Stack | Timeline |
|-------|-------|----------|
| Current | GitHub Pages (elevaremind.io) | Now |
| Month 2 | Astro + Cloudflare Pages + MDash rebuild | Week 5-8 |

## Payment Infrastructure
| Provider | Status | Use |
|----------|--------|-----|
| Whop | Primary | Course sales, memberships |
| Lemon Squeezy | Backup | Alternative payment processor |

## Resources
- **Blockers Sheet:** [PASTE BLOCKERS SHEET URL HERE]
- **Shared Drive:** [PASTE GOOGLE DRIVE LINK HERE]
- **Living Plan:** `PLAN.md` — pending tasks, decision log, next sessions

## Key Pages
- Main Site: https://elevaremind.io/
- Elevare General: https://elevaremind.io/frontend/general.html
- Elevare Pro: https://elevaremind.io/frontend/pro.html
- Elevare Med: https://elevaremind.io/frontend/med.html
- AI Tutor: https://elevaremind.io/tutor-agent/tutor-dashboard.html
- Marketing Dashboard: https://elevaremind.io/marketing/marketing-dashboard.html (live Buffer posting wired 2026-04-25)
- Pricing: https://elevaremind.io/frontend/pricing.html

## Notes
- All changes pushed to GitHub auto-deploy to GitHub Pages
- Voice cloning works locally (XTTS v2 on Python 3.11)
- AI Tutor uses OpenAI for responses (requires API key in settings)
- WhatsApp: +66 94 969 0869 (Thai)
