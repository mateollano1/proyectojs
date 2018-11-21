import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'miscelaneos';
  tamano = 20;
  mas() {
    this.tamano = this.tamano + 5;
  }
  menos() {
    this.tamano = this.tamano - 5;
  }
}
