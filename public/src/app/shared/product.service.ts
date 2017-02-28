import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

@Injectable()
export class ProductService {

  constructor(private http: Http) {

  }

  getProducts() {
    return this.http.get('http://localhost/melody/server/public/api/v1/products?key=UH6v4wp33xeeh1XWiRNo');
  }

  newProduct( name, image, desc, price, sale, stock ) {
    let data = new URLSearchParams();
    data.append( 'name', name);
    data.append( 'img_url', image);
    data.append( 'desc', desc);
    data.append( 'price', price);
    data.append( 'sale', sale);
    data.append( 'stock', stock);

    this.http
        .post('http://localhost/melody/server/public/api/v1/products?key=UH6v4wp33xeeh1XWiRNo', data)
        .subscribe( data => {
          console.log(data.json());
        });
  }

  remove( id ) {
    return this.http.get('http://localhost/melody/server/public/api/v1/delete/'+id+'?key=UH6v4wp33xeeh1XWiRNo');
  }

}


