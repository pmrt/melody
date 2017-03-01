import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { CartService } from '../shared/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private products = [];
  private cart = [];
  constructor(private ps: ProductService, private cs: CartService ) {
    let body = document.body;
    let footer = document.getElementsByTagName('footer')[0];
    footer.style.display = "block";
    body.style.backgroundImage = "";

    this.ps.getProducts().subscribe( ( result )=> {
        this.products = result.json().products;
    });
    this.cs.getCart().subscribe( (cart) => {
        this.cart = cart;
    });
  }

  ngOnInit() {
  }

  add( itemIndex ) {
    this.cs.pushToCart( this.products[itemIndex] );
  }

}
