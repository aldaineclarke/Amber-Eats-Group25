import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; //import created components\/
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';
import { OrderCompletedComponent } from './order-completed/order-completed.component';
import { MenuComponent } from './menu/menu.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { OrderCheckoutComponent } from './order-checkout/order-checkout.component';
import { OrderPayComponent } from './order-pay/order-pay.component';
import { OrderCartComponent } from './order-cart/order-cart.component';


//Routing Setup -----------------------------------------
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default that redirects and empty path to home component
  { path: 'home', component: HomeComponent }, //path to 'home' (these are names, NOT routes)
  { path: 'about', component: AboutComponent }, //path to 'about'
  { path: 'details/:id', component: DetailsComponent },
  { path: 'contact', component: ContactComponent },
  {path: 'order-completed', component: OrderCompletedComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'menuDetail/:id' , component: MenuDetailsComponent},
  {path: 'update', component:UpdateMenuComponent},
  {path: 'checkout', component: OrderCheckoutComponent},
  {path: 'pay', component: OrderPayComponent},
  {path: 'cart', component: OrderCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
