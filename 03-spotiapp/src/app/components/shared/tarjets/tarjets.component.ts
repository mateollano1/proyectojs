import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';



@Component({
  selector: 'app-tarjets',
  templateUrl: './tarjets.component.html',
  styleUrls: ['./tarjets.component.css']
})
export class TarjetsComponent implements OnInit {
  @Input() items: any [] = [];
  constructor( private route: Router) { }
  
  obtenerArt(tipo: string, nro: number,nroA: number){
    let id;
    console.log(tipo);
    if(tipo === "artist"){
      id = this.items[nro].id;
    }
    if(tipo === "album"){
      if (nroA=== -1 ){
        // id = this.items[nro].name;
        this.obtenerTitulo();
        return;
      }
      else{
        id = this.items[nro].artists[nroA].id;
      }
    }
    this.route.navigate(["artista",id]);
  }
  obtenerTitulo(){}
  ngOnInit() {
  }

}
