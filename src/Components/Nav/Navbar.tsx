import NavbarButtons from '../Buttons/NavbarButtons'
import './NavbarStyles.css'


const Navbar = () => {
  return (
    <header className='header-nav'>
        <div className='logo-container'>
<img className='logo-nav' src={'../Images/LogoPolygon.webp'}></img>
        </div>
        <NavbarButtons/>
    </header>
  )
}

export default Navbar