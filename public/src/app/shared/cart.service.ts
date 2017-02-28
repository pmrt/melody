import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CartService {

  private cart = [];
  private subject: Subject<any> =  new Subject<any>();
  constructor() { }

  getCart() {
    return this.subject.asObservable();
  }

  emptyCart() {
    this.cart = [];
    this.subject.next( this.cart );
  }

  pushToCart( product ) {
    if ( !this.exists(product) ) {
      this.cart.push( product );
      this.subject.next( this.cart );
    }
  }

  exists( product ) {
    var id = product.id,
        result = this.cart.find( (i) => i.id == id );
    if ( result ) return true;
    return false;
  }

}
