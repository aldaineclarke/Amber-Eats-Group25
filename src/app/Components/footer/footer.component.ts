import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  footerItems: ProductInterface[] = [];
  
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getFooterProducts();
    console.log(this.footerItems);
  }

  public getFooterProducts() {
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
