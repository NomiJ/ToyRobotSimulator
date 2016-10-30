/* tslint:disable:no-unused-variable */
import { Directive, ElementRef, Input } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AutoGrowDirective } from './auto-grow.directive';

describe('Directive: AutoGrow', () => {
  it('should create an instance', () => {
    let el: ElementRef;
    let directive = new AutoGrowDirective(el,null);
    expect(directive).toBeTruthy();
  });
  it('onFocus Test', () => {
    let el: ElementRef;
    let directive = new AutoGrowDirective(el,null);
    directive.onFocus()
    expect(el.nativeElement.style.backgroundColor).toEqual("yellow")
  });
  it('onBlur Test', () => {
    let el: ElementRef;
    let directive = new AutoGrowDirective(el,null);
    directive.onBlur()
    expect(el.nativeElement.style.backgroundColor).toEqual("white")
  });
});
