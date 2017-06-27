import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
	@Input() set appUnless(condition: boolean) { // set transforma propriedade em método.
		if (!condition) {
			this.vcRef.createEmbeddedView(this.templateRef); // createEmbeddedView cria a view na ViewContainer.
		}	else {
			this.vcRef.clear();
		}
	}

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
