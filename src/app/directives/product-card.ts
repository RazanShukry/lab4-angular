import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[productCardShadow]',
  standalone: true
})
export class ProductCardDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setStyle('1px solid #ccc', '8px', '0 2px 6px rgba(0,0,0,0.1)');
  }

  private setStyle(border: string, radius: string, shadow: string) {
    this.renderer.setStyle(this.el.nativeElement, 'border', border);
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', shadow);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setStyle('2px solid #007bff', '12px', '0 4px 12px rgba(0,0,0,0.2)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setStyle('1px solid #ccc', '8px', '0 2px 6px rgba(0,0,0,0.1)');
  }
}
