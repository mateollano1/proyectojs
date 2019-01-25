import { Component, OnInit } from '@angular/core';
import { AritmeticaService } from '../../services/aritmetica.service';


@Component({
  selector: 'app-aritmetica',
  templateUrl: './aritmetica.component.html',
  styleUrls: ['./aritmetica.component.css']
})
export class AritmeticaComponent implements OnInit {

  constructor(private arit: AritmeticaService) { }
  resolver () {
  this.arit.getRespuesta();
  }
  ngOnInit() {
  }

}
