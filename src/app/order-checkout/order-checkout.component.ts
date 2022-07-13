import { Component, OnInit, AfterViewInit } from '@angular/core';
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
  // total: number = 0;

  constructor(private _formBuilder: FormBuilder, private dataService: DataService, private cartService: CartService, private userService: UserService) { }

  ngOnInit(): void {
    this.dataService.getAllSides().subscribe((sides) => {
      this.sideItems = sides;
    })
  }

  // ngAfterViewInIt() {
  //   this.totalFunc()
  // }

  // totalFunc(newAmount: number) {
  //   setTimeout(() => {
  //     let subtotals:any = '';
  //     // let sideId:any = 

  //     this.cartItems.forEach((cartItem:any) => {

  //       subtotals += parseInt(cartItem.product.price) * parseInt(cartItem.product.quantity);
  //     });

  //     this.total = subtotals
  //   }, 0);
  // }


  // totalFunc(newAmount?: number) {
  //   // Patch the NG0100 detection change error
  //   setTimeout(() => {
  //     let subtotals = 0;

  //     // Calculates subtotal for each item in cart
  //     this.cartItems.forEach((cart) => {
  //       // return subtotals += parseInt(cart.product.price) * parseInt(cart.amount);
  //     });

  //     // Sets the cart total to the calculated value
  //     this.total = subtotals;
  //   }, 0);
  // }

}
