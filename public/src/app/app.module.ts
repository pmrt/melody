import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';

/* BUILT-IN EXTRAS */

import { RouterModule, Routes } from '@angular/router';

/* SERVICES */
import { ProductService } from './shared/product.service';
import { CartService } from './shared/cart.service';

const routes = [
    { path: 'login', component: LoginComponent },
    { path: 'products', component: ProductsComponent },
    {
      path: '',
      redirectTo: '/products',
      pathMatch: 'full'
    }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ ProductService, CartService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
