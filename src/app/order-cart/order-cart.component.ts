import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { UserCreationComponent } from '../user-creation/user-creation.component';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.css']
})
export class OrderCartComponent implements OnInit {

  // value:any = 0;


  constructor(private router: Router, public dialog: MatDialog, private paymentService: PaymentService) { }

  next() { 
    this.router.navigate(['/', 'checkout'])
      .then(nav => {
        console.log(nav); // true if navigation is successful
      }, err => {
        console.log(err) // when there's an error
      });
  }

  formatLabel(value: number) {
    if (value >= 8) {
      return Math.round(value / 7);
    }
    return value;
  }

  openDialog() {
    const dialogRef = this.dialog.open(UserCreationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  checkUser(email:HTMLInputElement) {
    let userEmail = email.value

    this.paymentService.getEmail(userEmail).subscribe(result => {
      if (result == false) {
        console.log(result)
        this.openDialog()
      } else {
        this.next()
      }
    })
  }
  
  

  ngOnInit(): void {
  }

}


