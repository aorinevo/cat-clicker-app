define([
  'angular', 
  'CatDetailsController', 
  'CatNameListController', 
  'CatFormController', 
  'CatDetailsDirective',
  'CatNameListDirective',
  'CatFormDirective'
],
function( angular, CatDetailsController, CatNameListController, CatFormController, CatDetailsDirective, CatNameListDirective, CatFormDirective ){
  angular.module( 'catClickerApp', [])    
    .controller( 'CatDetailsContoller', CatDetailsController )
    .controller( 'CatNameListContoller', CatNameListController )
    .controller( 'CatFormContoller', CatFormController )
    .directive( 'catDetails', CatDetailsDirective )
    .directive( 'catNameList', CatNameListDirective )
    .directive( 'catForm', CatFormDirective );
})();