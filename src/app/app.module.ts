import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoOneComponent } from './demo-one/demo-one.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MaterialModule ],
  declarations: [ AppComponent, HelloComponent, DemoOneComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
