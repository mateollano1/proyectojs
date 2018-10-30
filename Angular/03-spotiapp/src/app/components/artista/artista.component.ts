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
  total: string;
  public info: any[] = [];
  constructor(private router: ActivatedRoute,
              private spoti: SpotifyService) { 
    router.params.subscribe((param:any) => {this.id = param.id;});
    spoti.getInfoArtist(this.id).subscribe((par:any) => {this.info = par;
    console.log(this.info);
    this.total = par.followers.total;
    });
    

  }
  ngOnInit() {
  }

}
