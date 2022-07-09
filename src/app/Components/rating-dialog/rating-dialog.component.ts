import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  template: `<h1 mat-dialog-title>Amber Eats Review</h1>
    <div mat-dialog-content>
      <input class="input-field" type="number" #userRating name="rating" />
      /of 5
      {{ userRating.value }}
      <button class="button" [mat-dialog-close]="userRating">RATE</button>
    </div>
    <div mat-dialog-actions></div>`,
})
export class RatingDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  total_users = this.data.total_users;
}
