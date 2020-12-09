$( function() {
    var divs = document.getElementsByClassName("folder");
    for(var i = 0; i < divs.length; i++){
      $(divs[i]).draggable();
   }
  });