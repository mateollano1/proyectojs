
import { Injectable } from '@angular/core';
import { Lista } from '../../models/lista.models';

/*
  Generated class for the DeseosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeseosProvider {
  
  listas: Lista[] = [];
  constructor() {
    const lista1 = new Lista("primera tarea");
    const lista2 = new Lista("segunda tarea");
    this.listas.push(lista1,lista2);
    console.log(this.listas);
  }
 
}
