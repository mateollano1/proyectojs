import { Component, OnInit } from '@angular/core';
import { HeroesService, superHeroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private _heroesService: HeroesService,
              private router: Router) {
  }
  // heroes: string[] = ['aquaman', 'batman', 'daredevil', 'hulk', 'linterna verde', 'spiderman'];
  // rutasH: string[] = ['assets/img/aquaman.png', 'assets/img/batman.png'];
  heroes: superHeroe [] = [];

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }
  verHeroe( idx: number ) {
    console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }
}
