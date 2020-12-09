import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBs7YsU4GutpVvZWQKzZ9kAwri5FBS883Ba4q5dkDFM987RlLzR5cGfJwBnivPipuFd2ujW0lXGrf3r-YVEWUCFQNbURlMF1__p_zrUnj490ScOtQshuflFQPF-joRWsFTuNiD_AkrnyNlOjsfBiv3JssoAemHfGO7irCM1hLQcFWrslY337GqcFSychT9NR3xU_BoBJdygi_xmuTjv3nnxZlf3Zb6NignOYUW16E59KDVdK_ubdhU9YYdPVk_psHlRQGIJf-MwfQrg8dfaPJIO_bsgZbsJGI-U'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
