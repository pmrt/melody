import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { ProductService } from '../shared/product.service';

// In a real case, this component should
// send the current identified user with every
// get request to avoid normal users to get sensible data

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private userList;
  private products;
  private name;
  private image;
  private desc;
  private price;
  private sale;
  private stock;
  private session = { logged: false, user: { admin: false}, registerFailed: true  };
  private removingMsg = false;
  private userRemovingMsg = false;
  constructor(private users: UsersService, private ps: ProductService) {
    let body = document.body;
    body.style.backgroundImage = "";

    this.refreshProducts();
    this.refreshUsers();

    this.users.getSession().subscribe( (session) => {
      this.session = session;
    });
  }

  ngOnInit() {
    this.users.getCurrentSession();
  }

  refreshProducts() {
    this.ps.getProducts().subscribe( ( result )=> {
        this.products = result.json().products;
    });
  }

  refreshUsers() {
    this.users.getUsers().subscribe( list  => {
      this.userList = list.json().users;
    });
  }

  addProduct() {
    let self = this;
    if ( !this.emptyInputs() ) {
      this.ps.newProduct(this.name, this.image, this.desc, this.price, this.sale, this.stock);
      setTimeout(function() {
        self.refreshProducts();
      }, 2000);
      this.name = '';
      this.image = '';
      this.desc = '';
      this.price = '';
      this.sale = '';
      this.stock = '';
    }
  }

  emptyInputs() {
    return this.name == '' || this.image == '' || this.desc == '' || this.price == '' || this.sale == '' || this.stock == '';
  }

  removeProduct( id ) {
    this.removingMsg = true;
    var self = this;
    this.ps.remove( id ).subscribe( (result) => {
      console.log( result.json() );
    });
    setTimeout(function() {
        self.refreshProducts();
        self.removingMsg = false;
      }, 2000);
  }

  removeUser( id ) {
    this.userRemovingMsg = true;
    var self = this;
    this.users.remove( id ).subscribe( (result) => {
      console.log( result.json() );
    });
    setTimeout(function() {
        self.refreshUsers();
        self.userRemovingMsg = false;
      }, 2000);
  }
}
