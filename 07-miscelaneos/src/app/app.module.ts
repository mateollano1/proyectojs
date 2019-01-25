import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CssComponent } from './components/css/css.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';

@NgModule({
  declarations: [
    AppComponent,
    CssComponent,
    NgclassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
