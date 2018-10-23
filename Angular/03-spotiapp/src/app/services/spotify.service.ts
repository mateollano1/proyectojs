import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  releases: any[] = [];
  key: any [] = [];
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
   ruta = 'BQAFhZuC4s7fWf0PY-_iPSNOD0r75n7Fz1yrPrgwcAO1x3fKuTzVAV7rSiw1amCZCi2vabPuUO2DNOzOw-o';
  getReleases() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.ruta}`
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?country=CO', { headers }).pipe( map((data: any) => {
      return data.albums.items;
    }));
  }
  getArtista (termino: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.ruta}`
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers }).pipe( map( (data: any) => {
      return data.artists.items; }));
  }
}


