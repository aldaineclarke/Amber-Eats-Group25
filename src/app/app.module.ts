import { RatingComponent } from './Components/rating/rating.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './Pages/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular Materials
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DetailsComponent } from './Pages/details/details.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { OrderCompletedComponent } from './Pages/order-completed/order-completed.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { SliderComponent } from './Components/slider/slider.component';
import { NextDirective } from './Directives/next.directive';
import { PreviousDirective } from './Directives/previous.directive';
import { HomeComponent } from './Pages/home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RatingDialogComponent } from './Components/rating-dialog/rating-dialog.component';
import { FooterComponent } from './Components/footer/footer.component';
import { InventoryComponent } from './Pages/inventory/inventory.component';
import { AddProductsComponent } from './Components/add-products/add-products.component';
import { AddSidesComponent } from './Components/add-sides/add-sides.component';
import { EditProductsComponent } from './Components/edit-products/edit-products.component';
import { EditSidesComponent } from './Components/edit-sides/edit-sides.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DetailsComponent,
    ContactComponent,
    RatingComponent,
    OrderCompletedComponent,
    SliderComponent,
    NextDirective,
    PreviousDirective,
    RatingDialogComponent,
    FooterComponent,
    InventoryComponent,
    AddProductsComponent,
    AddSidesComponent,
    EditProductsComponent,
    EditSidesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
