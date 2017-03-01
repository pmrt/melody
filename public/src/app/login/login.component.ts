import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';

import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email = '';
  private password = '';
  private session = { logged: false, user: { admin: false}, registerFailed: true  };
  constructor( private users: UsersService, private router: Router ) {
    let body = document.body;
    let footer = document.getElementsByTagName('footer')[0];
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundImage = "url('/img/bg.png')";
    footer.style.display = "none";

    this.users.getSession().subscribe( (session) => {
      this.session = session;
    });
  }

  ngOnInit() {
  }

  emptyFields() {
    this.email = '';
    this.password = '';
  }

  login() {
    this.users.logIn( this.email, this.password );
    this.emptyFields();
    this.router.navigateByUrl('/');
  }

  register() {
    var email = this.email,
        password = this.password;
    if ( email != '' && password != '' ) {
      this.users.createUser( email, password );
      this.emptyFields();
    }
    var dialog = document.getElementById('register');
    dialog.style.opacity = '1';
    dialog.style.visibility = 'initial';
  }

}
