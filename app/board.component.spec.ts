import {
    it,
    describe,
    expect,
    beforeEach,
    beforeEachProviders,
    inject,
    TestComponentBuilder,
    ComponentFixture,
    injectAsync
} from "angular2/testing";
import {BoardComponent} from "./board.component";

describe('BoardComponent', () => {

    beforeEachProviders(() => [
        BoardComponent
    ]);

    it('should exist', inject([BoardComponent], (appComponent:BoardComponent) => {
        expect(BoardComponent).toBeDefined();
    }));

    it('should render a table', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
        return tcb.createAsync(BoardComponent)
            .then((fixture:ComponentFixture) => {
                let element = fixture.nativeElement;
                let appComponent = fixture.componentInstance;
                fixture.detectChanges();
                expect(element.querySelectorAll('table').length).toBe(1);
            });
    }));
    
});