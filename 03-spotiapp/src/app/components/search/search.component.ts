import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artistas: any [] = [];
  constructor(private http: HttpClient,
              private spoti: SpotifyService) { }
  buscar( termino: string) {
    console.log(termino);
    this.spoti.getArtista(termino).subscribe((term: any) => this.artistas = term);
    console.log(this.artistas);
  }
  ngOnInit() {
  }

}
