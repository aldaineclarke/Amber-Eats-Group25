import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../../Services/data.service';
import { UserCreationComponent } from '../../Components/user-creation/user-creation.component';
import { UserService } from '../../Services/user.service';
import { CartService } from '../../Services/cart.service';
import { CartItem } from '../../interfaces/cartItem';
import { SidesInterface } from 'src/app/interfaces/sides';
import { ProductInterface } from 'src/app/interfaces/product';
import { User } from 'src/app/interfaces/users';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.css'],
})
export class OrderCartComponent implements OnInit {
  cartItems: CartItem[] = this.cartService.getCart();
  sideItems:SidesInterface[] = [];
  cartAmount: number = this.cartService.getCartCount();
  cartTotal: number = this.cartService.getCartTotal();

  // credentials: User[] = [];
  
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private dataService: DataService,
    private userService: UserService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.dataService.getAllSides().subscribe((sides) => {
      this.sideItems = sides;
    })
  }

  next() {
    this.router.navigate(['/', 'checkout']).then(
      (nav) => {
        console.log(nav); // true if navigation is successful
      },
      (err) => {
        console.log(err); // when there's an error
      }
    );
  }

  // Update Cart Item Quantity
  updateQuantity(cartID:number, value:number){
    this.cartService.updateCartItemQuantity(cartID, value);
    // console.log(cartID);
    // console.log(value);
    this.cartItems = this.cartService.getCart();

  }
  formatLabel(value: number) {
    if (value >= 8) {
      return Math.round(value / 7);
    }
    return value;
  }

  // Open Create Account Dialog
  openDialog() {
    const dialogRef = this.dialog.open(UserCreationComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  checkUser(email: HTMLInputElement) {
    let userEmail = email.value;

    this.userService.findEmail(userEmail).subscribe((result) => {
      if (result == false) {
        console.log(result);
        this.openDialog();
      } else {
        this.next();
      }
    });
  }

  // Delete Item From Cart
  deleteitem(itemId: number) {
    this.cartService.removeCartItem(itemId)
    this.cartItems = this.cartService.getCart();
  }

  // Clear Cart
  clearItems() {
    this.cartService.clearCart();
    this.cartItems = this.cartService.getCart();
  }
}


