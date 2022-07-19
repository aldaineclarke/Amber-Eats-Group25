import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserCreationComponent } from '../Components/user-creation/user-creation.component';
import { cardPayment } from '../interfaces/cardPayment';
import { CartItem } from '../interfaces/cartItem';
import { SidesInterface } from '../interfaces/sides';
import { User } from '../interfaces/users';
import { CartService } from '../Services/cart.service';
import { DataService } from '../Services/data.service';
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './order-checkout.component.html',
  styleUrls: ['./order-checkout.component.css'],
})
export class OrderCheckoutComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatStepper;

  cartItems: CartItem[] = this.cartService.getCart();
  sides!: SidesInterface[];
  currentUID = 0;

  searchUserForm = this._formBuilder.group({
    email: [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/),
      ]),
    ],
  });

  get email() {
    return this.searchUserForm.get('email');
  }

  paymentForm = this._formBuilder.group({
    selectedCard: ['', Validators.required],
    addNewCard: this._formBuilder.group({
      cardholder: [''],
      cardNumber: [''],
      cardType: [''],
      expiryDate: [''],
    }),
    deliveryChoice: ['', Validators.required],
  });
  isEditable = true;
  currentUser$!: Observable<User | null>;

  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService,
    public dialog: MatDialog,
    private router: Router,
    private cartService: CartService,
    private dataService: DataService
  ) {}

  total = this.cartService.getCartTotal();

  openDialog() {
    const dialogRef = this.dialog.open(UserCreationComponent, {
      data: { stepper: this.stepper },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let paymentMethod: cardPayment = {
          name: result.cardholder,
          cardNumber: result.cardNumber,
          expiryDate: result.expiryDate,
        };
        let newUser: User = {
          id: this.currentUID,
          firstName: result.fname,
          lastName: result.lname,
          email: result.email,
          address: result.address1 + ',' + result.parish,
          paymentMethod: Array.of(paymentMethod),
        };
        this.userService.saveUser(newUser).subscribe(() => {
          this.userService.login(newUser).subscribe();
          this.stepper.next();
        });
      }
    });
  }

  checkUser() {
    let email = this.searchUserForm.get('email');
    if (email?.value) {
      this.userService
        .findEmail(email?.value)
        .subscribe((result: boolean | User) => {
          if (result == false) {
            console.log(result);
            this.openDialog();
          } else {
            this.userService.login(result as User).subscribe();
            this.currentUser$ = this.userService.user$;
            console.log(result);
            this.stepper.next();
          }
        });
    } else {
    }
  }

  next() {}
  addCard() {
    let card: cardPayment = {
      name: this.paymentForm.get('addNewCard')?.get('cardholder')?.value,
      cardNumber: this.paymentForm.get('addNewCard')?.get('cardNumber')?.value,
      expiryDate: this.paymentForm.get('addNewCard')?.get('expiryDate')?.value,
    };

    this.currentUser$.subscribe((user) => {
      if (user) {
        user.paymentMethod.push(card);
        console.log(user);
        this.userService.updateUser(user, user.id).subscribe();
      }
    });
  }

  ngOnInit(): void {
    this.userService.logout();
    this.userService.lastUserId.subscribe((id) => {
      this.currentUID = id + 1;
    });
    this.currentUser$ = this.userService.user$;
    this.dataService.getAllSides().subscribe((sides) => {
      this.sides = sides;
    });
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
