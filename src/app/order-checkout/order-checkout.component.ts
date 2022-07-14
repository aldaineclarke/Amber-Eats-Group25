import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, Validators, } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserCreationComponent } from '../Components/user-creation/user-creation.component';
import { cardPayment } from '../interfaces/cardPayment';
import { User } from '../interfaces/users';
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './order-checkout.component.html',
  styleUrls: ['./order-checkout.component.css']
})
export class OrderCheckoutComponent implements OnInit {

  @ViewChild('stepper') stepper!:MatStepper;


  currentUID = 0;
  searchUserForm = this._formBuilder.group({
    email:['', Validators.required]
  })
  
  paymentForm = this._formBuilder.group({
    selectedCard : ['', Validators.required],
    addNewCard:this._formBuilder.group({
      cardholderName: [''],
      cardNumber: [''],
      cardType: [''],
      expiryDate: [''],
    }),
    deliveryChoice: ['',Validators.required],
  });
  isEditable = false;
  currentUser$!: Observable<User | null>;

  constructor(private _formBuilder: FormBuilder,private userService: UserService,    public dialog: MatDialog,private router: Router) {}


  openDialog() {
    const dialogRef = this.dialog.open(UserCreationComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if(result){
        let paymentMethod:cardPayment= {
          name: result.cardholder,
          cardNumber: result.cardNumber,
          expiryDate: result.expiryDate,
        }
        let newUser:User = {
          id: this.currentUID,
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
          address : result.addressL1 +","+result.parish,
          paymentMethod:Array.of(paymentMethod)
        }
        this.userService.saveUser(newUser).subscribe(()=>{
          this.userService.login(newUser).subscribe();

        });
        
      }
      this.stepper.next();
      console.log(this.stepper)
    });
  }

  checkUser() {
    
    let email = this.searchUserForm.get('email');
    if(email?.value){
      this.userService.findEmail(email?.value).subscribe((result: boolean | User) => {
        if (result == false) {
          console.log(result);
          this.openDialog();
  
        } else {
          this.userService.login(result as User);
          this.stepper.next()
        }
      });
    }else{
      
    }
    
    
  }

  next() {
  
  }
  

  ngOnInit(): void {

    this.userService.logout();
    this.userService.lastUserId.subscribe((id)=>{
      this.currentUID = id + 1;
    })
    this.currentUser$ = this.userService.user$
  }

}
