var heroX = Number(document.getElementById("hero").getAttribute("x"));
var heroY = Number(document.getElementById("hero").getAttribute("y"));
var foodX = Number(document.getElementById("pokeball1").getAttribute("x"));
var foodY = Number(document.getElementById("pokeball1").getAttribute("y"));
document.addEventListener("keydown", function(e) {
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

})

if (heroX > foodX && heroX < foodX + 50 && heroY > foodY && heroY < foodY + 50) {
             document.getElementById("pokeball").setAttribute("x", Number(75, 390));
             document.getElementById("pokeball").setAttribute("y", Number(75, 160));
             console.log("overlap")
 }
