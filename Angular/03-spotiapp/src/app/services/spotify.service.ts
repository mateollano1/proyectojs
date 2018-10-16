import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  releases: any[] = [];
  
  constructor(private http: HttpClient) { }
  getReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBtfCxd8m3P5EkoEyW22b4jpB2GUY-xl9_MOVhrks0vekq9HD3EyNLiqu-0m8pnSW-Odd5OLCi0WUJWAjA'
    });
    return this.http.get('	https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}


