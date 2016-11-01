(function(){
  $(document).ready(function(){        
    var catList = {
      cat1: {
        name: "Cat1",
        src: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
        numberOfClicks: 0
      },
      cat2: {
        name: "Cat2",
        src: "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
        numberOfClicks: 0
      },
      cat3: {
        name: "Cat3",
        src: "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454",
        numberOfClicks: 0
      },
      cat4: {
        name: "Cat4",
        src: "https://d1wn0q81ehzw6k.cloudfront.net/additional/thul/media/4e34feee0acdc38a?w=400&h=400",
        numberOfClicks: 0
      },
      cat5: {
        name: "Cat5",
        src: "https://pbs.twimg.com/profile_images/1245113943/Larry_the_cat2.jpg",
        numberOfClicks: 0
      }
    };
    
    function createCatNameList(){
      $.each(catList, function(key, cat){
        $('#cat-name-list').append('<ul><li id="'+ key +'">'+ cat.name +'</li></ul>');
        $('#cat-name-list li').on('click',function(){
          var _cat = $(this).attr('id');
          $('#cat-image').html('<div>'+ catList[_cat].name +'</div><img class=id="'+ key +'" src="'+ catList[_cat].src +'"/><div id="'+ key +'-counter">'+catList[_cat].numberOfClicks+'</div>');
          $('#cat-image img').on('click',function(){
            catList[_cat].numberOfClicks++
            $('#'+key+'-counter').html(catList[_cat].numberOfClicks);
          });
        });    
      }); 
    };
        
    createCatNameList();
  });
})();