import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {

  // categoryAdd: any = []; //for selected side dishes
  sides: any = [];
  sideOrders: number[] = [];
  confirmed: number[] = [];
  i: any = 1;
  completedOrder: any = {};
  cartItems:any = [];
  value: any;
  price:any;
  selectedQuant: number = 1;

  isVisible: boolean = true;
  products: any = []; //cannot assign number
  id: any = [];
  quantity: any = [];
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

    //instantiates getrequest for sides on page load
    this.dataService.getSidesRequest().subscribe((data: any[]) => { // when the application initializes we  subscribe to the sendRequestMethod and what is being passed in the subscribe is another variable called data
      this.sides = data; // we have assigned the information collected on subcribe which is now stored in data and essentially pushed it into the products array.
    });

    //initialize the function when the app starts to run
    this.toggleShowHide();
  }

  //function to toggle show and hide component
  toggleShowHide() {
    this.sideOrders = [];
    this.isVisible = ! this.isVisible;

  }


  // fuction for selected side dishes

  // pushSides(value: any, price:any ) {
  //   if ((<HTMLInputElement>document.getElementById(value)).checked) {
  //       // this.sideOrders.push(value);
  //       this.sideOrders = this.sideOrders.concat([value, price]);
  //       console.log('item pushed' + " " + this.sideOrders);
  //   } else {
  //       let indexx = this.sideOrders.indexOf(value);
  //       this.sideOrders.splice(indexx, 2);
  //       console.log('item removed');

  //   }
  // }

  pushSides(id: number, name: string) {
   if ((<HTMLInputElement>document.getElementById(name)).checked) {
    this.sideOrders.push(id);
    console.log('item added' + this.sideOrders);

    } else {
            let indexx = this.sideOrders.indexOf(id);
            this.sideOrders.splice(indexx, 2);
            console.log('item removed');
    }
  }
  //function for confirmation btn

  confirmedSides() {
    // this.confirmed = this.sideOrders;
    this.isVisible = ! this.isVisible;
    // console.log(this.sideOrders);
  }


  //function to decrement quantity
  // adding() {
  // if ( this.i <= this.products.quantity) {
  //  this.i++
  // }
  // }

  // //function to increment quantity
  // subtracting() {
  //   if ( this.i > 1) {
  //    this.i--
  //   }
  // }

  addToCart() {
    this.completedOrder =
      // {
      // "imageUrl" : (<HTMLInputElement>document.getElementById("imgUrl")).value,
      // "name" : (<HTMLInputElement>document.getElementById("name")).value,
      // "description" : (<HTMLInputElement>document.getElementById("desc")).value,
      // "price" : (<HTMLInputElement>document.getElementById("price")).value,
      // "itemsOrdered" : (<HTMLInputElement>document.getElementById("selectedQuant")).value,
      // "sidesSelected" : (<HTMLInputElement>document.getElementById("sideSelected")).value
      //   }

      {
      "product": this.products,
      "quantity" : parseInt((<HTMLInputElement>document.getElementById("selectedQuant")).value),
      "sidesSelected" : this.sideOrders

       }

      this.cartItems = this.cartItems.push(this.completedOrder)

  console.log(this.completedOrder);
  // console.log(this.cartItems);
 }
}
