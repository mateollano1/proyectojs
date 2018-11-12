import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PendientesComponent } from '../pendientes/pendientes';
import { TerminadosPage } from '../terminados/terminadosPage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesComponent;
  tab2Root = TerminadosPage;

  constructor() {

  }
}
