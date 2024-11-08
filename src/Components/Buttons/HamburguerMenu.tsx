import React from 'react';

interface HamburgerMenuProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ menuOpen, toggleMenu }) => (
  <button className="hamburger-button" onClick={toggleMenu}>
    <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
    <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
    <span className={`hamburger-line ${menuOpen ? 'open' : ''}`}></span>
  </button>
);

export default HamburgerMenu;  
