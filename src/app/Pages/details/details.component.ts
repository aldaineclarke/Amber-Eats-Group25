import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductInterface } from 'src/app/interfaces/product';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  product!: ProductInterface ; //cannot assign number
  id= 0;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {


    this.route.paramMap.subscribe((params: ParamMap) => {
      let details = params.get('id') as string;
      this.id = parseInt(details);
      
      this.dataService.getProductById(this.id).subscribe((data: ProductInterface) => {
        this.product = data;
      });
    });
  }
}
