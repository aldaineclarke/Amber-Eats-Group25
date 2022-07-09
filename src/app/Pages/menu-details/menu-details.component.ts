import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';
import { MenuInterface } from '../../interfaces/menu';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  menu!: MenuInterface; //cannot assign number
  id!: any;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,  
  ) {}

  ngOnInit() {

   var param = this.route.snapshot.paramMap.get('id');
   this.id = param

  this.dataService.getMenuDetailsId(this.id).subscribe((data:any)=>{
    this.menu = data
  })
  }

}
