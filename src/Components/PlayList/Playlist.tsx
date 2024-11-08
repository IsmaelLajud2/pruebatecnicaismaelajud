import React from 'react';
import useSpotifyPlaylist from '../hooks/useSpotifyPlaylist';
import './PlayListStyles.css';
import LoadingSpinner from '../Loading/LoadingSpinner';
import TrackItem from '../TrackItem/TrackItem';
import { PlaylistTrackItem } from '../Types/Playlist.interface';

interface PlaylistProps {
  playlistId: string;
 
}

const Playlist: React.FC<PlaylistProps> = ({ playlistId}) => {
  const { data, error, isLoading, isError } = useSpotifyPlaylist(playlistId);

  if (isLoading) return <LoadingSpinner />;

  if (isError && error instanceof Error) {
    return <div style={{color:"red" ,fontWeight:"bold"}}>{`Error: ${error.message}`}</div>};

 
  const limitedTracks = data?.tracks.items.slice(0, 5);

  return (
    <section className='playlist-container'>
      <ul className="playlist-list">
        {limitedTracks?.map((trackItem: PlaylistTrackItem, index: number) => (
          <TrackItem key={index} track={trackItem.track} />
        ))}
      </ul>
    </section>
  );
};

export default Playlist;
