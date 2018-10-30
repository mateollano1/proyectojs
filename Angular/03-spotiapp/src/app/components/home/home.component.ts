import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nuevos: any[] = [];
  loading: boolean;
  constructor(private spoti: SpotifyService) {
    this.loading = true;
    this.spoti.getReleases().subscribe((rel: any) => {
    this.nuevos = rel;
      console.log(this.nuevos);
      this.loading = false;
    });
  }

  ngOnInit() {

  }

}
