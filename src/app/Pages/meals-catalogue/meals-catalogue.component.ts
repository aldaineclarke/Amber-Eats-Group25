import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ProductInterface } from 'src/app/interfaces/product';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-meals-catalogue',
  templateUrl: './meals-catalogue.component.html',
  styleUrls: ['./meals-catalogue.component.css']
})
export class MealsCatalogueComponent implements OnInit {

  products:ProductInterface[] = [];
   // Paginator Event
   pageEvent !: PageEvent;
   pageSizeOptions = [9, 18,27, 54];
   pageSize = 9;
   length = 100;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getAllProducts().subscribe((data: any[]) => {
      this.products = data.slice(0,9);
      this.length = data.length
    });
  }
  getPageWithIndex(event:PageEvent){
    let pageEvent = event
    this.dataService.getLimitedProducts(++pageEvent.pageIndex, pageEvent.pageSize).subscribe((data)=>{
      this.products = data;
    })
  }

}
