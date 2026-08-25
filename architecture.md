# Myntra Wishlist MVP: Architecture Document (v3 - Guided Flow)

## 1. Overview
This document outlines the technical architecture for the Myntra Wishlist Decision-Support Minimum Viable Test (MVT). It has been updated to reflect the new **Guided Single-Item Flow**, where users transition linearly from a single wishlisted item, into an auto-populated 5-item comparison, and finally to a detailed evidence summary.

## 2. Technology Stack
- **Framework:** Vite + React 
- **Styling:** Vanilla CSS (CSS Variables for theming, dark mode, responsive layouts).
- **Icons & Assets:** Lucide React.

## 3. Core Architecture Components

### 3.1. The Mock Data Engine
The application will run on mock data injected into the application state at runtime.

**Data Models:**
*   `Product`: Represents an item on Myntra.
    *   `id`, `name`, `brand`, `image`, `price`, `originalPrice`, `rating`, `reviewCount`
    *   `attributes`: (material, fit, delivery)
    *   `decisionSignals`: Array of short tags (e.g., `["Highly Rated"]`)
    *   `aiEvidence`: String (A short summary of why this is a good pick).
    *   `aiTradeOffs`: String (A contextual string used during comparison).

### 3.2. State Management
*   `App` maintains a `currentFlowStep` state variable: `'SINGLE_ITEM' | 'COMPARE_5' | 'FINAL_EVIDENCE'`.
*   `activeProduct`: The item the user is currently focused on or has selected from the comparison.

## 3.3. Component Structure
1.  **`App`**: The root container acting as a router for the 3 steps.
2.  **`Header`**: Base UI. 
3.  **`WishlistSingleItemView` (Step 1)**: Renders a single product resembling a full Myntra Product Details Page (PDP). Includes product images, final pricing (original strikethrough price removed for clarity), colors, size selector, specifications grid, and the "Help Me Decide" button at the top right. (Clean header with just a back button).
4.  **`AutoCompareView` (Step 2)**: Automatically populated with 5 items. Displays a styled "AI Trade-offs & Best Pick" banner with bullet points highlighting each brand in Myntra pink. Clicking an item selects it.
5.  **`FinalEvidenceView` (Step 3)**: Renders the selected product. Shows the AI Evidence Summary, detailed attribute matrix (Signals, Rating, Material, Fit, Delivery), and the final "ADD TO BAG" CTA with a shopping bag icon.

## 4. UI/UX & Styling
- **Design Language**: Follows Myntra's flat, clean aesthetic. Uses sharp borders (`4px` radius), flat drop shadows, and clean typography.
- **Brand Colors**: Heavily utilizes Myntra's iconic pink (`#ff3f6c`) for key AI highlights, typography accents, and main CTAs.
- **Dynamic Theming (Light/Dark Mode)**: Fully responsive to the user's OS color scheme. Uses semantic CSS variables (e.g., `--color-brand-light-bg`) to gracefully transition the pink highlight banners into a deeper burgundy tint when in dark mode to ensure perfect text contrast.
- **Navigation**: Clean headers with a simple `< ChevronLeft Back` button across all steps.

## 5. Deployment
- **Platform**: Vercel
- **Configuration**: Uses a `vercel.json` file at the root to explicitly define the framework (`vite`), build command (`npm run build`), and output directory (`dist`) to ensure smooth CI/CD deployments.

## 5. Event Tracking Architecture (Analytics)
A mock `Logger` utility (`trackEvent`) will simulate a data pipeline.

**Key Events Triggered Linearly:**
1. `wishlist_opened` (On initial load of SingleItemView)
2. `help_me_decide_clicked` (Clicking the CTA)
3. `trade_offs_viewed` (On load of AutoCompareView)
4. `product_selected` (Clicking an item in AutoCompareView)
5. `evidence_summary_viewed` (On load of FinalEvidenceView)
6. `add_to_cart_clicked` (Clicking ADD TO BAG)
7. `purchase_completed` (Simulated post-add)
