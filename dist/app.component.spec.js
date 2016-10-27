System.register(["angular2/testing", "./app.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, app_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            testing_1.describe('AppComponent', function () {
                testing_1.beforeEachProviders(function () { return [
                    app_component_1.AppComponent
                ]; });
                testing_1.it('should exist', testing_1.inject([app_component_1.AppComponent], function (appComponent) {
                    testing_1.expect(appComponent).toBeDefined();
                }));
                testing_1.it('should render a header', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(app_component_1.AppComponent)
                        .then(function (fixture) {
                        var element = fixture.nativeElement;
                        var appComponent = fixture.componentInstance;
                        fixture.detectChanges();
                        testing_1.expect(element.querySelectorAll('h1').length).toBe(1);
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=app.component.spec.js.map