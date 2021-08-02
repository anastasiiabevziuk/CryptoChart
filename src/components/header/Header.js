import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
        <a href="#default" className="logo">Logo</a>
        <a className="headerRight" href="#login">Log in</a>
    </div>
  );
}

export default Header;