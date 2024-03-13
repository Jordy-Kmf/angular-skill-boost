import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
   selector: '[appTextHighlighter]'
})
export class TextHighlighterDirective {
   affectedElement = (this.element.nativeElement as HTMLElement);
   constructor(
      private element: ElementRef,
      private renderer: Renderer2
   ) { }

   @HostListener('mouseenter')
   onmouseenter(event: Event) {
      this.renderer.setStyle(this.affectedElement, 'background-color', 'rgb(234, 233, 233)')
   }

   @HostListener('mouseleave')
   onmouseleave(event: Event) {
      this.renderer.setStyle(this.affectedElement, 'background-color', 'rgb(255, 255, 255)')
   }

   @HostListener('click')
   onmouseclick(event: Event) {
      this.renderer.setStyle(this.affectedElement, 'background-color', 'rgb(234, 233, 233)')
   }

}
