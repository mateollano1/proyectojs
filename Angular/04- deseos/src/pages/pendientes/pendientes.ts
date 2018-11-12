import { Component } from '@angular/core';
import { DeseosProvider } from '../../providers/deseos/deseos';

/**
 * Generated class for the PendientesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pendientes',
  templateUrl: 'pendientes.html'
})
export class PendientesComponent {

  constructor( public deseos: DeseosProvider) {
  }

}
