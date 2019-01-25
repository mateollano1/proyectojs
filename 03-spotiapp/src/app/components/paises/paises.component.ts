import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  paises:any [] =[];
  band: boolean = false;
  constructor(private http: HttpClient,
              private spoti: SpotifyService) {
    
    
   }
   
mostrarInfo(forma:any){
    // let ruta;
    // if (forma === 'es'){ruta= 'https://restcountries.eu/rest/v2/lang/es' }
    // else if (forma === 'in'){ruta= 'https://restcountries.eu/rest/v2/lang/en'}
    // else {ruta= 'https://restcountries.eu/rest/v2/lang/fr'}
    // this.http.get(ruta).subscribe((par:any)=>{this.paises=par;
    // console.log(this.paises);});
    // console.log(forma);
    this.spoti.getReleasesPais(forma).subscribe((param: any) => {this.paises = param});
    console.log(this.paises);
    this.band = true;
}
  ngOnInit() {
  }

}
