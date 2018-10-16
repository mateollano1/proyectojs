import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nuevos: any [] = [];
  constructor(private spoti: SpotifyService) { 
    this.spoti.getReleases().subscribe((rel:any)=>{this.nuevos=rel.albums.items;
      console.log(this.nuevos);});
  }

  ngOnInit() {
    
  }

}
