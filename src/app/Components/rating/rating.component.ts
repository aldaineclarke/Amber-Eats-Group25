import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInterface } from 'src/app/ratings.service';
import { RatingsService } from 'src/app/ratings.service';
import { Injectable } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() meal!: ProductInterface;
  @ViewChild('addMenuForm') creationForm!: ElementRef;

  constructor(
    private ratingsService: RatingsService,
    private activatedroute: ActivatedRoute,
    private router: Router
  ) {}

  avgReviews = 0;
  total_users = 0;
  ratingsProduct: ProductInterface[] = [];
  ngOnInit(): void {
    // updateproduct(){
    //   let formdata = this.editForm.nativeElement as HTMLFormElement;
    //   let data = {
    //     price: parseFloat((formdata.querySelector("input[name='price']") as HTMLInputElement).value),
    //     quantity: parseInt((formdata.querySelector("input[name='quantity']") as HTMLInputElement).value),
    //   };
    //   this.dataservice.updateproduct(data,this.id).subscribe((response) => {
    //     console.log(response)
    //     alert("Changes made successfully")
    //     this.router.navigateByUrl("/inventory");
    //   })
    // }
    this.calculateReviews();
  }

  calculateReviews() {
    this.avgReviews =
      Number();
      // (this.meal.totalRatings / this.meal.ratingCount).toFixed(1)
    this.total_users = this.meal.ratingCount;

    console.log(this.total_users);
    console.log(this.avgReviews);
  }

  createRatings(ratingResult: HTMLInputElement) {
    console.log(ratingResult.value);
    const updatedProduct = {
      ratingCount: this.meal.ratingCount + 1,
      // totalRatings: this.meal.totalRatings + parseInt(ratingResult.value),
    };

    this.ratingsService
      .updateRatings(updatedProduct, this.meal.id)
      .subscribe(() => this.calculateReviews());
  }

  getAllProducts() {
    this.ratingsService
      .sendGetRequestRatings()
      .subscribe((data: ProductInterface[]) => {
        console.log(data);
        this.ratingsProduct = data;
      });
  }
}
// <app-rating
//   [meal]="{ , tot_stars: 256, tot_users: 55 }"
// ></app-rating>
// [meal] = "{ product.id tot_stars: {{product.totalRatings}}, tot_users: {{product.ratingCount}} }"
// [ratingCount = total_users ] = '{}';
// [totalRatings = total_stars] = '{}';
