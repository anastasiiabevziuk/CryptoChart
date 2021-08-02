import React from 'react';
import './Footer.css';

function Footer() {
  const date = new Date();
  return (
    <div className='wrapper'>
      <footer>
        <p>2017 - {date.getFullYear()}</p>
      </footer>
    </div>
  );
}

export default Footer;