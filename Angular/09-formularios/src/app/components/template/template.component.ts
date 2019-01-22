import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  formas: NgForm;
  constructor() { }

  ngOnInit() {
  }
  guardar (forma: NgForm) {
    console.log('Formulario posteado');
    console.log(forma);
    this.formas = forma;
    console.log(this.formas.controls.nombre.errors.required);
  }
}
