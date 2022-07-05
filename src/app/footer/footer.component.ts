import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  footerItems: any[] = [];
  
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getFooterProducts();
    console.log(this.footerItems);
  }

  public getFooterProducts() {
    this.dataService.sendGetDetails(5).subscribe((data: any[]) => {
      this.footerItems.push(data);
    });
    this.dataService.sendGetDetails(17).subscribe((data: any[]) => {
      this.footerItems.push(data);
    });
    this.dataService.sendGetDetails(3).subscribe((data: any[]) => {
      this.footerItems.push(data);
    });
    this.dataService.sendGetDetails(38).subscribe((data: any[]) => {
      this.footerItems.push(data);
    });
    this.dataService.sendGetDetails(10).subscribe((data: any[]) => {
      this.footerItems.push(data);
    });
    this.dataService.sendGetDetails(5).subscribe((data: any[]) => {
      this.footerItems.push(data);
    });
    this.dataService.sendGetDetails(42).subscribe((data: any[]) => {
      this.footerItems.push(data);
    });
    this.dataService.sendGetDetails(33).subscribe((data: any[]) => {
      this.footerItems.push(data);
    });
    this.dataService.sendGetDetails(30).subscribe((data: any[]) => {
      this.footerItems.push(data);
    });
  }
}
