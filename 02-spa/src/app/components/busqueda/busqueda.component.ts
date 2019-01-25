import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  hero: any [] = [];
  palabra: any = '';
  constructor( private router: Router,
    private activated: ActivatedRoute,
    private her: HeroesService) {
    this.activated.params.subscribe(params => { this.hero = this.her.getBusqueda(params['id']);
    this.palabra = params['id'];
    });
  }
  verHeroe( idx: number ) {
    this.router.navigate(['/heroe', (idx * -1)]);
  }
  ngOnInit() {
  }

}
