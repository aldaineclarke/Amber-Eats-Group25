import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { CartItem } from '../interfaces/cartItem';
import { DataService } from '../Services/data.service';
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-order-pay',
  templateUrl: './order-pay.component.html',
  styleUrls: ['./order-pay.component.css']
})
export class OrderPayComponent implements OnInit {

  cartItems: CartItem[] = this.cartService.getCart();

  constructor(private cartService: CartService, private dataService: DataService, private userService: UserService) {
  }

  showAddress:boolean = true;

  show() {
    this.showAddress = true;
  };

  hide() {
    this.showAddress = false;
  }



  ngOnInit(): void {
  }

}
