var heroX = Number(document.getElementById("hero").getAttribute("x"));
var heroY = Number(document.getElementById("hero").getAttribute("y"));
if(e.keyCode == 37 || e.keyCode == 65){
    heroX -=10;
 document.getElementById("hero").setAttribute("x", heroX)

  }
  else if(e.keyCode == 39|| e.keyCode == 68){
    heroX +=10;
 document.getElementById("hero").setAttribute("x", heroX)


  }
  if(e.keyCode == 40 || e.keyCode == 83){
    heroY +=10;
 document.getElementById("hero").setAttribute("y", heroY)


  }
  else if(e.keyCode == 38|| e.keyCode == 87){
   heroY -=10;
 document.getElementById("hero").setAttribute("y", heroY)
  }
