import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercicio3Component } from './exercicio3/exercicio3.component';
import { Exercicio1Component } from './exercicio1/exercicio1.component';
import { Exercicio2Component } from './exercicio2/exercicio2.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercicio1Component,
    Exercicio2Component,
    Exercicio3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
