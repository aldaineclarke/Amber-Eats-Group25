import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  products: any = []; //cannot assign number
  id: any = [];
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
  }
}
