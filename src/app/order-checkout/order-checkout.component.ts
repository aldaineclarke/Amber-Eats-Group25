import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from '../Services/user.service'; 
import { CartItem } from '../interfaces/cartItem';
import { CartService } from '../Services/cart.service';
import { DataService } from '../Services/data.service';
import { SidesInterface } from '../interfaces/sides';
@Component({
  selector: 'app-checkout',
  templateUrl: './order-checkout.component.html',
  styleUrls: ['./order-checkout.component.css']
})
export class OrderCheckoutComponent implements OnInit {

  cartItems: CartItem[] = this.cartService.getCart();
  sideItems:SidesInterface[] = [];

  constructor(private _formBuilder: FormBuilder, private dataService: DataService, private cartService: CartService, private userService: UserService) { }

  ngOnInit(): void {
    this.dataService.getAllSides().subscribe((sides) => {
      this.sideItems = sides;
    })
  }

}
