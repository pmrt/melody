import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from "@angular/http";

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

  private session = { logged: false, user: { admin: false}, registerFailed: true  };
  private sessionSubject: Subject<any> = new Subject<any>();

  constructor( private http: Http ) { }

  createUser( email, password ) {
    // For this demo name will be the email
    // also, password are not encrypted
    let data = new URLSearchParams();
    data.append( 'name', email );
    data.append( 'email', email );
    data.append( 'password', password );

    this.http
        .post('http://mrtz.es/api/public/v1/user/create?key=hidden', data)
        .subscribe( data => {
          console.log(data.json());
          this.session.registerFailed = false;
          this.sessionSubject.next( this.session );
        }, error => {
          this.session.registerFailed = true;
          this.sessionSubject.next( this.session );
        });
  }

  updateUser( email, password, address ) {
    let data = new URLSearchParams();
    data.append( 'email', email);
    data.append( 'password', password);
    data.append( 'address', address);

    this.http
        .post('http://mrtz.es/api/public/v1/user/update?key=hidden', data)
        .subscribe( data => {
          console.log(data.json());
        });
  }

  getUsers() {
    return this.http.get('http://mrtz.es/api/public/v1/users?key=hidden');
  }

  getSession() {
    return this.sessionSubject.asObservable();
  }

  getCurrentSession() {
    return this.sessionSubject.next( this.session );
  }

  logIn( email, password ) {
    let data = new URLSearchParams();
    data.append('email', email );
    data.append('password', password );

    this.http
      .post('http://mrtz.es/api/public/v1/user/auth?key=hidden', data)
      .subscribe(
            ( response ) => {
              let results = response.json();
              if ( results.response == "success" ) {
                this.session.logged = true;
                this.session.user = results.user[0];
                this.sessionSubject.next( this.session );
              }
            }
        )
  }

  logOut() {
    this.session.logged = false;
    this.session.user = { admin: false };
    this.sessionSubject.next( this.session );
  }

  remove( id ) {
    return this.http.get('http://mrtz.es/api/public/v1/user/delete/'+id+'?key=hidden');
  }

}
