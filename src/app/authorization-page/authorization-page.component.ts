import {Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {Router, RouterModule} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.css']
})
export class AuthorizationPageComponent implements OnInit {

  constructor(private user:UserService, private router:Router) { }

  authForm : FormGroup;

  ngOnInit() {
    this.authForm = new FormGroup({
      username : new FormControl(),
        password : new FormControl()
    });
  }

  loginUser(username, password){
    username = this.authForm.controls.username.value;
    password = this.authForm.controls.password.value;

      if (username == 'admin' && password == 'admin'){
                this.user.setUserLoggedIn(true);
        this.router.navigate(['']);
      }
  }

}
