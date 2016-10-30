import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
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
	constructor(private el: ElementRef) {
	}

	onFocus() {

		this.originalColor = this.el.nativeElement.style.backgroundColor;
		this.el.nativeElement.style.backgroundColor = "yellow";
		this.el.nativeElement.style.width = '350';
	}

	onBlur() {
		this.el.nativeElement.style.backgroundColor = this.originalColor || 'white';
		this.el.nativeElement.style.width = '250';

	}

}