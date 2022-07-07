import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sides',
  templateUrl: './sides.component.html',
  styleUrls: ['./sides.component.css']
})
export class SidesComponent implements OnInit {
  sides:any = []

  constructor(private dataservice: DataService) {}

  ngOnInit(): void {
    this.dataservice.getSidesRequest().subscribe((data:any[])=>{
      this.sides = data;
    })
  }

}
