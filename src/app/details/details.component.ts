import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  
  categoryAdd: any = []; //for selected side dishes 

  isVisible: boolean = true;
  products: any = []; //cannot assign number
  id: any = [];
  detail: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.dataService.sendGetDetails(this.id).subscribe((data: any[]) => {
      this.products = data[this.detail];
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      let details = params.get('id');
      this.detail = details;
      console.log(this.detail);
    });

    //initialize the function when the app starts to run
    this.toggleShowHide();
  }

  //function to toggle show and hide component
  toggleShowHide() {
    this.isVisible = ! this.isVisible;
  }

  // fuction for selected side dishes
  pushSides(value: any) {
    if ((<HTMLInputElement>document.getElementById(value)).checked) {
        // this.categoryAdd.push(value);
        this.categoryAdd = this.categoryAdd.push(value); // this method works with concat as well. the Gotcha here is that we have to update the array with the new information or it will no do so
        console.log('item pushed' + " " + this.categoryAdd);
    } else {
        let indexx = this.categoryAdd.indexOf(value);
        this.categoryAdd = this.categoryAdd.splice(indexx, 1);
        console.log('item removed');
  
    }
  }
}
