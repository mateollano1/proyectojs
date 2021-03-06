import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  getPeliculas(nombre: string) {
    return this.http.get(`http://www.omdbapi.com/?s=${nombre}&page=1&apikey=f5cb6848`);
  }
  getPeliculaInfo(nombre: string) {
    return this.http.get(`http://www.omdbapi.com/?i=${nombre}&page=1&apikey=f5cb6848`);
  }
}
