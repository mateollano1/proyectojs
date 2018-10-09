import { Component, OnInit } from '@angular/core';
import { HeroesService, superHeroe} from '../../../services/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private hero: HeroesService,
                private router: Router) { }
  heroes: superHeroe [] = [];
  ngOnInit() {
  }
  enviarTexto( termino: string) {
        this.heroes = this.hero.getBusqueda(termino);
  }
  getBusqueda() {
    return this.heroes;
  }
  verBusqueda( idx: string ) {
    console.log(idx);
    this.router.navigate(['/busqueda', idx]);
  }
}
