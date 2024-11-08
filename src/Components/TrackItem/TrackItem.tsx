import CartSvg from '../Svg/CartSvg';
import HandShakeSvg from '../Svg/HandShakeSvg';
import HeartSvg from '../Svg/HeartSvg';
import './TrackItemStyles.css';
import React from 'react';

interface TrackItemProps {
  track: {
    album: { images: { url: string }[] };
    artists: { name: string }[];
    added_by?: { id: string };
  };
}

const TrackItem: React.FC<TrackItemProps> = ({ track }) => {
 
  const albumImageUrl = track?.album?.images[0]?.url || '/default-album-image.png';  
  const artistName = track?.artists[0]?.name || 'Unknown Artist';  
  const addedBy = track?.added_by?.id || '@ismaellajud';  // Usuario por defecto

  return (
    <li className='playlist-content'>
      <div className='content-wrapper'>
        <img className='song-imagen' src={albumImageUrl} alt="Cancion-imagen" />
        <p className='artist-name'>{artistName}</p>
        <aside className='username-info'>
          <img src='Images/Avatar.webp' className='user-profile-photo' alt="User Avatar" /> 
          <p className='added-username'>{addedBy}</p>
        </aside>
        <div className='icon-wrapper'>

        <ul className='card-buttons'>
                <li className="icon-button"><HandShakeSvg/></li>
                <li className="icon-button"><CartSvg/></li>
                <li className="icon-button"><HeartSvg/></li>
            </ul>
            </div>
      </div>
    </li>
  );
};

export default TrackItem;
