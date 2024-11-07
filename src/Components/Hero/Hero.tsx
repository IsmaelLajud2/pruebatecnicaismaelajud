import './HeroStyles.css'
const Hero = () => {
  return (
    <section className='membership-section'>
          <div className='membership-text'>
              <aside className='membership-title'>
               <h1 className='membership-h1'>Membresía <br/>Premium </h1> 
              </aside>
              <aside className='membership-button'>
                <button className='suscribe-button'>Suscribirse</button>
                <button className='find-plan-button'>Descubrir planes</button>
              </aside>
          </div>
          <div className='membership-imagen-container'>
            <img className='client-imagen' alt='womanwithheadphones' src='Images/ClientGirl.webp'></img>
          </div>
    </section>
  )
}

export default Hero
