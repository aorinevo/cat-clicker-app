define([
  'angular',     
  'CatDetailsComponentController',
  'CatNameListComponentController',  
  'CatFormComponentController'
],
function( angular, CatDetailsComponentController, CatNameListComponentController, CatFormComponentController ){
  angular.module( 'catClickerApp', [])
    .component( 'catDetails', {
      templateUrl: "templates/cat-details.html",
      controller: CatDetailsComponentController      
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