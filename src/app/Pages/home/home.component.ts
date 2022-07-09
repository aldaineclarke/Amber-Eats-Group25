import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any = [];
  footerItems: any[] = []; //------gallery------

  constructor(private dataService: DataService) {} //dataService variable of type DataService

  ngOnInit() {
    this.dataService.getAllProducts().subscribe((data: any[]) => {
      this.products = data;
    });

    this.getFooterProducts();
    console.log(this.footerItems); //--------gallery------
  }

  public getFooterProducts() {    //--------gallery------
    this.dataService.getProductById(5).subscribe((data: ProductInterface) => {
      this.footerItems.push(data);
    });
    this.dataService.getProductById(17).subscribe((data: ProductInterface) => {
      this.footerItems.push(data);
    });
    this.dataService.getProductById(3).subscribe((data: ProductInterface) => {
      this.footerItems.push(data);
    });
    this.dataService.getProductById(38).subscribe((data: ProductInterface) => {
      this.footerItems.push(data);
    });
    this.dataService.getProductById(10).subscribe((data: ProductInterface) => {
      this.footerItems.push(data);
    });
    this.dataService.getProductById(5).subscribe((data: ProductInterface) => {
      this.footerItems.push(data);
    });
    this.dataService.getProductById(42).subscribe((data: ProductInterface) => {
      this.footerItems.push(data);
    });
    this.dataService.getProductById(33).subscribe((data: ProductInterface) => {
      this.footerItems.push(data);
    });
    this.dataService.getProductById(30).subscribe((data: ProductInterface) => {
      this.footerItems.push(data);
    });
  }


  
}
