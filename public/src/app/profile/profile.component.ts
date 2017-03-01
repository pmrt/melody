import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private session = { logged: false, user: { admin: false}, registerFailed: true  };
  private email;
  private address;
  private password;
  private saving = false;
  constructor(private users: UsersService) {
    let body = document.body;
    body.style.backgroundImage = "";
    let footer = document.getElementsByTagName('footer')[0];
    footer.style.display = "none";

    this.users.getSession().subscribe( (session) => {
      this.session = session;
      this.email = session.user.email;
      this.address = session.user.address;
      this.password = session.user.password;
    });
  }

  ngOnInit() {
    this.users.getCurrentSession();
  }

  save() {
    var self = this;
    this.saving = true;
    if ( this.email != '' && this.address != '' && this.password != '') {
      this.users.updateUser( this.email, this.password, this.address )
      // Simulating asynchronous answer
      setTimeout( () => {
        self.saving = false;
      }, 1500);
    }
  }

}
