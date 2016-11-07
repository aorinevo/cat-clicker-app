define([],
function( ){
      
  var CatClickerController = function( catIndex ) {    
    this.catIndex = catIndex;    
  };
  
  CatClickerController.$inject = ['catIndex'];
  
  return CatClickerController;
})