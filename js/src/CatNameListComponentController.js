define([ 'CatClickerModel' ],
function( model ){ 
  var CatNameListComponentController = function( $rootScope ) {
    this.catList = model.catList;
    this.showAdminView = false;
  }
  CatNameListComponentController.$inject = ['$rootScope'];
  return CatNameListComponentController;
});

