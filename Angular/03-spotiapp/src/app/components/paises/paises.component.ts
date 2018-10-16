import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  paises:any [] =[];
  band: boolean = false;
  constructor(private http: HttpClient) {
    
    
   }
   
mostrarInfo(forma:any){
    let ruta;
    if (forma === 'es'){ruta= 'https://restcountries.eu/rest/v2/lang/es' }
    else if (forma === 'in'){ruta= 'https://restcountries.eu/rest/v2/lang/en'}
    else {ruta= 'https://restcountries.eu/rest/v2/lang/fr'}
    this.http.get(ruta).subscribe((par:any)=>{this.paises=par;
    console.log(this.paises);});
    console.log(forma);
    this.band = true;
}
  ngOnInit() {
  }

}
