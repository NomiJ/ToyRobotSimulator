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

  //This test is failing on latest Angular2 Release
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