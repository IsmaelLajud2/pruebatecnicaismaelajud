import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { PlaylistData } from '../Types/Playlist.interface'
import { fetchWithAuth } from './getToken';


const fetchPlaylistData = async (playlistId: string): Promise<PlaylistData> => {
  const url = `${import.meta.env.VITE_API_URL}${playlistId}`;
  
  try {
    const response = await fetchWithAuth(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    throw error;
  }

};


const useSpotifyPlaylist = (playlistId: string) => {
  const queryOptions: UseQueryOptions<PlaylistData, Error> = {
    queryKey: ['playlist', playlistId],  
    queryFn: () => fetchPlaylistData(playlistId),
  };

  return useQuery(queryOptions);
};

export default useSpotifyPlaylist;
