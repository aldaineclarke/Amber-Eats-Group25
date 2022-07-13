import { Component, OnInit, AfterViewInit, ViewChild , ElementRef } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { User } from '../../interfaces/users';
import { ActivatedRoute, Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { cardPayment } from '../../interfaces/cardPayment';
import { OrderCartComponent } from '../../Pages/order-cart/order-cart.component';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})

export class UserCreationComponent implements OnInit {

  rows:any = 1
  create:boolean = false
  paymentMethod:cardPayment[] = []

  //variable for storing information added to form
  @ViewChild('createForm') form!: NgForm;

  constructor(private creationService:UserService , private router:Router) { }
  
  // Show Create Account
  show() {
    this.create = !this.create;
  }

  ngOnInit(): void {

  }

  // Post User Information
  getUserInformation(value:any) { 

    // Array For PaymentMethod 
    this.paymentMethod = [{
      cardNumber: value.cardNumber,
      expiryDate: value.expiryDate,
      name: value.cardHolder,
    }]

    // Object that stores information to be added
    const userInformation = {
      id: '',
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      address: value.adLine1,
      paymentMethod: this.paymentMethod
    }


    // Posting Information to database
    this.creationService.saveUser(userInformation).subscribe((result) => {
      this.router.navigateByUrl("/", {skipLocationChange:true})
      .then(nav => {
        console.log(userInformation)
        this.router.navigate(["/", "checkout"])
        // this.orderCart.openDialog()
      }, err => {
        console.log(err) // when there's an error,
        console.log(userInformation) 
      });
    })
  }
}
