import {SpotifyTokenResponse} from '../Types/Auth.interface'



    let accessToken: string | null = null;
    
    // Function to request a new access token
    const getNewAccessToken = async (): Promise<string> => {
      const clientId = import.meta.env.VITE_API_CLIENTID;
      const clientSecret = import.meta.env.VITE_API_CLIENTSECRET;
      const authHeader = btoa(`${clientId}:${clientSecret}`); 
    
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          Authorization: `Basic ${authHeader}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "grant_type=client_credentials",
      });
    
      if (!response.ok) throw new Error("Failed to fetch access token");
    
      const data: SpotifyTokenResponse = await response.json();
      accessToken = data.access_token;
      return accessToken;
    };   
    
    export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
        // If no token, get a new one
        if (!accessToken) {
          await getNewAccessToken();
        }
      
        // Add the authorization header with the token
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${accessToken}`,
        };
      
        let response = await fetch(url, options);
      
        // If response is unauthorized, try to get a new token and retry
        if (response.status === 401) {
          await getNewAccessToken(); // Get a new access token
          options.headers = {
            ...options.headers,
            Authorization: `Bearer ${accessToken}`,
          }; // Update the header
          response = await fetch(url, options); // Retry the request
        }
      
        return response;
      };


