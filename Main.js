let hp = 100;
let mp = 5;
let xpos = 0;
let ypos = 0;
let possibleEncounters = ["battle", "search"];
let possibleEnemies = ["water", "energy"];
const enemyTrees = [1, 2]
const powertrees = [0, 0, 1, 1]
const powerrequires = [0, 0, 0, 1];
let powernames = ["scratch", "resistance", "spark", "fire"];
let powerspower = [15, 10, 25, 15];
let powereffect = ["1", "2", "1", "3"];
let unlockedPowers = [];
//3 is burning, meaning that without specific items, it will apply a burning effect and perform 1
//2 is defence in that the ability's power will increase block by that amount
//1 is just damage in that it will damage the opponent by that amount

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

function closeIntro() {
  document.getElementById("intro").hidden = true;
  document.getElementById("nonCombatMenu").hidden = false;
}

function characterMenu(){
  document.getElementById("characterMenuDiv").style.display = "grid";
}

function closeCharacter(){
  document.getElementById("characterMenuDiv").style.display = "none";
}

function learnSkill(skillId){
  if(powerrequires[skillId].includes("/")){
    if(unlockedPowers.includes(powerrequires[skillId]) == true) {
      var i = 0;
      //placeholder since i want to get the intial code down first
    }
  }else if(powerrequires[skillId] != 0) {
    if(unlockedPowers.includes(powerrequires[skillId]) == true) {
      unlockedPowers[unlockedPowers.length] = skillId;
      document.getElementById().style.background-color = "lightgray";
    }
  }else{
    unlockedPowers[unlockedPowers.length] = skillId;
    document.getElementById().style.background-color = "lightgray";
  }
}

function startBattle(enemy) {
  document.getElementById("combatMenu").hidden = false;
  document.getElementById("nonCombatMenu").hidden = true;
}
