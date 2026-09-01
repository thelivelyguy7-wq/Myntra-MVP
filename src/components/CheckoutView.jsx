import React from 'react';
import { ChevronLeft, CheckCircle2, ChevronRight } from 'lucide-react';
import './CheckoutView.css';

export default function CheckoutView({ product, onPlaceOrder, onBack }) {
  const deliveryFee = 0;
  const platformFee = 20;

  return (
    <div className="checkout-view">
      <div className="checkout-header">
        <button className="btn-back" onClick={onBack}><ChevronLeft size={20} /> Back</button>
      </div>

      <div className="checkout-section delivery-address">
        <div className="address-header">
          <h4>Deliver to: <span className="address-name">John Doe</span></h4>
          <span className="address-tag">HOME</span>
        </div>
        <p className="address-text">123 Fashion Street, Trendy Layout, Style City, 560001</p>
        <button className="btn-change-address">Change <ChevronRight size={14} /></button>
      </div>

      <div className="checkout-section item-summary">
        <div className="item-card">
          <img src={product.image} alt={product.name} />
          <div className="item-details">
            <h4>{product.brand}</h4>
            <p>{product.name}</p>
            <div className="item-meta">
              <span>Size: M</span>
              <span>Qty: 1</span>
            </div>
            <div className="item-price-row">
              <span className="price-bold">₹{product.price}</span>
            </div>
            <div className="return-policy">
              <CheckCircle2 size={12} color="var(--color-success)" /> 14 days return available
            </div>
          </div>
        </div>
      </div>

      <div className="checkout-section price-details">
        <h4>Price Details (1 Item)</h4>
        <div className="price-row">
          <span>Item Total</span>
          <span>₹{product.price}</span>
        </div>
        <div className="price-row">
          <span>Platform Fee</span>
          <span>₹{platformFee}</span>
        </div>
        <div className="price-row">
          <span>Shipping Fee</span>
          <span className="free">FREE</span>
        </div>
        <div className="price-row total">
          <span>Total Amount</span>
          <span>₹{product.price + platformFee}</span>
        </div>
      </div>

      <div className="checkout-actions">
        <div className="total-display">
          <span className="total-label">₹{product.price + platformFee}</span>
          <span className="total-sub">View Details</span>
        </div>
        <button className="btn-place-order" onClick={() => onPlaceOrder(product)}>
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}
