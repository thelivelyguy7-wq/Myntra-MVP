import React from 'react';
import { X, Star, Zap, Sparkles } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import './CompareView.css';

export default function CompareView({ items, onClose }) {
  if (!items || items.length === 0) return null;

  // Determine "winners" for highlighting
  const highestRating = Math.max(...items.map(i => i.rating));
  const lowestPrice = Math.min(...items.map(i => i.price));
  
  // Best Pick logic
  const bestPick = items.reduce((prev, curr) => (prev.rating > curr.rating) ? prev : curr);

  const handleAddToCart = (item) => {
    trackEvent('product_selected', { productId: item.id });
    trackEvent('add_to_cart_clicked', { productId: item.id });
    // Simulate flow
    trackEvent('purchase_completed', { productId: item.id, value: item.price });
    alert(`${item.name} added to bag and mock purchase completed!`);
  };

  const handleClose = () => {
    onClose(); // Parent logs comparison_completed
  };

  return (
    <div className="compare-modal-overlay">
      <div className="compare-modal">
        <div className="compare-modal-header">
          <h2>Compare Products</h2>
          <button className="btn-close-modal" onClick={handleClose}>
            <X size={24} />
          </button>
        </div>
        
        <div className="compare-matrix">
          {/* --- NEW: AI Trade-offs & Best Pick Banner --- */}
          <div className="tradeoffs-banner">
            <div className="tradeoffs-header">
              <Sparkles size={16} color="var(--color-brand)"/> 
              <h3>AI Trade-offs & Best Pick</h3>
            </div>
            <div className="tradeoffs-content">
              <ul className="tradeoffs-list">
                {items.map(item => (
                  <li key={item.id}><strong>{item.brand}:</strong> {item.aiTradeOffs}</li>
                ))}
              </ul>
              <div className="best-pick-callout">
                <span className="bp-badge">Best Pick</span>
                <strong>{bestPick.name}</strong> (Highest overall rating of {bestPick.rating})
              </div>
            </div>
          </div>

          {/* Header Row (Images & Basic Info) */}
          <div className="matrix-row header-row">
            <div className="matrix-cell feature-label"></div>
            {items.map(item => (
              <div key={item.id} className="matrix-cell product-col">
                <img src={item.image} alt={item.name} className="compare-img" />
                <h3 className="compare-brand">{item.brand}</h3>
                <p className="compare-name">{item.name}</p>
                <div className="compare-price">
                  <span className={`price ${item.price === lowestPrice ? 'highlight-price' : ''}`}>
                    ₹{item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Decision Signals Row */}
          <div className="matrix-row">
            <div className="matrix-cell feature-label">Why you might like this</div>
            {items.map(item => (
              <div key={item.id} className="matrix-cell">
                <div className="signals-wrapper">
                  {item.decisionSignals.map(sig => (
                    <span key={sig} className="signal-badge"><Zap size={12} /> {sig}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Rating Row */}
          <div className="matrix-row">
            <div className="matrix-cell feature-label">Rating</div>
            {items.map(item => (
              <div key={item.id} className="matrix-cell">
                <div className={`compare-rating ${item.rating === highestRating ? 'winner' : ''}`}>
                  <Star size={16} fill="currentColor" />
                  <span>{item.rating} ({item.reviewCount})</span>
                  {item.rating === highestRating && <span className="winner-label">Highest</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Material Row */}
          <div className="matrix-row">
            <div className="matrix-cell feature-label">Material</div>
            {items.map(item => (
              <div key={item.id} className="matrix-cell">{item.attributes.material}</div>
            ))}
          </div>

          {/* Fit Row */}
          <div className="matrix-row">
            <div className="matrix-cell feature-label">Fit</div>
            {items.map(item => (
              <div key={item.id} className="matrix-cell">{item.attributes.fit}</div>
            ))}
          </div>

          {/* Delivery Row */}
          <div className="matrix-row">
            <div className="matrix-cell feature-label">Delivery</div>
            {items.map(item => (
              <div key={item.id} className="matrix-cell">
                <span className={`delivery-text ${item.attributes.delivery.includes('Tomorrow') ? 'fast-delivery' : ''}`}>
                  {item.attributes.delivery}
                </span>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className="matrix-row action-row">
            <div className="matrix-cell feature-label"></div>
            {items.map(item => (
              <div key={item.id} className="matrix-cell">
                <button 
                  className="btn-add-cart-primary" 
                  onClick={() => handleAddToCart(item)}
                >
                  Move to Bag
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
