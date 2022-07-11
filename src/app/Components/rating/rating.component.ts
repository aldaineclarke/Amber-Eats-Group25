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
    public dialog: MatDialog
  ) {}

  openDialog(name: string) {
    const dialogRef = this.dialog.open(RatingDialogComponent, {
      data: { productName: name  },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.value) {
        this.meal.ratingCount++;
        this.meal.totalRatings += parseInt(result.value);
        const rating = parseInt(result.value);
        this.createRatings(rating);
      }
    });
  }
  total_users = 0;
  avgReviews = 0;
  ratingsProduct: ProductInterface[] = [];
  ngOnInit(): void {

    this.calculateReviews();
  }

  calculateReviews() {
    // checks to see if there is a rating already present on the product, if there is no rating, then product gets five stars by default.
    if (this.meal.totalRatings == 0 && this.meal.ratingCount == 0) {
      this.avgReviews = 5;
    } else {
      // The code below will be used to calculate the rating average of the product.
      const ratings = (this.meal.totalRatings / this.meal.ratingCount).toFixed(
        1
      );
      this.avgReviews = Number(ratings);

        this.total_users = this.meal.ratingCount;
    }
  }

  createRatings(rating: number) {
    const updatedProduct = {
      ratingCount: this.meal.ratingCount + 1,
      totalRatings: this.meal.totalRatings + rating,
    
    };

    this.dataService
      .updateProduct(this.meal.id,updatedProduct )
      .subscribe(()=> this.calculateReviews());

    console.log(this.meal)
  }

}
