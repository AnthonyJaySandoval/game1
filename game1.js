var heroX = Number(document.getElementById("hero").getAttribute("x"));
var heroY = Number(document.getElementById("hero").getAttribute("y"));
var pokeballX = Number(document.getElementById("pokeball").getAttribute("x"));
var pokebally = Number(document.getElementById("pokeball").getAttribute("y"));
var eyeX = Number(document.getElementById("eye").getAttribute("x"));
var eyeY = Number(document.getElementById("eye").getAttribute("y"));
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

if (heroX >= pokeballX - 10 && heroX <= pokeballX + 10 && heroY >= pokeballY - 10 && heroY <= pkeballY + 10) {;
            document.getElementById("location").setAttribute("x", NumGen(75, 390));
            document.getElementById("location").setAttribute("y", NumGen(75, 160));
}
