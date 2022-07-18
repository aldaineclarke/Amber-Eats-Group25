import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartService } from './Services/cart.service';
import { LoadingService } from './Services/loading.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-http-crud1';
  transparent = true;
  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.loadingService.loadingOn();
    this.loadingService.loadingOff();
  }

}
