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
        catDetailView,
        catCRUDView;
    
    catNameListView = {
      init: function(){   
        this.$catNameList = $('#cat-name-list ul');       
        this.render();        
      },      
      bindEvents: function(){
        this.$catNameList.find('li').on('click',function(){
          controller.setCurrentCat( $('li').index(this) );
          controller.switchCatDetailView();
        });          
      },    
      unbindEvents: function(){
        this.$catNameList.find('li').off('click');
      },          
      render: function(){  
        var cats = controller.getCatList(),
            self = this;
        this.unbindEvents();        
        this.$catNameList.html("");
        $.each( cats , function(key, cat){
          self.$catNameList.append('<li id="'+ key +'"><a>'+ cat.name +'</a></li>');
        });    
        this.bindEvents();    
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
    
    catCRUDView = {
      init: function(){
        var $catFormContainer = $('#cat-form-container'),
            $catForm = $('#cat-form'),
            $inputName = $catForm.find('input[name="name"]'),
            $inputSrc = $catForm.find('input[name="src"]'),
            $inputNumberOfClicks = $catForm.find('input[name="numberOfClicks"]');
        
        $.extend(this, {$catFormContainer, $catForm, $inputName, $inputSrc, $inputNumberOfClicks});
        this.render();
        this.bindEvents();
      },
      bindEvents: function(){        
        var self = this;
        this.$catForm.find('button.save').on('click', function( event ){          
          event.preventDefault();
          controller.saveCatDetails( self.$inputName.val(), self.$inputSrc.val(), self.$inputNumberOfClicks.val() );
        });
        this.$catFormContainer.find('button.toggle').on('click',function( event ){
          event.preventDefault();
          self.toggle();
        });
      },
      render: function(){
        var cat = controller.getCurrentCat();
        this.$inputName.attr('value', cat.name).val( cat.name );
        this.$inputSrc.attr('value', cat.src).val( cat.src );
        this.$inputNumberOfClicks.attr('value', cat.numberOfClicks).val( cat.numberOfClicks );        
      },
      save: function(){
        controller.saveCatDetails( );
      },
      toggle: function(){
        this.$catForm.toggle();
      }
    };

    //Controller
    var controller = {
      init: function( ){
        model.init();
        catNameListView.init( ); 
        catDetailView.init( ); 
        catCRUDView.init();               
      },
      switchCatDetailView: function(){
        catDetailView.render();
        catCRUDView.render();
      },
      saveCatDetails: function( name, src, numberOfClicks ){
        var cat = this.getCurrentCat();
        cat.name = name;
        cat.src = src;
        cat.numberOfClicks = numberOfClicks;
        catDetailView.render();
        catNameListView.render();
        catCRUDView.render();
      },
      getNumberOfClicks: function(){
        return parseInt(this.getCurrentCat().numberOfClicks);
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