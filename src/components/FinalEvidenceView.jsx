import React, { useEffect } from 'react';
import { Sparkles, Star, Zap, ChevronLeft, ShoppingBag } from 'lucide-react';
import './FinalEvidenceView.css';
import { trackEvent } from '../utils/analytics';

export default function FinalEvidenceView({ product, onMoveToBag, onBack }) {
  useEffect(() => {
    trackEvent('evidence_summary_viewed', { productId: product.id });
  }, [product.id]);

  return (
    <div className="final-evidence-view">
      <div className="final-header">
        <button className="btn-back" onClick={onBack}><ChevronLeft size={20}/> Back</button>
      </div>

      <div className="evidence-product-card">
         <img src={product.image} alt={product.name} className="evidence-main-img" />
         <div className="evidence-right">
            <h3>{product.brand}</h3>
            <h1>{product.name}</h1>
            <span className="price-large">₹{product.price}</span>
            
            <div className="evidence-ai-box-large">
              <div className="ai-box-header">
                 <Sparkles size={16} color="var(--color-brand)" /> AI Evidence Summary
              </div>
              <p>{product.aiEvidence}</p>
            </div>
         </div>
      </div>

      <div className="stats-matrix">
        <div className="stat-row">
          <div className="stat-label">Why you might like this</div>
          <div className="stat-value">
            {product.decisionSignals.map(sig => (
              <span key={sig} className="signal-badge"><Zap size={12}/> {sig}</span>
            ))}
          </div>
        </div>
        <div className="stat-row">
          <div className="stat-label">Rating</div>
          <div className="stat-value rating-val-green">
             <Star size={16} fill="currentColor"/> {product.rating} ({product.reviewCount})
          </div>
        </div>
        <div className="stat-row">
          <div className="stat-label">Material</div>
          <div className="stat-value">{product.attributes.material}</div>
        </div>
        <div className="stat-row">
          <div className="stat-label">Fit</div>
          <div className="stat-value">{product.attributes.fit}</div>
        </div>
        <div className="stat-row">
          <div className="stat-label">Delivery</div>
          <div className="stat-value delivery-fast">{product.attributes.delivery}</div>
        </div>
      </div>

      <div className="final-actions">
         <button className="btn-add-cart-primary" onClick={() => onMoveToBag(product)}>
           <ShoppingBag size={18} style={{marginRight: '8px'}} /> ADD TO BAG
         </button>
         <button className="btn-buy-now">
           <Zap size={18} style={{marginRight: '8px'}} /> BUY NOW
         </button>
      </div>
    </div>
  );
}
