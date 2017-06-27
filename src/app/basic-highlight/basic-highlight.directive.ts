import { Directive, ElementRef, OnInit } from '@angular/core';
// Diretiva não tem view nem template.
// Incluir no app.module
@Directive({ // Place in template, attached to elements.
	selector: '[appBasicHighLight]' // Colchete torna atributo do elemento.
})
export class BasicHighLightDirective implements OnInit {
		/* Private torna o elemento propriedade da classe e automaticamente
 associa o valor do ElementRef a essa propriedade.
			Para acessar o elemento seria: elementRef.nativeElement, mas
			será usada implements OnInit.
 		*/
		constructor(private elementRef: ElementRef) {			
		}
		// Não é boa pratica usar assim para estilos. Ver better-highlight.
		ngOnInit() {
			this.elementRef.nativeElement.style.backgroundColor = 'purple';
		}
}
