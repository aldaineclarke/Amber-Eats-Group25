import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component'; //import created components\/
import { AboutComponent } from './Pages/about/about.component';
import { DetailsComponent } from './Pages/details/details.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { OrderCompletedComponent } from './Pages/order-completed/order-completed.component';
import { MenuComponent } from './Pages/menu/menu.component';
import { MenuDetailsComponent } from './Pages/menu-details/menu-details.component';
import { UpdateMenuComponent } from './Pages/update-menu/update-menu.component';

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
  {path: 'update', component:UpdateMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
