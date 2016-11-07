define([ 'CatClickerController' ],
function( CatClickerController ){
  var RoutesConfig = function ( $stateProvider, $urlRouterProvider ) {
    
    $urlRouterProvider.otherwise("/cat-clicker/0");
    
    $stateProvider
      .state('default', {
        url: '/cat-clicker/{catIndex}',
        templateUrl: 'templates/home.html',
        controller: CatClickerController,
        controllerAs: 'catClickerController',
        resolve: {
          catIndex: [ '$stateParams', function($stateParams){            
            return $stateParams.catIndex;
          }]
        }
      })    
  }  
  
  RoutesConfig.$inject = [ '$stateProvider', '$urlRouterProvider' ];
  
  return RoutesConfig;
});