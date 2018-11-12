import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
peliculas: any [] = [];
  constructor(private movie: MovieService,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
  }
  buscar(palabra: string) {
    console.log(palabra);
    this.movie.getPeliculas(palabra).subscribe((movies: any) => { console.log(movies);
    this.peliculas = movies.Search;
    console.log(this.peliculas); });
  }
  navegar (ruta: string) {
    this.router.navigate(['/pelicula', ruta]);
  }

}
