import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrevious]'
})
export class PreviousDirective {

  constructor(private previous: ElementRef) { }

  @HostListener('click')
  
  nextFunction(){
    var elm = this.previous.nativeElement.parentElement.children[0];
    var image = elm.getElementsByClassName("item");
    elm.append(image[0])
  }
}
