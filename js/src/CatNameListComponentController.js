define([ 'CatClickerModel' ],
function( model ){ 
  var CatNameListController = function( $rootScope ) {
    this.catList = model.catList;
    this.showAdminView = false;
    this.switchCatDetailView = function ( index ) {
      $rootScope.$broadcast( 'switchCat', {cat: model.catList[ index ]} );
    }  
  }
  CatNameListController.$inject = ['$rootScope'];
  return CatNameListController;
});

