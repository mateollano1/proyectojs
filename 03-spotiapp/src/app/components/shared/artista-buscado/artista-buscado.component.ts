import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artista-buscado',
  templateUrl: './artista-buscado.component.html',
  styleUrls: ['./artista-buscado.component.css']
})
export class ArtistaBuscadoComponent implements OnInit {
@Input() items: any [] = [];
total: string;
  constructor() {
  }

  ngOnInit() {
  }

}
