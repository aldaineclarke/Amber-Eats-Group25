import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { ProductInterface } from 'src/app/interfaces/product';
import { DataService } from 'src/app/Services/data.service';
import { LoadingService } from 'src/app/Services/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: ProductInterface[] = [];

  constructor(private dataService: DataService, private loadingService: LoadingService) {} //dataService variable of type DataService

  ngOnInit() {
    this.dataService.getAllProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }
    
  }

