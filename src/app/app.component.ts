import { Component } from '@angular/core';
import { CartService } from './Services/cart.service';
8
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-http-crud1';
  constructor(public cartService: CartService) {}

  ngOnInit() {}

}
