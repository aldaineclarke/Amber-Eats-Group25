import { DataService } from './../data.service';
import { Component, Input, OnInit } from '@angular/core';

interface sliderImages {
  imageAlt: string;
  id: number;
  imageUrl: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  // products: any = [];
  constructor(private dataservice: DataService) { }

  @Input() products: sliderImages[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 6000; //6 seconds


  selectedIndex = 0;


  ngOnInit(): void { 
    if(this.autoSlide) {
      this.autoSlideImages();
    }

    this.dataservice.sendGetRequest().subscribe((data: any[]) => {
      this.products = data;
    });

  }

  //change slide every 8 seconds
  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }
  // sets index of image on circle/indicator click
  selectImage(index: number): void {
   this.selectedIndex = index;
  }

  onPreviousClick(): void {
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.products.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if(this.selectedIndex === this.products.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

}
