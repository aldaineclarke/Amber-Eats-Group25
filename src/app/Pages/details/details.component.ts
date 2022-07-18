import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CartItem } from 'src/app/interfaces/cartItem';
import { ProductInterface } from 'src/app/interfaces/product';
import { SidesInterface } from 'src/app/interfaces/sides';
import { CartService } from 'src/app/Services/cart.service';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {

  // categoryAdd: any = []; //for selected side dishes
  sides: SidesInterface[] = [];
  sideOrders: number[] = [];
  confirmed: number[] = [];
  i: any = 1;
  completedOrder!: CartItem;
  cartItems:CartItem[] = [];
  value: any;
  price:any;
  selectedQuant: number = 1;

  isVisible: boolean = true;
  product!: ProductInterface; //cannot assign number
  id: any = [];
  quantity: any = [];
  detail: any;
  defaultSideId = 0;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private _notification: MatSnackBar

  ) {}


  getSide(id:number){
   const side = this.sides.find((side)=>side.id == id);
   return side?.name || "Side Missing"
  }

  ngOnInit() {

      this.route.paramMap.subscribe((params: ParamMap) => {
        let details = params.get('id') as string;
        this.id = parseInt(details);

        this.dataService.getProductById(this.id).subscribe((data: ProductInterface) => {
          this.defaultSideId = data.sideId;
          this.product = data;
        });
      });


    //instantiates getrequest for sides on page load
    this.dataService.getAllSides().subscribe((data: SidesInterface[]) => { // when the application initializes we  subscribe to the sendRequestMethod and what is being passed in the subscribe is another variable called data
      this.sides = data; // we have assigned the information collected on subcribe which is now stored in data and essentially pushed it into the products array.
    });

    //initialize the function when the app starts to run
    this.toggleShowHide();
  }

  //function to toggle show and hide component
  toggleShowHide() {
    this.sideOrders = []; //removes existing items from array
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
    this.isVisible = ! this.isVisible;
  }


  addToCart() {
    this.completedOrder =
      {
        "id" : this.cartService.getCartCount() + 1,
        "product": this.product,
        "quantity" : parseInt((<HTMLInputElement>document.getElementById("selectedQuant")).value),
        "sides" : this.sideOrders,
        "totalPrice": this.calculateTotalPrice(),
      }

      this.cartService.addCartItem(this.completedOrder)

      this._notification.open("Item was added to cart","",{
        duration: 2000,
      })

 }
//  Calculate the price for all the sides And total for the cartItem
 calculateTotalPrice():number{
    let sidesTotal = this.sideOrders.reduce((acc,index)=>{
      return acc += +this.sides[index].price
    },0);
    sidesTotal += Number(this.product.price);
    return +sidesTotal;
 }

}
