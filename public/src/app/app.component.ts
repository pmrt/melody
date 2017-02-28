import { Component, Directive } from '@angular/core';
import { CartService } from './shared/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  private cart = [];
  constructor( private cs: CartService ) {
    this.cs.getCart().subscribe( (cart) => {
        this.cart = cart;
    });
  }

  show() {
    let wrapper = document.getElementById('wrapper');
    wrapper.style.transform = "translateX(0%)";
    wrapper.style.height = document.body.scrollHeight + 'px';
  }

  hide() {
    let wrapper = document.getElementById('wrapper');
    wrapper.style.transform = "translateX(100%)";
  }

  getTotal() {
    return this.cart.reduce( (acc, val) => acc + parseFloat(val.price), 0);
  }

  empty() {
    this.cs.emptyCart();
  }

  isArrayEmpty( arr ) {
    return arr.length === 0;
  }

}
