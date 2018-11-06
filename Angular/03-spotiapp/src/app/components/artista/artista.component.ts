import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  id: string;
  load: boolean;
  load2: boolean;
  exitos: any [] = [];
  public info: any[] = [];
  constructor(private router: ActivatedRoute,
              private spoti: SpotifyService) {
    this.load = false;
    this.load2 = false;
    router.params.subscribe((param: any) => {this.id = param.id; });
  this.getArtist(this.id);
  this.getExitos(this.id);
  }
  ngOnInit() {
  }
  getArtist(id: string) {
    this.spoti.getInfoArtist(this.id).subscribe(
      (par: any) => {this.info = par;
        this.load = true;
      });
  }
  getExitos(id: string) {
      this.spoti.getExitos(this.id).subscribe((para: any) => {this.exitos = para.tracks;
        this.load2 = true;
      console.log(this.exitos); });
  }
}
