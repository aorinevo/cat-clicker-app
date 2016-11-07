define([ 'CatClickerModel' ],
function( model ){ 
  var CatNameListComponentController = function( $rootScope ) {
    this.catList = model.catList;
    this.showAdminView = false;
    this.switchCatDetailView = function ( index ) {
      $rootScope.$broadcast( 'switchCat', {cat: model.catList[ index ]} );
    }  
  }
  CatNameListComponentController.$inject = ['$rootScope'];
  return CatNameListComponentController;
});

