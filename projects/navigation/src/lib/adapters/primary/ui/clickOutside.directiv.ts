import { DOCUMENT } from '@angular/common';
import { Directive, Inject } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
})
export class ClickedOutsideDirective implements AfterViewInit {
  constructor(
    private element: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) {}
}
