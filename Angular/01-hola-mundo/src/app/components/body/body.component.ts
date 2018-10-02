import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
  presenta: any = {
    mensaje: 'Las malas conversaciones corrompen las buenas costumbres',
    autor: 'Proverbios'
  };
  idea: string[] = ['mesa', 'silla', 'piso'];
  bandera = true;
  mostrar(): void {
    if (this.bandera) {
      this.bandera = false;
    } else {
      this.bandera = true;
    }
  }
  saludar(): string {
    return ('Hola a todos');
  }}
