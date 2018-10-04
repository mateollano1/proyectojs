import { Component, OnInit } from '@angular/core';
import { HeroesService, superHeroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private _heroesService: HeroesService) {
  }
  // heroes: string[] = ['aquaman', 'batman', 'daredevil', 'hulk', 'linterna verde', 'spiderman'];
  // rutasH: string[] = ['assets/img/aquaman.png', 'assets/img/batman.png'];
  heroes: superHeroe [] = [];
  // muestraHeroe (in:any) {
  //       //console.log( in );
  // }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }
}
