import CardMusic from './CardMusic'
import './CardStyles.css'
const Cards = () => {
  return (
    <section className='music-section'>
        <div className='filters-container'>
        <aside className='title-filter'>
            <h2>Obras desctacadas</h2>
        </aside>
        <aside className='filter-section'>
                <ul className='filter-list'>
                    <li className='filter-list-item'>Music</li>
                    <li className='filter-list-item'>Collectibles</li>
                    <li className='filter-list-item'> Utility</li>
                </ul>
        </aside>
        </div>
     
        <div>
            <CardMusic/>
        </div>
    </section>
  )
}

export default Cards