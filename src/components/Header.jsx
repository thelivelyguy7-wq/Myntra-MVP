import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png" alt="Myntra Logo" className="myntra-logo-img" />
        <span className="myntra-brand">Wishlist</span>
      </div>
      <div className="header-right">
        <Heart size={20} className="header-icon" fill="var(--color-brand)" color="var(--color-brand)" />
        <ShoppingBag size={20} className="header-icon" />
      </div>
    </header>
  );
}
