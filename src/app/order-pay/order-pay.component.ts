import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { CartItem } from '../interfaces/cartItem';
import { DataService } from '../Services/data.service';
import { SidesInterface } from '../interfaces/sides';
import { UserService } from '../Services/user.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-order-pay',
  templateUrl: './order-pay.component.html',
  styleUrls: ['./order-pay.component.css']
})

export class OrderPayComponent implements OnInit {
  cartItems: CartItem[] = this.cartService.getCart();
  sideItems: SidesInterface[] = [];
  cardAmount: number = this.cartService.getCartCount();
  cartTotal: number = this.cartService.getCartTotal();

  constructor(private _formBuilder: FormBuilder, private cartService: CartService, private dataService: DataService, private userService: UserService) {
  }

  showAddress:boolean = true;

  show() {
    this.showAddress = true;
  };

  hide() {
    this.showAddress = false;
  }



  ngOnInit(): void {
    this.dataService.getAllSides().subscribe((sides) => {
      this.sideItems = sides;
    })
  }

}
