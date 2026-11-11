import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <div className="logo">Õpikeskus</div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;