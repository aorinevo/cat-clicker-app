module.exports = function(grunt) {
  grunt.initConfig({
    /* ... */

    // !! This is the name of the task ('requirejs')
    requirejs: {
      compile: {

        // !! You can drop your app.build.js config wholesale into 'options'
        options: {          
          baseUrl: "src", 
          out: 'target/mainApp.js',                             
          paths: {
            angular: '../node_modules/angular/angular',
            jquery: '../node_modules/jquery/dist/jquery.min',
            bootstrap: '../node_modules/bootstrap/dist/js/bootstrap',
            uiRouter: '../node_modules/angular-ui-router/release/angular-ui-router.min'
          },
          shim: {
              "angular": {
                  deps: ["jquery"],
                  exports: "angular"
              },
              "uiRouter": {
                  deps: ["angular"],
                  exports: "uiRouter"
              },
              "bootstrap": {
                  deps: ["jquery"],
                  exports: "bootstrap"
              }
          },
          include: [ "main" ],          
          optimize: 'uglify',                    
          findNestedDependencies: true          
        }
      }
    }
    /* ... */
  });

  // !! This loads the plugin into grunt
  grunt.loadNpmTasks('grunt-contrib-requirejs');

};