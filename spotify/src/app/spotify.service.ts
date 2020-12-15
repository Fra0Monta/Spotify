import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({Authorization: environment.oauthToken});
({
      Authorization:
        'BQAKqsRWUXvgr_snuzSx5qe2BYjuiLL8kkiL_-pxMydf5TUg0oASV51tDwKvZi9v5b8zK0g-Wka5YgsMrcGUT7f4yo2WPzt8yQ-5X-42nWstwuEUbE1zTB0DBIKc0DEMGLo75Q-tTjUWHScVl0-yMkFE6ldrfZPsKi_T9olkGf3-BFGryuEFpf0J4PfJPjf07w7a_7KnXURhdKlSnWaycw2BEkDKXWWuS_kNNuJnCMo9ALZsz3ns70gdft2LDKL6UvqlrUADj7hbRARpl3WzYmJ-YmVHyNR0gjn-'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;

  }
}
