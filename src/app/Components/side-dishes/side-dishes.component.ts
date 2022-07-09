import { Component, OnInit } from '@angular/core';
import { SidesInterface } from 'src/app/interfaces/sides';
import { DataService } from 'src/app/Services/data.service';


@Component({
  selector: 'app-side-dishes',
  templateUrl: './side-dishes.component.html',
  styleUrls: ['./side-dishes.component.css']
})
export class SideDishesComponent implements OnInit {

  sides: any = [];
  sideOrders: any = [];

  isVisible: boolean = false;
  editCategoryForm: any;

  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.dataService.getAllSides().subscribe((data: SidesInterface[]) => { // when the application initializes we  subscribe to the sendRequestMethod and what is being passed in the subscribe is another variable called data
      this.sides = data; // we have assigned the information collected on subcribe which is now stored in data and essentially pushed it into the products array.
    });

    this.toggleShowHide();
  }

  toggleShowHide() {
    this.isVisible = ! this.isVisible;
  }

pushSides(value: any, price:any ) {
  if ((<HTMLInputElement>document.getElementById(value)).checked) {
      // this.sideOrders.push(value);
      this.sideOrders = this.sideOrders.concat(value, price);
      console.log('item pushed' + " " + this.sideOrders);
  } else {
      let indexx = this.sideOrders.indexOf(value);
      this.sideOrders.splice(indexx, 1);
      console.log('item removed');

  }
}
}
