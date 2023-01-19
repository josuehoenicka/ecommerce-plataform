import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.color = 'var(--hard_black)'
    this.element.nativeElement.style.backgroundColor = 'var(--soft_orange)'
    this.element.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.color = ''
    this.element.nativeElement.style.backgroundColor = ''
  }

  constructor(
    private element: ElementRef
  ) {
    // this.element.nativeElement.style.backgroundColor = 'red';
   }

}
