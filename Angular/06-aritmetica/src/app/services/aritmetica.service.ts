import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AritmeticaService {
  espera = true;
  constructor() { }
  getRespuesta() {
    this.espera = false;
   }
  esperar() {
    while (this.espera) {

    }
  }
  recibirInfo(a: number, b: number, c: number) {

  }
}
