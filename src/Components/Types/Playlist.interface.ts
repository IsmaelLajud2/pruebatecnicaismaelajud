
export interface SpotifyImage {
    url: string;
    height: number;
    width: number;
  }
  
  export interface SpotifyArtist {
    name: string;
  }
  
  export interface SpotifyAlbum {
    images: SpotifyImage[];
  }
  
  export interface AddedBy {
    id: string;
  }
  
  export interface Track {
    name: string;
    artists: SpotifyArtist[];
    album: SpotifyAlbum;
  }
  
  export interface PlaylistTrackItem {
    track: Track;
    added_by: AddedBy | null;
  }
  
  export interface PlaylistData {
    name: string;
    images: SpotifyImage[];
    tracks: {
      items: PlaylistTrackItem[];
      next: string | null;
    };
  }
  
  