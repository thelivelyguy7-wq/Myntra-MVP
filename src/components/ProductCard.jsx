import React from 'react';
import { Star, CheckCircle2, Sparkles } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export default function ProductCard({ product, isSelected, onToggleSelect, showHelpMeDecide, onHelpMeDecide }) {
  const handleAddToCart = () => {
    trackEvent('add_to_cart_from_wishlist', { productId: product.id, productName: product.name });
    alert(`${product.name} added to bag!`);
  };

  const handleProductClick = () => {
    trackEvent('wishlist_item_viewed', { productId: product.id });
    onToggleSelect();
  };

  return (
    <div className={`product-card ${isSelected ? 'selected' : ''}`}>
      <div className="product-image-container" onClick={handleProductClick}>
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="select-overlay">
          <div className={`select-indicator ${isSelected ? 'active' : ''}`}>
            {isSelected && <CheckCircle2 size={24} color="#fff" fill="var(--color-brand)" />}
          </div>
        </div>
      </div>
      <div className="product-details">
        <h3 className="product-brand">{product.brand}</h3>
        <p className="product-name">{product.name}</p>
        <div className="product-price-row">
          <span className="price">₹{product.price}</span>
          {product.originalPrice > product.price && (
            <span className="original-price">₹{product.originalPrice}</span>
          )}
        </div>
        <div className="product-rating">
          <Star size={14} color="var(--color-success)" fill="var(--color-success)" />
          <span className="rating-value">{product.rating}</span>
          <span className="review-count">({product.reviewCount})</span>
        </div>
        {showHelpMeDecide && (
          <button className="btn-hmd-card" onClick={(e) => { e.stopPropagation(); onHelpMeDecide(product); }}>
            <Sparkles size={16} /> Help Me Decide
          </button>
        )}
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Move to Bag
        </button>
      </div>
    </div>
  );
}
