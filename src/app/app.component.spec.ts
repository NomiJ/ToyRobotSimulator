/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {GLOBALS} from './shared/globals'
import { BoardComponent } from './board/board.component';
import { CommandComponent } from './command/command.component';
import { ManualComponent } from './manual/manual.component';
import { AutoGrowDirective } from './directive/auto-grow.directive';

describe('App: RobotSimulator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, BoardComponent, ManualComponent,CommandComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title as per GLOBALS.APP_NAME `, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(GLOBALS.APP_NAME);
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(GLOBALS.APP_NAME);
  }));
});
