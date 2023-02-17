import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './components/component1/component1.component';
import { Directive1Directive } from './directives/directive1.directive';
import { Pipe1Pipe } from './pipes/pipe1.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Directive1Directive,
    Pipe1Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
