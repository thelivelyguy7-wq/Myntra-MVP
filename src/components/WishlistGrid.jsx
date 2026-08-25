import React from 'react';
import ProductCard from './ProductCard';

export default function WishlistGrid({ items, compareItems, onToggleCompare, onHelpMeDecide }) {
  return (
    <div className="wishlist-grid">
      {items.map((product, index) => {
        const isSelected = compareItems.some(item => item.id === product.id);
        return (
          <ProductCard 
            key={product.id} 
            product={product} 
            isSelected={isSelected}
            onToggleSelect={() => onToggleCompare(product)}
            showHelpMeDecide={index === 0}
            onHelpMeDecide={onHelpMeDecide}
          />
        );
      })}
    </div>
  );
}
