define([ ],
function( ){
  var RoutesConfig = function ( $stateProvider, $urlRouterProvider ) {
    
    $urlRouterProvider.otherwise("/");
    
    $stateProvider
      .state('default', {
        url: '/',
        templateUrl: 'templates/home.html'
      })    
    
      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html'
      })
  }  
  
  RoutesConfig.$inject = [ '$stateProvider', '$urlRouterProvider' ];
  
  return RoutesConfig;
});