import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private next: ElementRef) {}
  
  @HostListener('click')
  nextFunction(){
    var elm = this.next.nativeElement.parentElement.children[0];
    var image = elm.getElementsByClassName("item");
    elm.append(image[0])
  }
}
