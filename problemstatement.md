Myntra Wishlist MVP — Problem Statement
Phase 9: Minimum Viable Test (MVT)

THE CORE PROBLEM
> "High-intent Cautious Comparers continue to consider wishlisted fashion products but delay purchase because decision-relevant evidence about fit, appearance, quality, value and alternatives is fragmented and difficult to synthesize. They compensate by manually comparing products and researching across external sources, increasing the effort and uncertainty required to make a purchase decision."

PROJECT CONTEXT
Myntra has a large base of users who express product interest by adding items to their wishlist. Wishlist activity indicates meaningful purchase intent, but many users do not progress from wishlist interest to a completed purchase within 30 days due to the friction described above.

BUSINESS GOAL
Increase the percentage of users who purchase >=1 item from their wishlist within 30 days of adding it.

PRIMARY PRODUCT METRIC
30-Day Wishlist -> Purchase Conversion (%)

TARGET USER
High-intent, uncertainty-driven wishlist users who have saved products but have not yet confidently decided to purchase.

MVP HYPOTHESIS
If Myntra reduces evaluation friction for high-intent wishlist users by helping them understand, compare, and act on the products they have already saved, then more users will confidently progress from wishlist -> evaluation -> decision -> purchase within 30 days.

MVP PRINCIPLE
Solve the decision/evaluation problem using product and user-experience improvements, NOT monetary incentives. (No coupons, cashback, direct discounts).

MVT / MVP SCOPE
The MVP includes:
- AI Evidence Summary (single item)
- Wishlist Comparison (2-3 items)
- AI Trade-offs & Best Pick
- Seamless path to product page & Add to Bag

Out of Scope (Post-MVP):
- Personalized size prediction
- Voice assistant / chat
- Advanced styling recommendations
- Price alerts / notifications

USER FLOW (MVP JOURNEY)
1. WISHLIST: User views saved items
2. HELP ME DECIDE: User taps to get decision support
3. AI EVIDENCE SUMMARY: AI summarizes key evidence for the top item
4. COMPARE 2-3 SAVED ITEMS: User selects 2-3 items to compare
5. AI TRADE-OFFS: AI highlights key differences, trade-offs & best fit
6. SELECT PRODUCT: User picks the product that best suits them
7. ADD TO BAG: Move to product page and add to bag
8. PURCHASE: Complete purchase

KEY EVENTS (INSTRUMENTATION)
1. Wishlist Opened
2. Help Me Decide Clicked
3. Evidence Summary Viewed
4. Comparison Initiated
5. Comparison Completed
6. Trade-offs Viewed
7. Product Selected
8. Add to Bag Clicked
9. Purchase Completed

SUCCESS CRITERIA & LEADING INDICATORS
- Statistically significant lift in 30-day Wishlist -> Purchase Conversion
- Increase Evaluate -> Decide progression
- No negative impact on returns or satisfaction
- High engagement with decision support

Leading Indicators We Will Track:
- Decision Aid Engagement Rate (opened / eligible users)
- Comparison Initiation Rate
- Comparison Completion Rate
- Wishlist -> Add to Bag Rate
- Add to Bag -> Purchase Rate

MVP BOUNDARIES
This is an MVT to test the hypothesis. AI generation can be mocked or simulated for the specific test scope without building a full complex ML backend.
