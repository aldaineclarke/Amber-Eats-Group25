import { Component, OnInit, AfterViewInit, ViewChild , ElementRef } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../interfaces/users';
import { ActivatedRoute, Router} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})

export class UserCreationComponent implements OnInit {

  rows:any = 1
  create:boolean = false

  //variable for storing information added to form
  @ViewChild('createForm') form!: NgForm;

  constructor(private creationservice:UserService , private router:Router) { }
  
  // Show Create Account
  show() {
    this.create = !this.create;
  }

  ngOnInit(): void {

  }

  // 

  // Post User Information
  getUserInformation(value:any) { 

    // Object that stores information to be added
    const userInformation = {
      id: 1,
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      paymentMethod: value.paymentMethod
    }

    // Posting Information to database
    this.creationservice.saveUser(userInformation).subscribe((result) => {
      console.log(userInformation)
      this.router.navigateByUrl("/", {skipLocationChange:true})
      .then(nav => {
        this.router.navigate(["/", "checkout"])
      }, err => {
        console.log(err) // when there's an error
      });
    })
  }


}
