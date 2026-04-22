var hp = 100;
var mp = 5;
var xpos = 0;
var ypos = 0;
var possibleEncounters = ["battle", "search"];
var possibleEnemies = ["water", "energy"]
var powertrees = [1, 2,]
var powernames = ["scratch", "resistance"]
var powerspower = [15, 10]
var powereffect = ["1", "2"]
//2 is defence in that the ability's power will increase block by that amount
//1 is jsut damage in that it will damage the opponent by that amount

function moveMap(x,y) {
  xpos = xpos + x;
  ypos = ypos + y;
  var xposf;
  var yposf;
  if(xpos > 0){
    xposf = Math.abs(xpos) + "E"
  }else if(xpos < 0){
    xposf = Math.abs(xpos) + "W"
  }else {
    xposf = 0;
  }
  if(ypos > 0){
    yposf = Math.abs(ypos) + "N"
  }else if(ypos < 0){
    yposf = Math.abs(ypos) + "S"
  }else {
    yposf = 0;
  }
  document.getElementById("mapPos").innerHTML = "pos: " + xposf + ", " + yposf;
}

function encounterStart() {
  var encounter = possibleEncounters[Math.random(1,possibleEncounters.length)];
  if(encounter == "battle") {
    startBattle(possibleEnemies[Math.random(1,possibleEnemies.length)])
  }
}

function characterMenu(){
  document.getElementById("characterMenuDiv").style.display = "grid";
}

function closeCharacter(){
  document.getElementById("characterMenuDiv").style.display = "none";
}

function startBattle(enemy) {
  document.getElementById("combatMenu").hidden = false;
  document.getElementById("nonCombatMenu").hidden = true;
}
