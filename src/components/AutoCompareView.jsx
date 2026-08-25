import React, { useEffect } from 'react';
import { Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import './AutoCompareView.css';
import { trackEvent } from '../utils/analytics';

export default function AutoCompareView({ items, onProductSelect, onBack }) {
  useEffect(() => {
    trackEvent('trade_offs_viewed', { itemIds: items.map(i => i.id) });
  }, [items]);

  const bestPick = items.reduce((prev, curr) => (prev.rating > curr.rating) ? prev : curr);

  return (
    <div className="auto-compare-view">
      <div className="compare-header">
        <button className="btn-back" onClick={onBack}><ChevronLeft size={20}/> Back</button>
      </div>

      <div className="tradeoffs-banner">
        <div className="tradeoffs-content">
          <ul className="tradeoffs-list">
            {items.map(item => (
              <li key={item.id}><strong>{item.brand}:</strong> {item.aiTradeOffs}</li>
            ))}
          </ul>
          <div className="best-pick-callout">
            <span className="bp-badge">Best Pick</span>
            <strong>{bestPick.brand} {bestPick.name}</strong> (Highest overall rating of {bestPick.rating})
          </div>
        </div>
      </div>

      <div className="compare-list">
        {items.map(item => (
          <div key={item.id} className="compare-list-item" onClick={() => onProductSelect(item)}>
            <img src={item.image} alt={item.name} />
            <div className="compare-item-info">
              <h4>{item.brand}</h4>
              <p>{item.name}</p>
              <span className="price">₹{item.price}</span>
            </div>
            <div className="select-action">
              View Details <ChevronRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
