import  { useState,useCallback } from 'react';
import NavbarButtons from '../Buttons/NavbarButtons';
import './NavbarStyles.css';
import HamburgerMenu from '../Buttons/HamburguerMenu';

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu =useCallback( () => {
    setMenuOpen(prevState => !prevState);
  },[]);

  return (
    <header className="header-nav">
      <div className="logo-container">
        <img className="logo-nav" src={'../Images/LogoPolygon.webp'} alt="Logo" />
      </div>
   <HamburgerMenu menuOpen={menuOpen} toggleMenu={toggleMenu}/>
      
      <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <NavbarButtons />
      </div>
    </header>
  );
};

export default Navbar;
