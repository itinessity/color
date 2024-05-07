import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {PagesModule} from "../pages/pages.module";
import {AppRoutingModule} from "./app.routes";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  exports: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
