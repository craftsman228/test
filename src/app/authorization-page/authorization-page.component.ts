import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.css']
})
export class AuthorizationPageComponent implements OnInit {

  constructor(private user:UserService, private router:Router) { }

  ngOnInit() {
  }

  loginUser(e){
    var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;

      if (username == 'admin' && password == 'admin'){
                this.user.setUserLoggedIn();
        this.router.navigate(['']);
      }
  }

}
