import React, { useEffect, useState } from 'react';
import { Sparkles, Star, Heart, ShoppingBag, ChevronRight, ChevronLeft, Zap } from 'lucide-react';
import './WishlistSingleItemView.css';
import { trackEvent } from '../utils/analytics';

export default function WishlistSingleItemView({ product, onHelpMeDecide }) {
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    trackEvent('wishlist_opened');
  }, []);

  if (!product) return null;

  return (
    <div className="single-item-container">
      <div className="single-item-header">
        <div className="header-left-group">
          <button className="btn-back" onClick={() => {}}><ChevronLeft size={20}/> Back</button>
        </div>
        <button className="btn-hmd-top-right" onClick={() => onHelpMeDecide()}>
          <Sparkles size={20} /> Help Me Decide
        </button>
      </div>
      
      <div className="pdp-main">
        <div className="pdp-image-col">
          <img src={product.image} alt={product.name} className="pdp-main-image" />
        </div>
        
        <div className="pdp-info-col">
          <h3>{product.brand}</h3>
          <h1>{product.name}</h1>
          <div className="price-row">
            <span className="price">₹{product.price}</span>
          </div>
          <div className="rating-row">
            <Star size={16} color="var(--color-success)" fill="var(--color-success)" />
            <span className="rating-val">{product.rating}</span>
            <span className="review-count">({product.reviewCount} Reviews)</span>
          </div>

          <div className="colors-section">
            <h4>MORE COLORS</h4>
            <div className="color-thumbnails">
              {product.colors && product.colors.map((colorImg, idx) => (
                <img key={idx} src={colorImg} alt={`Color ${idx+1}`} className={`color-thumb ${idx===0 ? 'active' : ''}`} />
              ))}
            </div>
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

          <div className="pdp-actions">
            <button className="btn-add-to-bag">
              <ShoppingBag size={18} /> ADD TO BAG
            </button>
            <button className="btn-wishlist">
              <Zap size={18} /> BUY NOW
            </button>
          </div>
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
