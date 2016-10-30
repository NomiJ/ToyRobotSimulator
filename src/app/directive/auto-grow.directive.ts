import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({/* Attribute */
	selector: '[autoGrow]',
	host: {
		'style': 'width:250px;%',
		'(focus)': 'onFocus()',  //binding this focus to onFocusEvent
		'(blur)': 'onBlur()'//binding this blur to onBlurEvent
	}
})

export class AutoGrowDirective {

	originalColor: string = '';
	//private keyword will create an el field and set it with incoming value
	constructor(private _el: ElementRef, private _renderer: Renderer) {
	}

	onFocus() {

		this.originalColor = this._el.nativeElement.style.backgroundColor || 'white';
		this._renderer.setElementStyle(this._el.nativeElement, 'backgroundColor', 'yellow');
		this._renderer.setElementStyle(this._el.nativeElement, 'width', '350px');


	}

	onBlur() {
		this._renderer.setElementStyle(this._el.nativeElement, 'backgroundColor', this.originalColor);
		this._renderer.setElementStyle(this._el.nativeElement, 'width', '250px');

	}

}