import { Component } from '@angular/core';
import { DeseosProvider } from '../../providers/deseos/deseos';
import { Lista } from '../../models';
import { NavController } from 'ionic-angular';
import { AgregadosComponent } from '../agregados/agregados';
import { AlertController } from 'ionic-angular';

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
  
  constructor(public deseos: DeseosProvider,
    private nav: NavController,
    private alert: AlertController) {
  }
  obtenerLista(lista: Lista) {
    console.log(lista);
  }
  mostrarAlerta() {
    const prompt = this.alert.create({
      title: 'Nueva tarea',
      message: "Ingrese una nueva tarea: ",
      inputs: [
        {
          name: 'tarea',
          placeholder: 'Tarea'
        },
      ],
      buttons: [
        {
          text: 'cancelar',

        },
        {
          text: 'Guardar',
          handler: data => {
            if (data.tarea.length === 0) {
              return;
            }
            console.log(data);
            this.nav.push(AgregadosComponent, {
              titulo: data.tarea
            });
          }
        }
      ]
    });
    prompt.present();
  }

}
