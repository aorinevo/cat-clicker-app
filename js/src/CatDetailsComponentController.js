define(['CatClickerModel'],
function( model ){    
  var CatDetailsComponentController = function( $scope ) {
    var self = this;
    this.currentCat = model.catList[this.catIndex];    
    $scope.$on('switchCat', function( event, data ){   
      self.currentCat = data.cat;
    });
    $scope.$on('counterChanged', function( event, data){
      self.setClickCounter( data.numberOfClicks );
    });
    this.setClickCounter = function( clicks ){
      this.currentCat.numberOfClicks = clicks;
      this.getCatLevel();
    };   
    this.incrementClickCounter = function(){        
      this.currentCat.numberOfClicks++;
      this.getCatLevel();
    };
    this.getCatLevel = function(){
      var numberOfClicks = this.currentCat.numberOfClicks;
      if( numberOfClicks < 5){
        this.currentCat.level = "infant";
      } else if( numberOfClicks < 10) {
        this.currentCat.level = "teen";
      } else {
        this.currentCat.level = "adult";
      }
    };
  }
  
  CatDetailsComponentController.$inject = ['$scope'];
  
  return CatDetailsComponentController;
})