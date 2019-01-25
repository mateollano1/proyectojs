import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from './../../interfaces/heroe.interface';
import { HeroesService } from './../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: ''
  };
  idM: string;

  constructor(private hero: HeroesService,
    private router: Router,
    private route: ActivatedRoute) {
    route.params.subscribe(par => {
      this.idM = par.id;
      if (this.idM !== 'nuevo') {
        this.hero.getHeroe(this.idM).subscribe(her => { this.heroe = her; });

      }
    });
  }
  ngOnInit() {
  }
  nuevoH() {
    this.heroe = {
      nombre : '',
      bio : '',
      casa : ''
    };
  }
  guardar() {
    if (this.idM === 'nuevo') {
      console.log(this.heroe);
      this.hero.nuevoHeroe(this.heroe).subscribe(data => {
        this.router.navigate(['/heroe', data.name]);
      });
    } else {
      this.hero.actualizarHeroe(this.heroe, this.idM).subscribe(par => {
        console.log('fin');

      });
    }

  }

}
