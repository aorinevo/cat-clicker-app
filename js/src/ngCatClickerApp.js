define([
  'angular',   
  'uiRouter',
  'RoutesConfig',
  'CatDetailsComponentController',
  'CatNameListComponentController',  
  'CatFormComponentController'
],
function( angular, uiRouter, RoutesConfig, CatDetailsComponentController, CatNameListComponentController, CatFormComponentController ){
  angular.module( 'catClickerApp', [ 'ui.router' ])
    .config( RoutesConfig )
    .component( 'catDetails', {
      templateUrl: "templates/cat-details.html",
      controller: CatDetailsComponentController,
      bindings: {
        catIndex: '<'
      }    
    })    
    .component( 'catNameList', {    
      templateUrl: "templates/cat-name-list.html",
      controller: CatNameListComponentController      
    })
    .component( 'catForm', {
      templateUrl: "templates/cat-form.html",
      controller: CatFormComponentController
    });    
});