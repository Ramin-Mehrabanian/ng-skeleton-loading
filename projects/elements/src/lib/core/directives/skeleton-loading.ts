import { Directive, ElementRef, Renderer2, Input, OnChanges } from '@angular/core';

type Rounding = (
  | 'none'
  | 'small'
  | 'large'
  | 'circle'
);

@Directive({
  selector: '[skeleton]'
})
export class NgSkeletonLoading implements OnChanges {

  @Input('skeletonWidth') width = '100%';
  @Input('skeletonHeight') height = '1rem';
  @Input('skeletonRounding') rounding: Rounding = 'small';

  cssClass = 'is-loading-light';
  roundings: { [key: string]: string } = {
    'none': '0',
    'small': '0.5rem',
    'large': '1rem',
    'circle': '50%',
  };

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {
  }

  ngOnChanges(): void {
    var el = this.element.nativeElement;

    el.addEventListener('DOMSubtreeModified', (event: Event) => {
      
      if (!!(event.target as any).textContent) {
        this.renderer.removeStyle(el, 'width');
        this.renderer.removeStyle(el, 'height');
        this.renderer.removeStyle(el, 'border-radius');
        this.renderer.removeClass(el, this.cssClass);
      }

    });

    el.addEventListener('load', (event: Event) => {
      
        this.renderer.removeStyle(el, 'width');
        this.renderer.removeStyle(el, 'height');
        this.renderer.removeStyle(el, 'border-radius');
        this.renderer.removeClass(el, this.cssClass);

    });

    this.renderer.setStyle(el, 'width', this.width);
    this.renderer.setStyle(el, 'height', this.height);
    this.renderer.setStyle(el, 'border-radius', this.roundings[this.rounding]);
    this.renderer.addClass(el, this.cssClass);
  }
}
