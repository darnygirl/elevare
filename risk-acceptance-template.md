# Pre-Launch Risk Acceptance — Elevare

> Closes gap #9 from `plan-feedback-2026-04-17.md`. The master plan's Stage-4 audit (lines 1771-1833) flags 11 P0 items and requires "Debby's sign-off" before anything customer-facing ships. This is that sign-off. Owner: [Debby] signs; [Donal] reviews before ad launch Day 8.

---

## Rules

1. Every P0 item below must be either **RESOLVED** (fix shipped + verified) or **ACCEPTED** (explicitly signed off as acceptable risk with documented reason)
2. Sign-off = Debby initials + date. Accepting risk means "I understand the failure mode and am launching anyway"
3. This file is committed to git — audit trail if anything breaks
4. No ad creative goes live until every row is signed

---

## P0 checklist

### Security

| # | Risk | Status | Debby initial + date | Notes / acceptance reason |
|---|------|---|---|---|
| S1 | Voice clone misuse (scam, deepfake, unauthorized cloning) | ☐ RESOLVED ☐ ACCEPTED | `____ / ____-__-__` | Resolution = written consent signed + kill-right clause. Acceptance = not yet. |
| S2 | Student audio/transcripts are biometric PII (GDPR + Thai PDPA) | ☐ RESOLVED ☐ ACCEPTED | `____ / ____-__-__` | Resolution = privacy policy live + DPA with OpenAI/Cloudflare + deletion-on-request flow. |
| S3 | API key leak via repo push or client-side exposure | ☐ RESOLVED ☐ ACCEPTED | `____ / ____-__-__` | Resolution = keys in Worker env only, `.gitignore` audited, rotation plan documented. |

### Stability

| # | Risk | Status | Debby initial + date | Notes / acceptance reason |
|---|------|---|---|---|
| ST1 | Donal's M5 = SPOF for Orpheus voice | ☐ RESOLVED ☐ ACCEPTED | `____ / ____-__-__` | Resolution = see `m5-monitoring.md` + 11Labs fallback tested. Acceptance = M5 covers ≥95% of traffic; fallback untested. |
| ST2 | OpenRouter / Cloudflare / OpenAI outage during paid session | ☐ RESOLVED ☐ ACCEPTED | `____ / ____-__-__` | Resolution = Sonnet→Haiku→text-only fallback wired + status-page webhook to UX banner. |

### Speed

| # | Risk | Status | Debby initial + date | Notes / acceptance reason |
|---|------|---|---|---|
| SP1 | 2.5s full-turn target is optimistic; p50 realistic 3-4s | ☐ RESOLVED ☐ ACCEPTED | `____ / ____-__-__` | Resolution = streaming from first token + pre-cached greetings. Acceptance = p95 < 5s accepted for Month 1, measured weekly. |

### Whole-plan

| # | Risk | Status | Debby initial + date | Notes / acceptance reason |
|---|------|---|---|---|
| W1 | Site still has WhatsApp placeholder, 14 fake open positions, Rise mental-health framing | ☐ RESOLVED ☐ ACCEPTED | `____ / ____-__-__` | Per plan line 1819 — MUST be RESOLVED before ads. Acceptance not allowed. |
| W2 | `elevaremind.io` DNS + Zoho Mail not verified | ☐ RESOLVED ☐ ACCEPTED | `____ / ____-__-__` | MUST be RESOLVED before ads (landing-page deliverability). |
| W3 | Meta ad account under Debby's name not set up | ☐ RESOLVED ☐ ACCEPTED | `____ / ____-__-__` | MUST be RESOLVED before ads (Donal's banned). |

---

## Sign-off block

I, **Debby**, have reviewed each P0 item above. Items marked RESOLVED have been verified live. Items marked ACCEPTED carry risk I accept and understand. I am authorizing launch on this basis.

- Signature: `_______________________`
- Date: `____-__-__`

Co-reviewed by **[Donal]**:

- Signature: `_______________________`
- Date: `____-__-__`

---

## P1 + P2 deferral list

P1 (must fix Month 1, not pre-launch): S4-S7, ST3-ST7, SP2, SP6, W4-W6 (11 items). Owner: [Donal]. Track on Debby's Blockers sheet with due date Day 30.

P2 (backlog): S8, ST8-ST10, SP3-SP5, SP7 (8 items). Revisit after $2k MRR.

---

*Template authored for [Debby] × [Donal], 2026-04-17. Closes gap #9 in `plan-feedback-2026-04-17.md`.*
