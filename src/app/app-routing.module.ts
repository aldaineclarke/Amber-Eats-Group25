import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component'; //import created components\/
import { AboutComponent } from './Pages/about/about.component';
import { DetailsComponent } from './Pages/details/details.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { OrderCompletedComponent } from './Pages/order-completed/order-completed.component';
import { InventoryComponent } from './Pages/inventory/inventory.component';


//Routing Setup -----------------------------------------
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default that redirects and empty path to home component
  { path: 'home', component: HomeComponent }, //path to 'home' (these are names, NOT routes)
  { path: 'about', component: AboutComponent }, //path to 'about'
  { path: 'details/:id', component: DetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'order-completed', component: OrderCompletedComponent},
  { path: 'inventory', component: InventoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
