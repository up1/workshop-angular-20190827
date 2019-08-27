import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { XxPipe } from './xx.pipe';
import { ShowComponent } from './show/show.component';
import { Show2Component } from './show2.component';

@NgModule({
  declarations: [
    AppComponent,
    XxPipe,
    ShowComponent,
    Show2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
