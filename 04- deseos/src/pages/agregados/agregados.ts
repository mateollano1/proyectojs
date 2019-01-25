import { Component } from '@angular/core';
import { DeseosProvider } from '../../providers/deseos/deseos';
import { Lista, ListaItem } from '../../models';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the PendientesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'agregados',
  templateUrl: 'agregados.html'
})
export class AgregadosComponent {
    nuevaT: string = '';
    lista: Lista;
    item: ListaItem;
  constructor(private navp: NavParams) {
      console.log(navp.data);
      this.lista = new Lista(navp.data.titulo);

  }
  agregar() {
      if (this.nuevaT.length === 0) {
          return;
      }
      this.item = new ListaItem(this.nuevaT);
      this.lista.items.push(this.item);
      this.nuevaT = '';
  }
  chulear(list: ListaItem) {
      list.completado = !list.completado;
  }
}