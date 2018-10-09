import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, superHeroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  hero: any = {};
  // tslint:disable-next-line:no-inferrable-types
  imagen: string = '';
  constructor( private activated: ActivatedRoute,
                private her: HeroesService) {
    this.activated.params.subscribe(params => {
      console.log(params['id']);
      if ( params['id'] > 0) {
        this.hero = this.her.getHeroe(params['id']);
        this.enrutar();
      } else {
        this.hero = this.her.getHeroeBusqueda(params['id']);
        this.enrutar();
      }  } );
  }
  enrutar(): any {
    if ( this.hero.casa === 'DC') {
      this.imagen = 'assets/img/dc.png';
    } else {
      this.imagen = 'assets/img/marvel.jpg';
    }
    return this.imagen;
  }
  ngOnInit() {
  }


}
