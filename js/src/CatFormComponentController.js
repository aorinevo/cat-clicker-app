define([ 'CatClickerModel' ],
function( model ){    
  var CatFormController = function( $scope, $rootScope ) {
    var self = this;
    this.showAdminView = false;
    this.currentCat = model.catList[0];  
    $scope.$on('switchCat', function( event, data ){    
      self.currentCat = data.cat;
    });
    this.toggleAdminView = function (){
      this.showAdminView = !this.showAdminView;
    }
    this.setClickCounter = function(){
      $rootScope.$broadcast( 'counterChanged', { numberOfClicks: this.currentCat.numberOfClicks });
    }
  }
  CatFormController.$inject = ['$scope', '$rootScope'];
  return CatFormController;
});