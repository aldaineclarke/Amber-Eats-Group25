import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-cart',
  templateUrl: './order-cart.component.html',
  styleUrls: ['./order-cart.component.css']
})
export class OrderCartComponent implements OnInit {

  formatLabel(value: number) {
    if (value >= 8) {
      return Math.round(value / 7);
    }

    return value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
