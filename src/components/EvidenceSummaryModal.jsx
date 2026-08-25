import React from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import './EvidenceSummaryModal.css';

export default function EvidenceSummaryModal({ product, onClose, onCompare }) {
  if (!product) return null;

  const handleClose = () => {
    onClose();
  };

  const handleCompare = () => {
    onCompare(product);
  };

  return (
    <div className="evidence-modal-overlay">
      <div className="evidence-modal">
        <div className="evidence-modal-header">
          <div className="header-title-ai">
            <Sparkles size={20} color="var(--color-brand)" />
            <h2>AI Evidence Summary</h2>
          </div>
          <button className="btn-close-modal" onClick={handleClose}>
            <X size={24} />
          </button>
        </div>
        <div className="evidence-content">
          <div className="evidence-product-info">
            <img src={product.image} alt={product.name} className="evidence-img" />
            <div>
              <h3>{product.brand}</h3>
              <p>{product.name}</p>
              <div className="price-tag">₹{product.price}</div>
            </div>
          </div>
          <div className="evidence-ai-box">
            <p className="ai-text">{product.aiEvidence}</p>
          </div>
        </div>
        <div className="evidence-actions">
          <button className="btn-primary-action" onClick={handleCompare}>
            Compare with others <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
