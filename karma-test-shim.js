// Turn on full stack traces in errors to help debugging
// Error.stackTraceLimit = Infinity;
Error.stackTraceLimit = 0;


jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000;

// // Cancel Karma's synchronous start,
// // we will call `__karma__.start()` later, once all the specs are loaded.
__karma__.loaded = function() {};


System.config({
  packages: {
    'base/dist': {
      defaultExtension: false,
      format: 'register',
      map: Object.keys(window.__karma__.files).
            filter(onlyAppFiles).
            reduce(function createPathRecords(pathsMapping, appPath) {
              var moduleName = appPath.replace(/^\/base\/dist\//, './').replace(/\.js$/, '');
              pathsMapping[moduleName] = appPath + '?' + window.__karma__.files[appPath]
              return pathsMapping;
            }, {})

      }
    }
});

Promise.all([
    System.import('angular2/src/platform/browser/browser_adapter'),
    System.import('angular2/platform/testing/browser'),
    System.import('angular2/testing')
]).then(function (modules) {
        var browser_adapter = modules[0];
        var providers = modules[1];
        var testing = modules[2];
        testing.setBaseTestProviders(
            providers.TEST_BROWSER_PLATFORM_PROVIDERS,
            providers.TEST_BROWSER_APPLICATION_PROVIDERS
        );
        browser_adapter.BrowserDomAdapter.makeCurrent();
    })
    .then(function () {
        return Promise.all(resolveTestFiles());
    })
    .then(function () {
        __karma__.start();
    }, function (error) {
        __karma__.error(error.stack || error);
    });


function filePath2moduleName(filePath) {
  return filePath.
           replace(/^\//, '').              // remove / prefix
           replace(/\.\w+$/, '');           // remove suffix
}


function onlyAppFiles(filePath) {
  return /^\/base\/dist\/.*\.js$/.test(filePath)
}


function onlySpecFiles(path) {
  return /^\/base\/dist\/.*\.js$/.test(path);
}



function resolveTestFiles() {
    return Object.keys(window.__karma__.files)  // All files served by Karma.
        .filter(onlySpecFiles)
        .map(function (moduleName) {
            // loads all spec files via their global module names (e.g.
            // 'base/app/vg-player/vg-player.spec')
            return System.import(moduleName);
        });
}