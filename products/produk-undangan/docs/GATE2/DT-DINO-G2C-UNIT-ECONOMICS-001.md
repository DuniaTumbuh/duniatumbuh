# DT-DINO-G2C-001 — 90-Day Lifecycle Unit Economics & AI Budget Gate
Date: 2026-10-13
Status: ANALYTICAL SCENARIO / FOUNDER REVIEW REQUIRED / NO COMMERCIAL PRICE APPROVAL
Parent: DT-DINO-G2-LIFECYCLE-001 Event -> Memory, FOUNDER LOCKED

## 1. Planning assumptions, not measured market data
Prices per event, NOT per month: Lite Rp49,000; Adventure Rp99,000; Premium Rp179,000. Price mix 30%/50%/20%, giving weighted average Rp100,000/order.
Variable AI costs per order: Lite Rp0, Adventure Rp3,000, Premium Rp8,000. Weighted Rp3,100.
Other variable costs per order (illustrative allocations including payment, bandwidth, storage, API, human support/revision): Lite Rp9,000, Adventure Rp12,000, Premium Rp20,000. Weighted Rp12,700.
Combined variable cost Rp15,800/order (15.8% of weighted sale). Fixed operating cost illustrative Rp150,000/month, unchanged across scenarios ONLY for modeling. Taxes, CAC, refunds, labor overhead, physical fulfillment and payment-provider-specific charges NOT fully verified or modeled. These assumptions are not provider quotations.
Revenue and modeled contribution after above costs:
100 orders: revenue Rp10,000,000; variable Rp1,580,000; fixed Rp150,000; contribution Rp8,270,000.
500 orders: revenue Rp50,000,000; variable Rp7,900,000; fixed Rp150,000; contribution Rp41,950,000.
1,000 orders: revenue Rp100,000,000; variable Rp15,800,000; fixed Rp150,000; contribution Rp84,050,000.
CAUTION: fixed costs do not realistically stay constant at any load; these are illustrative mathematical outputs, NOT forecasted profit or capacity validation. In particular paid hosting, human support, refunds, customer acquisition and taxes may materially change the result.

## 2. Event lifecycle capacity (separate from monthly order volume)
Assume 30 days before event from publication plus 90 days after event: ~120 days or 4 months hosted access. Under steady monthly sales and no early closures, concurrent hosted events approximate 4 x monthly new orders: 400, 2,000, 4,000 respectively for 100/500/1,000 orders/month. These are planning occupancy approximations, not actual guest sessions, storage or bandwidth.
If 50 guests/event, potential guest invitations 20,000/100,000/200,000 across concurrent events; NOT simultaneous active users. Guest count, traffic peaks, video asset reuse, image compression and CDN cache hit ratio determine real capacity and cost. Count reads/writes, bandwidth and storage empirically.

## 3. Budget enforcement
Never call paid generative AI on guest view; reuse canonical licensed motion/3D assets. Cache content with versioned paths and CDN. Organizer preview/approve generation; enforce per-event caps, job deduplication, retries cap, token accounting and hard budget stop. Maintain ledger by event_id, package, provider, feature, generation_id, unit price, cost, currency, cache hit and refund status.
Proposed targets, not approved commercial promises: AI <=5% of price per order; total variable costs <=25%; pilot incremental paid services ceiling Rp150,000/month requires explicit Founder approval and cannot be assumed feasible at 1,000 orders.

## 4. Privacy and expiry architecture
Separate hosted feature expiry from personal data retention. Event state DRAFT -> PUBLISHED -> EVENT_PASSED -> MEMORY -> EXPIRED -> DELETED/ARCHIVED with role-authorized transitions. RSVP cutoff independently configurable; preserve historical response only under approved retention policy. Explicit notice before expiry, export of eligible keepsake files, privacy-preserving deletion workflow, no child account by default, guest token expiry/revocation, per-tenant authorization, backups subject to deletion policy. Timezone-specific event cutoffs and legal terms require review.
Holo local video is a file deliverable subject to device/file compatibility; Pepper's Ghost optical effect remains NOT TESTED. WebAR availability remains subject to browser compatibility and QC.

## 5. Acceptance before Founder final price/provider lock
1. Collect 3 comparable Indonesian children's-birthday digital invitation SKUs with verified current public checkout prices, features, active period, guest caps and add-on fees; marketing pages are not sufficient alone.
2. Confirm real per-order payment fees and tax treatment.
3. Benchmark load at 400/2,000/4,000 concurrent event records and realistic guest traffic bursts; separate event count from active sessions.
4. Run cost instrumentation for 10-20 consented pilot events including AI generation, bandwidth, DB, support, refunds and retries.
5. Validate data retention, secure export, token revocation, deletion, backup and incident handling.
6. Founder approves final provider, price, package terms, budget caps and paid resource provisioning.

## Governance
No implementation, provider selection, paid purchase, branch merge, DNS or production change authorized. PR #9 and PR #10 remain DRAFT/UNMERGED. This document is a review candidate, not a completed test.
