import { Component, ElementRef, Inject, QueryList, ViewChildren } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  templateUrl:"./rating-dialog.component.html",
  styleUrls:["./rating-dialog.component.css"],
})
export class RatingDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private matDialogRef: MatDialogRef<RatingDialogComponent>) {}
  productName = this.data.productName;
  @ViewChildren("star1") star1!:QueryList<ElementRef>
  @ViewChildren("star2") star2!:QueryList<ElementRef>
  @ViewChildren("star3") star3!:QueryList<ElementRef>
  @ViewChildren("star4") star4!:QueryList<ElementRef>
  @ViewChildren("star5") star5!:QueryList<ElementRef>

  starsArr = [this.star1, this.star2, this.star3, this.star4, this.star5]
  selectStar(value:number){
    console.log(this.star1)
    for(let i = 0; i < value; i++){
      if(this.starsArr[i]){

        this.starsArr[i].changes.subscribe((eleRef:QueryList<ElementRef>)=>{
          eleRef.first.nativeElement.classList.add("filled-star");
          eleRef.first.nativeElement.classList.remove("no-fill");
        }) 
      }
    }

      this.matDialogRef.close(value);
  }
}
