$( function() {
    var divs = document.getElementsByClassName("icon");
    for(var i = 0; i < divs.length; i++){
      $(divs[i]).draggable();
   }
  });