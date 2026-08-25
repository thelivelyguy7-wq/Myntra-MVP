import React from 'react';
import { Heart } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <span className="myntra-brand">Myntra</span>
      </div>
      <div className="header-title">
        <Heart size={18} color="var(--color-brand)" fill="var(--color-brand)" />
        <h2>My Wishlist</h2>
      </div>
    </header>
  );
}
