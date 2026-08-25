import React from 'react';
import { ArrowRight, X } from 'lucide-react';

export default function CompareActionBar({ compareItems, onClear, onCompare }) {
  if (compareItems.length === 0) return null;

  return (
    <div className="compare-action-bar">
      <div className="compare-content">
        <div className="compare-info">
          <span className="count-badge">{compareItems.length}</span>
          <span className="compare-text">
            {compareItems.length === 1 
              ? 'Select at least 1 more item to compare' 
              : 'Items selected for comparison'}
          </span>
        </div>
        <div className="compare-actions">
          <button className="btn-clear" onClick={onClear}>
            <X size={16} /> Clear
          </button>
          <button 
            className="btn-compare" 
            disabled={compareItems.length < 2}
            onClick={onCompare}
          >
            Compare <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
