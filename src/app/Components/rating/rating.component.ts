import { Component, Inject, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/app/Services/data.service';
import { ProductInterface } from 'src/app/interfaces/product';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RatingDialogComponent } from '../rating-dialog/rating-dialog.component';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() meal!: ProductInterface;
  @ViewChild('addMenuForm') creationForm!: ElementRef;
  myVar!: boolean;

  constructor(
    private dataService: DataService,
    private activatedroute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(RatingDialogComponent, {
      data: { total_users: this.total_users },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.value) {
        this.total_users++;
        const rating = parseInt(result.value);
        console.log(rating);
        this.createRatings(rating);
      }
    });
  }
  stars: star[] = [];
  total_users = 0;
  avgReviews = 0;
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
    // checks to see if there is a rating already present on the product, if there is no rating, then product gets five stars by default.
    if (this.meal.totalRatings == 0 && this.meal.ratingCount == 0) {
      this.stars = Array(5).fill({ state: 1 });
    } else {
      // The code below will be used to calculate the rating average of the product.
      // const ratings = (this.meal.totalRatings / this.meal.ratingCount).toFixed(
      //   1
      // );
      const ratings = '4.3';
      this.avgReviews = Number(ratings);

      // Checks to see if after calculating, the ratings is still the maximum
      if (this.avgReviews == 5) {
        this.stars = Array(5).fill({ state: 1 });
      } else {
        // The code below calculates the state of the stars that will be show. it can be 0 which means empty, .5 which means its half or 1 which means its full.

        let full = parseInt(ratings.slice(0, 1));
        this.stars.push(...Array(full).fill({ state: 1 }));
        let half = parseInt(ratings.slice(2)) < 5 ? 0 : 1;
        this.stars.push(...Array(half).fill({ state: 0.5 }));
        let empty = 5 - (full + half);
        this.stars.push(...Array(empty).fill({ state: 0 }));
        this.total_users = this.meal.ratingCount;
      }

      // console.log(this.total_users);
      // console.log(this.stars);
      // console.log(this.avgReviews);
    }
  }

  createRatings(rating: number) {
    const updatedProduct = {
      ratingCount: this.meal.ratingCount + 1,
      totalRatings: this.meal.totalRatings + rating,
    };

    this.dataService
      .updateProduct(this.meal.id,updatedProduct )
      .subscribe(() => this.calculateReviews());
  }

  getAllProducts() {
    this.dataService
      .getAllProducts()
      .subscribe((data: ProductInterface[]) => {
        this.ratingsProduct = data;
      });
  }
}

type star = {
  state: number;
};
// <app-rating
//   [meal]="{ , tot_stars: 256, tot_users: 55 }"
// ></app-rating>
// [meal] = "{ product.id tot_stars: {{product.totalRatings}}, tot_users: {{product.ratingCount}} }"
// [ratingCount = total_users ] = '{}';
// [totalRatings = total_stars] = '{}';
