var hp = 100;
var mp = 5;
var xpos = 0;
var ypos = 0;

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
  }else if(xpos < 0){
    yposf = Math.abs(ypos) + "S"
  }else {
    yposf = 0;
  }
  document.getElementById("mapPos").innerHTML = "pos: " + xposf + ", " + yposf;
}

function startBattle() {
  document.getElementById("combatMenu").hidden = false;
}
