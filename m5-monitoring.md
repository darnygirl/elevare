# Donal's M5 Monitoring + Fallback Runbook

> Closes gap #10 from `plan-feedback-2026-04-17.md`. Donal's Mac M5 hosts Orpheus TTS, RVC voice-clone, Coqui XTTS fallback, and marketing-cron batch jobs. Stability audit (ST1) flags this as SPOF but gives no monitoring plan. This is that plan. Owner: [Donal] implements, [Debby] runs the fallback drill before ad launch.

---

## What runs on M5

| Service | Purpose | Criticality | What breaks if M5 dark |
|---|---|---|---|
| Orpheus TTS streaming | Real-time AI tutor voice (Stage 4, Week 4+) | P0 | Students can't talk to Amara in real-time |
| RVC inference | Marketing voice content (Month 2+) | P1 | Content cadence throttled — 11Labs cloud fills the gap |
| Coqui XTTS v2 | Fallback voice + batch jobs | P2 | Backup lost; rely on 11Labs single point |
| Marketing-agent cron | Daily content pipeline | P1 | Organic posts stop; manual backfill needed |

---

## Heartbeat endpoint

[Donal] ships a lightweight `/health` endpoint on M5 (Python/Node, whatever is fastest):

```
GET http://<m5-tailscale-ip>:8080/health
{ "ok": true, "services": { "orpheus": "up", "rvc": "up", "xtts": "up" }, "uptime_s": 86400 }
```

**Polled every 60s** from a Cloudflare Worker cron. Tailscale keeps the tunnel alive without exposing a public IP.

---

## Alert thresholds

| Condition | Alert level | Who gets paged | Action window |
|---|---|---|---|
| No heartbeat for 3 min | WARN | [Donal] (Slack) | 10 min self-recovery before escalation |
| No heartbeat for 15 min | CRIT | [Donal] (Slack + SMS) + [Debby] (Slack) | Immediate — run fallback drill |
| Service flag "down" for 10 min | WARN | [Donal] (Slack) | Restart service, investigate |
| M5 CPU > 90% for 10 min | WARN | [Donal] (Slack) | Check for training job collision with inference |
| R2 voice-model bucket unreachable | CRIT | [Donal] (Slack + SMS) | Issue 3 of Round-1 feedback — R2 keys rotation |

**Alerting tool:** Uptime Kuma (free, self-hosted on Donal's existing Cloudflare Worker setup) or BetterStack free tier. Implementation: 15-30 min.

---

## Debby-side fallback procedure (M5 dark >15 min)

Debby gets a Slack alert. Without needing [Donal] online, she can:

### 1. Confirm it's really down
- Open Slack #elevare-alerts, check alert card
- Open her browser, hit `https://elevaremind.io/admin/m5-status` (public view of the health check, [Donal] ships this Week 1)
- If both red → M5 is down, proceed to step 2

### 2. Flip marketing-agent to cloud-only voice
- SSH/open her marketing-agent dashboard: `marketing/marketing-dashboard.html`
- In settings panel: toggle "Voice source" from `M5-RVC` → `11Labs-cloud`
- Save. Next content batch uses 11Labs Creator tier instead of RVC.

### 3. Flip AI tutor voice fallback (Month 2+, once Stage 4 is live)
- No action needed — ST2 mitigation auto-fails from Orpheus → Coqui (also on M5, same dark) → 11Labs cloud
- UX shows banner: "Amara is briefly away — text-only for the next few minutes, your streak is safe."

### 4. Ping [Donal] and log incident
- Slack DM [Donal]: "M5 dark since [timestamp]. Flipped voice to 11Labs cloud. Content queue paused at [last-run]."
- Log in Blockers sheet: Date, time dark, time recovered, what failed, what fix worked

### 5. Recovery
- When [Donal] confirms M5 back: flip marketing-agent back to `M5-RVC`
- Re-trigger any content batches queued during outage
- Post-mortem: 5-line note in `m5-monitoring.md` `## Incidents` section below

---

## Pre-launch drill (run once before ad launch Day 8)

[Donal] intentionally stops Orpheus service. [Debby] executes the fallback procedure end-to-end. Success criteria:

- [ ] Alert fired within 15 min
- [ ] Debby toggled marketing-agent voice source within 5 min of alert
- [ ] 11Labs cloud produced a test clip within 10 min
- [ ] Content queue resumed within 20 min of toggle
- [ ] Drill total time: < 30 min from service-stop to service-restore

If any step fails the drill: fix before ads launch. Do not ship ad traffic to a site whose voice infra has an untested fallback.

---

## Incidents (post-mortem log)

_None yet. First entry after first real incident or the pre-launch drill._

---

*Owner: [Donal] implements heartbeat + Uptime Kuma setup by Week 1 Fri EOD. [Debby] runs pre-launch drill Week 2 Mon. Last revised: 2026-04-17.*
