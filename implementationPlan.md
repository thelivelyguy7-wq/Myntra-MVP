# Implementation Plan: Myntra Wishlist MVP (v3 - Guided Flow)

## Phase 1: Setup & Data (Completed)
- [x] Initialize Vite React project.
- [x] Install Lucide-React.
- [x] Setup global CSS variables and base UI.
- [x] **Mock Data (`mockProducts.js`)**: Ensure `aiEvidence` and `aiTradeOffs` fields exist for at least 5 items.

## Phase 2: Routing State Refactor (Completed)
- [x] **Update `App.jsx`**: Remove old grid/compare states. Implement a linear step router state (`currentFlowStep`: 'SINGLE_ITEM', 'COMPARE', 'EVIDENCE').
- [x] Add state for `selectedProduct` (the item chosen from comparison).

## Phase 3: Step 1 - Single Item View (Completed)
- [x] **Build `WishlistSingleItemView.jsx`**: A view displaying just the first mock product, expanded to act as a full PDP (Product Details Page) with sizes, colors, and specifications.
- [x] Place the **"Help Me Decide"** button prominently at the top right of this view.
- [x] Wire the button to advance the flow to the `COMPARE` step.

## Phase 4: Step 2 - Auto-Compare Journey (Completed)
- [x] **Build `AutoCompareView.jsx`**: A full-page view replacing the old modal.
- [x] Hardcode or slice the first 5 items from `mockProducts.js` to display.
- [x] Inject the **AI Trade-offs & Best Pick** banner at the top.
- [x] Render a list of the 5 items (Image, Brand, Name, Price).
- [x] Wire item clicks to advance the flow to the `EVIDENCE` step, passing the clicked item.

## Phase 5: Step 3 - Final Evidence View (Completed)
- [x] **Build `FinalEvidenceView.jsx`**: A final checkout-style view for the selected item.
- [x] Display the item's **AI Evidence Summary**.
- [x] Display the detailed stats vertically (Signals, Rating, Material, Fit, Delivery).
- [x] Include a prominent pink **"ADD TO BAG"** button at the bottom.

## Phase 6: Analytics & Verification (Completed)
- [x] **Wire Events**: Ensure the mock logger fires events sequentially as the user navigates the 3 steps (`wishlist_opened`, `help_me_decide_clicked`, `trade_offs_viewed`, `product_selected`, `evidence_summary_viewed`, `add_to_cart_clicked`, `purchase_completed`).
- [x] **Functional Testing**: Walk through the exact new flow.

## Phase 7: UI/UX Refinements (Completed)
- [x] **Myntra Styling**: Update global tokens (`index.css`) to match Myntra's flat aesthetic and sharp border radii.
- [x] **Typography**: Update font sizes, colors, and uppercase styling for brand names to mimic the Myntra website.
- [x] **Layout Cleanup**: Remove redundant headers ("Your Saved Item", "Help Me Decide", "Product Details") across all pages in favor of clean `< Back` navigation.
- [x] **Trade-offs Banner**: Restyle the AI Trade-offs list with bullets, pink bolded brand names, and proper spacing.
- [x] **Final CTA**: Convert "Move to Bag" to "ADD TO BAG" with a `ShoppingBag` icon on the final page.
- [x] **Price Display**: Removed the strikethrough original price from the PDP to present a cleaner interface.
