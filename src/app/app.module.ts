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
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { OrderCheckoutComponent } from './order-checkout/order-checkout.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderCartComponent } from './order-cart/order-cart.component';
import { OrderPayComponent } from './order-pay/order-pay.component';
import {MatSliderModule} from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import { UserCreationComponent } from './user-creation/user-creation.component';
// import { FooterComponent } from './footer/footer.component';

import { SliderComponent } from './Components/slider/slider.component';
import { NextDirective } from './Directives/next.directive';
import { PreviousDirective } from './Directives/previous.directive';
import { HomeComponent } from './Pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DetailsComponent,
    ContactComponent,
    RatingComponent,
    OrderCompletedComponent,
    // MenuComponent,
    // MenuDetailsComponent,
    // UpdateMenuComponent,
    OrderCheckoutComponent,
    OrderCartComponent,
    OrderPayComponent,
    UserCreationComponent,
    SliderComponent,
    NextDirective,
    PreviousDirective,
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
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatExpansionModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDividerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
