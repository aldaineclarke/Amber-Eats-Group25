import { RatingComponent } from './Components/rating/rating.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Pages/home/home.component';
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
import { MenuComponent } from './Pages/menu/menu.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MenuDetailsComponent } from './Pages/menu-details/menu-details.component';
import { UpdateMenuComponent } from './Pages/update-menu/update-menu.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
// import { MapComponent } from './Components/map/map.component';
import { SliderComponent } from './slider/slider.component';
import { NextDirective } from './next.directive';
import { PreviousDirective } from './previous.directive';
// import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DetailsComponent,
    ContactComponent,
    RatingComponent,
    OrderCompletedComponent,
    MenuComponent,
    MenuDetailsComponent,
    UpdateMenuComponent,
    // MapComponent,
    SliderComponent,
    NextDirective,
    PreviousDirective,
    // FooterComponent,
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
    MatInputModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
