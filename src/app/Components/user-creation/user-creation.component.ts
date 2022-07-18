import { Component, OnInit, AfterViewInit, ViewChild , ElementRef, Output, EventEmitter, Inject } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { User } from '../../interfaces/users';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { cardPayment } from '../../interfaces/cardPayment';
import { OrderCartComponent } from '../../Pages/order-cart/order-cart.component';
import { MatStepper } from '@angular/material/stepper';
import { MAT_DIALOG_DATA, MatDialogRef,MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})

export class UserCreationComponent implements OnInit {

  rows:any = 1
  create:boolean = false
  paymentMethod:cardPayment[] = [];
  currentUID = 0;


  //variable for storing information added to form
  @ViewChild('createForm') form!: NgForm;
  @Output() goForward = new EventEmitter<boolean>();

  constructor(private userService:UserService , private router:Router, private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data:{stepper:MatStepper}, private dialogRef: MatDialogRef<UserCreationComponent>) { }
  
  creationFormGroup = this.fb.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    address1: ['', Validators.required],
    parish: ['', Validators.required],
    email: ['', Validators.required],
    cardholder: ['', Validators.required],
    cardNumber: ['', Validators.required],
    expiryDate: ['', Validators.required],
  })
  // Show Create Account
  show() {
    this.create = !this.create;
  }
  
  ngOnInit(): void {}

  nextStep(): void{
    this.data.stepper.next();
    console.log(this.data.stepper)
    this.dialogRef.close();
  }
}
