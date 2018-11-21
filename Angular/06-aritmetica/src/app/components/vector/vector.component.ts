import { Component, OnInit, Injectable } from '@angular/core';
import { AritmeticaService } from '../../services/aritmetica.service';
import { AritmeticaComponent } from '../aritmetica/aritmetica.component';


@Component({
  selector: 'app-vector',
  templateUrl: './vector.component.html',
  styleUrls: ['./vector.component.css']
})


export class VectorComponent implements OnInit {
  cont = 3;
  cont2 = 0;
  oper = '*';
  oper2 = '+';
  numero: number;
  operaciones: any [] = ['+', '-', '/', '*'];
  resultados: ResultadoLinea [] = [];
  constructor(private arit: AritmeticaService) {
    //arit.esperar();
    this.calcular();
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
  ngOnInit() {
  }
  calcular() {
    let parcial;
    const resultado =  this.numero;
    console.log(resultado);
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        for (let c = 1; c < 10; c++) {
          parcial = this.verificarA(a, b);
          parcial = this.verificarB(parcial, c);
          if (parcial === resultado && a !== b && b !== c) {
            const res = new ResultadoLinea( a, b, c);
            this.resultados.push(res);
          }
        }
      }
    }
    console.log(this.resultados);
  }
  verificarA(a, b) {
    if (this.oper === '*') {
      a = a * b;
    }
    if (this.oper === '+') {
      a = a + b;
    }
    if (this.oper === '-') {
      a = a - b;
    }
    if (this.oper === '/') {
      a = a / b;
    }
    return a;
  }
  verificarB(a, b) {
    if (this.oper2 === '*') {
      a = a * b;
    }
    if (this.oper2 === '+') {
      a = a + b;
    }
    if (this.oper2 === '-') {
      a = a - b;
    }
    if (this.oper2 === '/') {
      a = a / b;
    }
    return a;
  }
  listar(d: string) {
  this.numero = Number(d);
  }
  borrar () {
    for (let i = 0; i <= this.resultados.length; i++) {
      this.resultados.pop();
    }
  }

}


class ResultadoLinea {
  a: number;
  b: number;
  c: number;
  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

}
