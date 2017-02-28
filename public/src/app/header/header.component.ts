import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  private cartCount = 0;
  @Output() showCart = new EventEmitter<any>();
  constructor(private cs: CartService) {
    this.cs.getCart().subscribe( ( cart )=> this.cartCount = cart.length );
  }

  ngOnInit() {
  }

  show() {
    this.showCart.emit( null );
  }

}
