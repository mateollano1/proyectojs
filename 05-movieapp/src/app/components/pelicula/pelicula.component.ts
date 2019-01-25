import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';



@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  pelicula: any[] = [];
  rating: any;
  miVec: any [] = ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star'];
  constructor(private route: ActivatedRoute,
    private movie: MovieService) {
    this.route.params.subscribe(param => {
      console.log(param['pel']);
      movie.getPeliculaInfo(param['pel']).subscribe((params: any) => {
      this.pelicula = params;
        console.log(this.pelicula);
        this.rating = this.pelicula['imdbRating'] / 2;
        console.log(this.rating);
        console.log(this.miVec);
        this.llenar(this.rating - 1);
      });

    });
  }
llenar(nro: any) {
  for ( let k = 0; k < nro ; k++) {
    this.miVec[k] = 'fas fa star checked';
  }
  console.log(this.miVec);
}
  ngOnInit() {
  }

}
