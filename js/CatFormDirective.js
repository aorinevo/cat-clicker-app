define([ 'CatFormController' ],
function( CatFormController ){
  var CatForm = function() {
    var ddo = {
      restrict: "E",
      templateUrl: "templates/cat-form.html",
      controller: CatFormController,    
      controllerAs: '$ctrl',    
      scope: {}
    };  
    
    return ddo;
  }
  
  return CatForm;
});