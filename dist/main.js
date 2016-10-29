System.register(['angular2/platform/browser', './app.component', './comm.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, comm_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (comm_service_1_1) {
                comm_service_1 = comm_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [comm_service_1.CommService]);
        }
    }
});
//# sourceMappingURL=main.js.map