import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SimplemdeModule } from 'ngx-simplemde';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, SimplemdeModule.forRoot({}) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
