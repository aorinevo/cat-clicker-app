jQuery(document).ready(function($){    
    //Model
    var model = {
      init: function(){
        this.currentCat = this.catList[0];
      },
      currentCat: {},
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
    
    //Views
    var catNameListView,
        catDetailView;
    
    catNameListView = {
      init: function(){   
        this.$catNameList = $('#cat-name-list');       
        this.render();
        this.bindEvents();
      },   
      bindEvents: function(){
        this.$catNameList.find('li').on('click',function(){
          controller.setCurrentCat( $('li').index(this) );
          controller.switchCatDetailView();
        });          
      },         
      render: function(){  
        var cats = controller.getCatList(),
            self = this;
        $.each( cats , function(key, cat){
          self.$catNameList.append('<ul><li id="'+ key +'">'+ cat.name +'</li></ul>');
        });
      }
    };

    catDetailView = {
      init: function(){
        var $catDetails = $('#cat-details'),
            $catName = $catDetails.find('#cat-name'),
            $catImage = $catDetails.find('#cat-image-container #cat-image'),
            $catClickCounter = $catDetails.find('#cat-click-counter');            
        
        $.extend(this, {$catDetails, $catName, $catImage, $catClickCounter});
            
        this.bindEvents( );
        this.render();
      },
      bindEvents: function( cat, $image ){
        var self = this;
        this.$catImage.on('click',function(){
          controller.incrementClickCounter();
          self.updateCounter( self.$catClickCounter );
        }); 
      },
      updateCounter: function( $counter ){
        $counter.html( controller.getNumberOfClicks() );
      },
      render: function(){
        var cat = controller.getCurrentCat();
        this.$catName.html( cat.name );
        this.$catImage.attr( 'src', cat.src );
        this.$catClickCounter.html( cat.numberOfClicks );        
      }
    };  

    //Controller
    var controller = {
      init: function( ){
        model.init();
        catNameListView.init( ); 
        catDetailView.init( );                
      },
      switchCatDetailView: function(){
        catDetailView.render();
      },
      getNumberOfClicks: function(){
        return this.getCurrentCat().numberOfClicks;
      },
      setNumberOfClicks: function( value ){
        var cat = this.getCurrentCat();
        cat.numberOfClicks = value;
        return cat.numberOfClicks;
      },
      incrementClickCounter: function(){
        this.setNumberOfClicks( this.getNumberOfClicks() + 1 );
      },
      getCurrentCat: function(){
        return model.currentCat;
      },
      setCurrentCat: function( index ){
        model.currentCat = model.catList[index];
        return model.currentCat;
      },
      getCatList: function(){
        return model.catList;
      }
    };
          
    controller.init( );
});