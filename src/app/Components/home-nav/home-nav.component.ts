import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { LoadingService } from 'src/app/Services/loading.service';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.css']
})
export class HomeNavComponent implements OnInit {
  transparentRoute = ["/home", "/contact", "/menus"];

  @Output() updatedRoute = new EventEmitter<boolean>();
  constructor(private router: Router, public cartService: CartService,) { }

  ngOnInit(): void {
    this.checkPage();
  }
  checkPage(){
      if(this.transparentRoute.includes(this.router.url)){
        return true;
      }else{
        return false;
      }
  }

}
