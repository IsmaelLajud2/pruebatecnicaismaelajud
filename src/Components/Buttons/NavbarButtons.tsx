import '../Nav/NavbarStyles.css'
import HomeSvg from '../Svg/HomeSvg'
const NavbarButtons = () => {

  const navbutton=[
    
      {
        title:"Descubrir"
      },
      {
        title:"Favoritos"
      },
      {
        title:"Subir Obra"
      },
      {
        imagen:"Images/Avatar.webp"
      }
  ]

  return (
    <div className='button-container'>
    <ul className="navlist">
        <li className="item-navlist"><span className='home-svg'><HomeSvg/> </span> Home</li>
        {
          navbutton.map((item,i) =>(
            <li key={i} className='item-navlist'>{item.title}
            {
              item.imagen ? 
              <img  src={item.imagen}  className='avatar-img' alt='avataruser-profile-imagen'></img>
            :<></>}
            </li>
            
          ))
        }
      
    </ul>
</div>
  )
}

export default NavbarButtons