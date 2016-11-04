define([ 'CatNameListController'],
function( CatNameListController ){
  var CatNameList = function() {
    var ddo = {
      restrict: "E",
      templateUrl: "templates/cat-name-list.html",
      controller: CatNameListController,    
      controllerAs: '$ctrl'
    };
    
    return ddo;
  }
  
  return CatNameList;
});
