import {Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string;
  @Input() highlightColor: string;
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
  @HostBinding('style.color') color = 'black';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    this.renderer.addClass(this.elRef.nativeElement, 'p-3');
  }

  @HostListener('mouseenter') mouseover(e: Event): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');

    this.backgroundColor = this.highlightColor;
    this.color = 'white';
  }

  @HostListener('mouseleave') mouseleave(e: Event): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');

    this.backgroundColor = this.defaultColor;
    this.color = 'black';
  }

}
