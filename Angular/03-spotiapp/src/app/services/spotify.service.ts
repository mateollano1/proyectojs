import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  releases: any[] = [];
  key: any [] = [];
  ruta = 'BQDip84all14xx7Qdo1UcNZeQfeZUgKaCb6_Ab8CuSvEBRpMB6hLygKJJIunXs5J_O_UT_ktXA7j8d16VcQ';
  constructor(private http: HttpClient) {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // });
    // const body = new HttpHeaders({
    //   'grant_type': 'client_credentials',
    //   'client_id': '3286a9d42ff246459a12786754ba98e4',
    //   'client_secret': 'e94255e1784a43cbbcba400058cd0339'
    // });
    // this.http.post('https://accounts.spotify.com/api/token', {headers}).subscribe((par: any) => this.key = par);
    // console.log(this.key);
   }
   getquery(query: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.ruta}`
    });
    const url = `https://api.spotify.com/v1/${query}`;
    console.log(url);
    return this.http.get(url, { headers });
   }
  getReleases() {
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${this.ruta}`
    // });
    // return this.http.get(`https://api.spotify.com/v1/browse/new-releases?`, { headers })
    return this.getquery( `browse/new-releases?` ).pipe( map((data: any) => {
      return data.albums.items;
    }));
  }
  getArtista (termino: string) {
    return this.getquery(`search?q=${termino}&type=artist&limit=15`).pipe( map( (data: any) => {
      return data.artists.items; }));
  }
  getReleasesPais(pais: string) {
    return this.getquery(`browse/new-releases?country=${pais}`).pipe( map((data: any) => {
      return data.albums.items;
    }));
  }
  getInfoArtist(id: string) {
    return this.getquery(`artists/${id}`).pipe( map((data: any) => {
      // console.log(data);
      return data;
    }));
  }
  getExitos(id: string) {
    return this.getquery(`artists/${id}/top-tracks?country=CO`).pipe( map((data: any) => {
      // console.log(data);
      return data;
    }));
  }
}


