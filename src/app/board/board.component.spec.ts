/* tslint:disable:no-unused-variable */
import {
  async, inject,
  ComponentFixture, TestBed
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exist', () => {
    expect(component).toBeDefined();
  });

  /** TODO: FAILING TEST AFTER MOVE TO ANGULAR 2*/
  /*
  it('should render a table', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.createAsync(BoardComponent)
      .then(() => {
        let element = fixture.nativeElement;
        let appComponent = fixture.componentInstance;
        fixture.detectChanges();
        expect(element.querySelectorAll('table').length).toBe(1);
      });
  }));*/

});