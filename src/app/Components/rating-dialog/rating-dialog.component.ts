import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl:"./rating-dialog.component.html",
})
export class RatingDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  productName = this.data.productName;
}
