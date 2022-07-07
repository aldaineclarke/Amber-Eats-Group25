import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() meal!: { productName: string; tot_stars: number; tot_users: number };
  constructor() {}
  avgReviews = 0;
  total_users = 0;
  ngOnInit(): void {
    this.calculateReviews();
  }
  calculateReviews() {
    this.avgReviews = Number(
      (this.meal.tot_stars / this.meal.tot_users).toFixed(1)
    );
    this.total_users = this.meal.tot_users;
  }
}
