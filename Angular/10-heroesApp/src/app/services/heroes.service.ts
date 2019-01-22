import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  url: any = 'https://heroesapp-c982b.firebaseio.com/heroe.json';
  url2: any = 'https://heroesapp-c982b.firebaseio.com/heroe';
  constructor(private http: Http) { }
  saludar() {
    console.log('hola');
  }
  nuevoHeroe(heroe: Heroe) {
    const body = JSON.stringify(heroe);
    const headers = new Headers({
      'content-Type': 'application/json'
    });
    return this.http.post(this.url, body, { headers }).map(res => {
      console.log(res.json());
      return res.json();
    });
  }
  actualizarHeroe(heroe: Heroe, key: string) {
    const body = JSON.stringify(heroe);
    const headers = new Headers({
      'content-Type': 'application/json'
    });
    const urla = `${this.url2}/${key}.json`;
    return this.http.put(urla, body, { headers }).map(res => {
      console.log(res.json());
      return res.json();
    });
  }
  getHeroe(key: string) {
    const urla = `${this.url2}/${key}.json`;
    return this.http.get(urla).map(res => {
      console.log(res.json());
      return res.json(); });
  }
}
