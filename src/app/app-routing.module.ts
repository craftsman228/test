import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorizationPageComponent} from "./authorization-page/authorization-page.component";
import {AboutPageComponent} from "./about-page/about-page.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes = [
  {path:'', component: HomePageComponent},
  {path:'authorization', component:AuthorizationPageComponent},
  {path:'about', component: AboutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
