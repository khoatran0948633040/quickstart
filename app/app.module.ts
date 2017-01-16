import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetaiComponent } from './hero-detail.component';

@NgModule({
  imports: [ 
      BrowserModule ,
      FormsModule
    ],

  declarations: [ 
      AppComponent ,
      HeroDetaiComponent
    ],

  bootstrap:    [ AppComponent ]
})

export class AppModule { }
