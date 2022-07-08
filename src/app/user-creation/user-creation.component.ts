import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {

  rows:any = 1

  create:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  show() {
    this.create = !this.create;
  }

}
