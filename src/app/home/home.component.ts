import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

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
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data)
      this.products = data;
    });

    this.getFooterProducts();
    console.log(this.footerItems); //--------gallery------
  }

  public getFooterProducts() {    //--------gallery------
    this.dataService.sendGetDetails(5).subscribe((data: any[]) => {
      this.footerItems.push(data);
    });
    this.dataService.sendGetDetails(17).subscribe((data: any[]) => {
      this.footerItems.push(data);
    });
    this.dataService.sendGetDetails(3).subscribe((data: any[]) => {
      this.footerItems.push(data);
    });
    this.dataService.sendGetDetails(38).subscribe((data: any[]) => {
      this.footerItems.push(data);
    });
    this.dataService.sendGetDetails(10).subscribe((data: any[]) => {
      this.footerItems.push(data);
    });
    this.dataService.sendGetDetails(5).subscribe((data: any[]) => {
      this.footerItems.push(data);
    });
    this.dataService.sendGetDetails(42).subscribe((data: any[]) => {
      this.footerItems.push(data);
    });
    this.dataService.sendGetDetails(33).subscribe((data: any[]) => {
      this.footerItems.push(data);
    });
    this.dataService.sendGetDetails(30).subscribe((data: any[]) => {
      this.footerItems.push(data);
    });
  }


  
}
