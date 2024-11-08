import Playlist from '../PlayList/Playlist'
import './CardStyles.css'


const optionMenu :string[]= [
    "Music",
    "Collectibles",
    "Utility"
]

const Cards :React.FC = () => {

    const playlistId:string=import.meta.env.VITE_API_PLAYLISTID || ""
   
    if (!playlistId) {
        return (
          <div style={{ color: "red", fontWeight: "bold" }}>
            Error: La información de la playlist o el token no está disponible.
          </div>
        );
      }
  return (
    <section className='music-section'>
        <div className='filters-container'>
        <aside className='title-filter'>
            <h2>Obras desctacadas</h2>
        </aside>
        <aside className='filter-section'>
                <ul className='filter-list'>
                    {
                    optionMenu.map((opt,index) =>(

                        <li key={index} className='filter-list-item'>{opt}</li>
                    ))

                    }
                 
                </ul>
        </aside>
        </div>
     
        <div>
            <Playlist playlistId={playlistId} />
        </div>
      
    </section>
  )
}

export default Cards