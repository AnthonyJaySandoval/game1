function randomNumber(min,max){
 return Math.floor(Math.random()*(max-min+1)+min);
}

var pc = 0;
var pokeballText = document.getElementById("pc");

document.addEventListener("keydown", function(r){
  var hero = document.getElementById("hero");
  var positionX = Number(hero.getAttribute("x"));
  var positionY = Number(hero.getAttribute("y"));

  var pokeball1 = document.getElementById("pokeball1");
  var pokeball1X = Number(pokeball1.getAttribute("x"));
  var pokeball1Y = Number(pokeball1.getAttribute("y"));
  var pokeball1Width = 60;
  var pokeball1Height = 60;


  if(r.keyCode == 37){
    positionX = positionX - 15;
    hero.setAttribute("x", positionX);
  }

  else if(r.keyCode == 39){
    positionX = positionX + 15;
    hero.setAttribute("x", positionX);
  }

  if(r.keyCode == 38){
    positionY = positionY - 15;
    hero.setAttribute("y", positionY);
  }

  else if(r.keyCode == 40){
    positionY = positionY + 15;
    hero.setAttribute("y", positionY);
  }

  if (positionX > pokeball1X && positionX < pokeball1X + pokeball1Width){
    if(positionY > pokeball1Y && positionY < pokeball1Y + pokeball1Height){
      var newP = randomNumber(40,300);
      pokeball1.setAttribute("x", 0);
      pokeball1.setAttribute("y", newP);
      pc += 1;
    }
    }

  pokeballText.textContent ="pokeballs obtained: " + pc;
});

document.addEventListener("keydown", function(a){
  var hero = document.getElementById("hero");
  var positionX = Number(hero.getAttribute("x"));
  var positionY = Number(hero.getAttribute("y"));

  var pokeball2 = document.getElementById("pokeball2");
  var pokeball2X = Number(pokeball2.getAttribute("x"));
  var pokeball2Y = Number(pokeball2.getAttribute("y"));
  var pokeball2Width = 60;
  var pokeball2Height = 60;


  if(a.keyCode == 37){
    positionX = positionX - 15;
    hero.setAttribute("x", positionX);
  }

  else if(a.keyCode == 39){
    positionX = positionX + 15;
    hero.setAttribute("x", positionX);
  }

  if(a.keyCode == 38){
    positionY = positionY - 15;
    hero.setAttribute("y", positionY);
  }

  else if(a.keyCode == 40){
    positionY = positionY + 15;
    hero.setAttribute("y", positionY);
  }

  if (positionX > pokeball2X && positionX < pokeball2X + pokeball2Width){
    if(positionY > pokeball2Y && positionY < pokeball2Y + pokeball2Height){
      var newP = randomNumber(45,300);
      pokeball2.setAttribute("x", 0);
      pokeball2.setAttribute("y", newP);
      pc += 1;
    }
    }

  pokeballText.textContent ="pokeballs obtained: " + pc;
});
