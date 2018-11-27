import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthorizationPageComponent } from './authorization-page/authorization-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { RouterModule } from "@angular/router";
import { UserService } from './user.service'
import { AgmCoreModule} from '@agm/core'

import { FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes = [
  {path:'', component: HomePageComponent},
  {path:'authorization', component:AuthorizationPageComponent},
  {path:'about', component: AboutPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AuthorizationPageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBp6g_oEhxiz_kCvPcpSDNmg73wO8QHr4Q'
    })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
