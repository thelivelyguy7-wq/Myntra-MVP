import React, { useEffect, useState } from 'react';
import { Sparkles, Star, Zap, ChevronLeft, ShoppingBag, ChevronRight } from 'lucide-react';
import './FinalEvidenceView.css';
import { trackEvent } from '../utils/analytics';

export default function FinalEvidenceView({ product, onMoveToBag, onBack }) {
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    trackEvent('evidence_summary_viewed', { productId: product.id });
  }, [product.id]);

  return (
    <div className="final-evidence-view">
      <div className="final-header">
        <button className="btn-back" onClick={onBack}><ChevronLeft size={20} /> Back</button>
      </div>

      <div className="evidence-product-card">
        <img src={product.image} alt={product.name} className="evidence-main-img" />
        <div className="evidence-right">
          <div className="final-actions">
            <button className="btn-add-cart-primary" onClick={() => onMoveToBag(product)}>
              <ShoppingBag size={18} style={{ marginRight: '8px' }} /> ADD TO BAG
            </button>
            <button className="btn-buy-now" onClick={() => onMoveToBag(product)}>
              <Zap size={18} style={{ marginRight: '8px' }} /> BUY NOW
            </button>
          </div>
          <h3>{product.brand}</h3>
          <h1>{product.name}</h1>
          <span className="price-large">₹{product.price}</span>

          <div className="evidence-ai-box-large">
            <div className="ai-box-header">
              <Sparkles size={16} color="var(--color-brand)" /> AI Evidence Summary
            </div>
            <p>{product.aiEvidence}</p>
          </div>



          <div className="sizes-section">
            <div className="sizes-header">
              <h4>SELECT SIZE</h4>
              <span className="size-chart-link">SIZE CHART <ChevronRight size={14}/></span>
            </div>
            <div className="size-buttons">
              {product.sizes && product.sizes.map((sizeObj, idx) => (
                <button 
                  key={idx} 
                  className={`size-btn ${!sizeObj.available ? 'disabled' : ''} ${selectedSize === sizeObj.size ? 'selected' : ''}`}
                  disabled={!sizeObj.available}
                  onClick={() => setSelectedSize(sizeObj.size)}
                >
                  {sizeObj.size}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="stats-matrix">
        <div className="stat-row">
          <div className="stat-label">Why you might like this</div>
          <div className="stat-value">
            {product.decisionSignals.map(sig => (
              <span key={sig} className="signal-badge"><Zap size={12} /> {sig}</span>
            ))}
          </div>
        </div>
        <div className="stat-row">
          <div className="stat-label">Rating</div>
          <div className="stat-value rating-val-green">
            <Star size={16} fill="currentColor" /> {product.rating} ({product.reviewCount})
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

      <div className="pdp-details-section">
        {product.features && (
          <div className="details-block">
            <h4>FEATURES & BENEFITS</h4>
            {product.features.map((f, i) => <p key={i}>{f}</p>)}
          </div>
        )}

        {product.details && (
          <div className="details-block">
            <h4>DETAILS</h4>
            <ul className="key-value-list">
              {Object.entries(product.details).map(([k, v]) => (
                <li key={k}><span>{k}:</span> {v}</li>
              ))}
            </ul>
          </div>
        )}

        {product.materialCare && (
          <div className="details-block">
            <h4>Material & Care</h4>
            {Object.entries(product.materialCare).map(([k, v]) => (
              <p key={k}>{k !== 'Care' ? `${k}: ${v}` : v}</p>
            ))}
          </div>
        )}

        {product.specifications && (
          <div className="details-block">
            <h4>Specifications</h4>
            <div className="specs-grid">
              {Object.entries(product.specifications).map(([k, v]) => (
                <div className="spec-item" key={k}>
                  <div className="spec-label">{k}</div>
                  <div className="spec-val">{v}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>


    </div>
  );
}
