// set up require
require.config( {
  baseUrl: '../src',
  paths: {
      // third party libraries
      angular: '../node_modules/angular/angular',
      bootstrap: '../node_modules/jquery/dist/jquery.min.js',
      jquery: '../node_modules/bootstrap/dist/js/bootstrap.js'
  },
  shim: {
      angular: {
          deps: [ 'jquery' ],
          exports: 'angular'
      }
  }      
}