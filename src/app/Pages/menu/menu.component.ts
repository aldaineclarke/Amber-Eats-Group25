import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu:any = []

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getMenuRequest().subscribe((data:any[])=>{
      this.menu = data;
    })
  }

}
