import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-checkout',
  templateUrl: './order-checkout.component.html',
  styleUrls: ['./order-checkout.component.css']
})
export class OrderCheckoutComponent implements OnInit {

  

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
