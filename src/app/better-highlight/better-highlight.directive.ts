import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent'; // Passa para o app.component.
  //@Input() highlightColor: string = 'blue';
  @Input('appBetterHighlight') highlightColor: string = 'blue'; // Passa alias para app.component.
  //@HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'; // elementRef.nativeElement.style.backgroundColor
  //@HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor; // pode inicializar no ngOnInit()
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  	//this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  	this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
  	//this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  	//this.backgroundColor = 'blue'; // Outra forma de usar.
  	this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
  	//this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  	//this.backgroundColor = 'transparent';
  	this.backgroundColor = this.defaultColor;
  }

}
