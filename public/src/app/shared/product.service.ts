import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductService {

  constructor(private http: Http) {

  }

  getProducts() {
    return this.http.get('http://localhost/melody/server/public/api/v1/products?key=UH6v4wp33xeeh1XWiRNo');
  }

}
