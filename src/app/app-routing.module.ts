import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component'; //import created components\/
import { AboutComponent } from './Pages/about/about.component';
import { DetailsComponent } from './Pages/details/details.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { OrderCompletedComponent } from './Pages/order-completed/order-completed.component';
import { InventoryComponent } from './Pages/inventory/inventory.component';

import { MealsCatalogueComponent } from './Pages/meals-catalogue/meals-catalogue.component';
import { OrderCheckoutComponent } from './order-checkout/order-checkout.component';
import { OrderPayComponent } from './order-pay/order-pay.component';
import { OrderCartComponent } from './Pages/order-cart/order-cart.component';

//Routing Setup -----------------------------------------
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default that redirects and empty path to home component
  { path: 'home', component: HomeComponent }, //path to 'home' (these are names, NOT routes)
  { path: 'about', component: AboutComponent }, //path to 'about'
  { path: 'products', component: MealsCatalogueComponent},
  { path: 'details/:id', component: DetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'inventory', component: InventoryComponent},
  {path: 'order-completed', component: OrderCompletedComponent},
  {path: 'checkout', component: OrderCheckoutComponent},
  {path: 'pay', component: OrderPayComponent},
  {path: 'cart', component: OrderCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
