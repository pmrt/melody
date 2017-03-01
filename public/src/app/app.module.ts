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
import { UsersService } from './shared/users.service';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';

const routes = [
    { path: 'login', component: LoginComponent },
    { path: 'products', component: ProductsComponent },
    {
      path: '',
      redirectTo: '/products',
      pathMatch: 'full'
    },
    { path: 'admin', component: AdminComponent },
    { path: 'profile', component: ProfileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    LoginComponent,
    AdminComponent,
    ProfileComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ ProductService, CartService, UsersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
