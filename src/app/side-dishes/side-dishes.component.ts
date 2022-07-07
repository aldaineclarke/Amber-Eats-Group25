import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-side-dishes',
  templateUrl: './side-dishes.component.html',
  styleUrls: ['./side-dishes.component.css']
})
export class SideDishesComponent implements OnInit {

  sides: any = [];
  categoryAdd: any = [];
  
  isVisible: boolean = false;
  editCategoryForm: any;

  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.dataService.getSidesRequest().subscribe((data: any[]) => { // when the application initializes we  subscribe to the sendRequestMethod and what is being passed in the subscribe is another variable called data
      this.sides = data; // we have assigned the information collected on subcribe which is now stored in data and essentially pushed it into the products array.
    });

    this.toggleShowHide();
  }

  toggleShowHide() {
    this.isVisible = ! this.isVisible;
  }

pushSides(value: any) {
  if ((<HTMLInputElement>document.getElementById(value)).checked) {
      // this.categoryAdd.push(value);
      this.categoryAdd = this.categoryAdd.concat(value);
      console.log('item pushed' + " " + this.categoryAdd);
  } else {
      let indexx = this.categoryAdd.indexOf(value);
      this.categoryAdd.splice(indexx, 1);
      console.log('item removed');

  }
}
}
