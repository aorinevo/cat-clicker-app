define([ 'CatDetailsController' ],
function( CatDetailsController ){
  function CatDetails() {
    var ddo = {
      restrict: "E",
      templateUrl: "templates/cat-details.html",
      controller: CatDetailsController,    
      controllerAs: '$ctrl',    
      scope: {}
    };
    
    return ddo;
  }
  
  return CatDetails;
});
