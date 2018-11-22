import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import {AppComponent} from "../app.component";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']

})

export class HomePageComponent implements OnInit {

  lat:  51.678418;
  lng:  7.809007;

  constructor() { }

  ngOnInit() {
  }

}
