import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.css']
})
export class OrderCartComponent implements OnInit {

  // value:any = 0;
  constructor(private router: Router) { }

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

  ngOnInit(): void {
  }

}
