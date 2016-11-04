(function(){
  angular.module( 'catClickerApp', [])    
    .controller( 'CatDetailsContoller', CatDetailsController )
    .controller( 'CatNameListContoller', CatDetailsController )
    .controller( 'CatFormContoller', CatDetailsController )
    .directive( 'catDetails', CatDetails )
    .directive( 'catNameList', CatNameList )
    .directive( 'catForm', CatForm );

var model = {
  catList: [
    {
      name: "Cat1",
      src: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
      numberOfClicks: 0
    },
    {
      name: "Cat2",
      src: "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
      numberOfClicks: 0
    },
    {
      name: "Cat3",
      src: "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454",
      numberOfClicks: 0
    },
    {
      name: "Cat4",
      src: "https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/4e34feee0acdc38a?w=400&h=400",
      numberOfClicks: 0
    },
    {
      name: "Cat5",
      src: "https://pbs.twimg.com/profile_images/1245113943/Larry_the_cat2.jpg",
      numberOfClicks: 0
    }
  ]
};

function CatDetails() {
  var ddo = {
    restrict: "E",
    templateUrl: "templates/cat-details.html",
    controller: CatDetailsController,
    bindToController: true,
    controllerAs: '$ctrl',    
    scope: {
      name: '<',
      src: '<',
      numberOfClicks: '<'
    }
  };
  
  return ddo;
}

function CatNameList() {
  var ddo = {
    restrict: "E",
    templateUrl: "templates/cat-name-list.html",
    controller: CatNameListController,
    bindToController: true,
    controllerAs: '$ctrl',    
    scope: {
      name: '<',
      src: '<',
      numberOfClicks: '<'
    }
  };
  
  return ddo;
}

function CatForm() {
  var ddo = {
    restrict: "E",
    templateUrl: "templates/cat-form.html",
    controller: CatNameListController,
    bindToController: true,
    controllerAs: '$ctrl',    
    scope: {
      name: '<',
      src: '<',
      numberOfClicks: '='
    }
  };  
  
  return ddo;
}

CatDetailsController.$inject = ['$scope'];
function CatDetailsController( $scope ) {
  var self = this;
  this.catList = model.catList;
  this.currentCat = model.catList[0];    
  $scope.$on('switchCat', function( event, data ){    
    self.currentCat = data.cat;
  });
  this.incrementClickCounter = function(){        
    this.currentCat.numberOfClicks++;
  };
}

CatNameListController.$inject = ['$rootScope'];
function CatNameListController( $rootScope ) {
  this.catList = model.catList;
  this.currentCat = model.catList[0];
  this.showAdminView = false;
  this.switchCatDetailView = function ( index ) {
    $rootScope.$broadcast( 'switchCat', {cat: model.catList[ index ]} );
  }
}

function CatFormController() {
  this.catList = model.catList;
  this.currentCat = model.catList[0];
  this.showAdminView = false;
  this.toggleAdminView = function (){
    this.showAdminView = !this.showAdminView;
  }
}

})();