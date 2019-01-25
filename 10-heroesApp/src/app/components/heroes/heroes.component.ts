import { Component, OnInit } from '@angular/core';
import { HeroesService } from './../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: any[] = [];
  llave: any;
  constructor(private hero: HeroesService,
    private route: Router) {
    hero.getHeroes().subscribe(res => {
      for (let key$ in res) {
        console.log(res[key$]);
        let h;
        h = res[key$];
        h.key = key$;
        this.heroes.push(h);
      }
      console.log(this.heroes);
    });
  }
  eliminar(i: string) {
    console.log(i);
    const key = this.heroes[i]['key'];
    console.log(key);
    this.hero.deleteHero(key).subscribe(resp => {
      this.spin = '';
      location.reload();
    });
  }
  editar(i: string) {
    console.log('en');
    const key = this.heroes[i]['key'];
    this.route.navigate(['/heroe', key]);
  }
  ngOnInit() {
  }

}
