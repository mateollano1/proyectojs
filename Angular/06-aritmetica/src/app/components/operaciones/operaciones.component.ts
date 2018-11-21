import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent implements OnInit {
  cont = 0;
  cont2 = 1;
  cont3 = 0;
  oper = '+';
  oper2 = '-';
  oper3 = '+';
  operaciones: any [] = ['+', '-', '/', '*'];
  constructor() {
  }
  cambiar() {
    if (this.cont === 3) {
      this.cont = 0;
    } else {
      this.cont = this.cont + 1;
    }
    this.oper = this.operaciones[this.cont];
  }
  cambiar2() {
    if (this.cont2 === 3) {
      this.cont2 = 0;
    } else {
      this.cont2 = this.cont2 + 1;
    }

    this.oper2 = this.operaciones[this.cont2];
  }
  cambiar3() {
    if (this.cont3 === 3) {
      this.cont3 = 0;
    } else {
      this.cont3 = this.cont3 + 1;
    }

    this.oper3 = this.operaciones[this.cont3];
  }
  ngOnInit() {
  }

}

