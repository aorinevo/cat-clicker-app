require.config({
    baseUrl: "js/src",
    paths: {
      angular: '../node_modules/angular/angular',
      jquery: '../node_modules/jquery/dist/jquery.min',
      bootstrap: '../node_modules/bootstrap/dist/js/bootstrap'
    },
    shim: {
        "angular": {
            deps: ["jquery"],
            exports: "angular"
        },
        "bootstrap": {
            deps: ["jquery"],
            exports: "bootstrap"
        }
    }
});

require(['angular', 'ngCatClickerApp'],
    function () {
        angular.bootstrap(document, ['catClickerApp']);
    }
);