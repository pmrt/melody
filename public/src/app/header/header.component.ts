import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CartService } from '../shared/cart.service';

import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  private cartCount = 0;
  private session = { logged: false, user: { admin: false}, registerFailed: true  };
  @Output() showCart = new EventEmitter<any>();
  constructor(private cs: CartService, private users: UsersService ) {
    this.cs.getCart().subscribe( ( cart )=> this.cartCount = cart.length );

    this.users.getSession().subscribe( (session) => {
      this.session = session;
    });
  }

  ngOnInit() {
  }

  show() {
    this.showCart.emit( null );
  }

  logout() {
    this.users.logOut();
  }

}
