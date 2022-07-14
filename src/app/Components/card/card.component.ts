import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input() product!:ProductInterface;

  ngOnInit(): void {
  }

}
