define([ 'CatClickerModel' ],
function( model ){    
  var CatFormComponentController = function( $scope, $rootScope ) {
    var self = this;
    this.showAdminView = false;
    this.currentCat = model.catList[ this.catIndex ];  
    this.toggleAdminView = function (){
      this.showAdminView = !this.showAdminView;
    }
    this.setClickCounter = function(){
      $rootScope.$broadcast( 'counterChanged', { numberOfClicks: this.currentCat.numberOfClicks });
    }
  }
  CatFormComponentController.$inject = [ '$scope', '$rootScope' ];
  return CatFormComponentController;
});