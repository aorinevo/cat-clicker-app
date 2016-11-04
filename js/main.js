require.config({
    baseUrl: "js/",
    paths: {
        angular: '../node_modules/angular/angular'
    },
    shim: {
        "angular": {
            exports: "angular"
        }
    }
});

require(['angular', 'ngCatClickerApp'],
    function () {
        angular.bootstrap(document, ['catClickerApp']);
    }
);