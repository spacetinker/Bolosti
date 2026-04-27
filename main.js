let hp = 100;
let mp = 5;
let xpos = 0;
let ypos = 0;
let possibleEncounters = ["battle", "search"];
let possibleEnemies = ["energy"];
let treeId = 1;
// temporary, make it settable later on
let enemyTrees = [1, 2];
let powertrees = [0, 0, 1, 1];
let powerrequires = [0, 0, 0, 1];
let powernames = ["scratch", "resistance", "spark", "fire"];
let powerspower = [15, 10, 25, 15];
let powereffect = ["1", "2", "1", "3"];
let unlockedPowers = [0, 1];
//3 is burning, meaning that without specific items, it will apply a burning effect and perform 1
//2 is defence in that the ability's power will increase block by that amount
//1 is jsut damage in that it will damage the opponent by that amount

function moveMap(x,y) {
  xpos = xpos + x;
  ypos = ypos + y;
  let xposf;
  let yposf;
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
  let encounter = possibleEncounters[Math.random(1,possibleEncounters.length)];
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

function openSkills(){
  loadSkills();
  document.getElementById("skillTree").hidden = false;
}

function loadSkills(){
  console.log("loaded skills")
  console.log(powertrees.indexOf(treeId))
  var i = powertrees.indexOf(treeId);
  while(i != powertrees.lastIndexOf(treeId)+1){
    console.log(i)
    if(unlockedPowers.includes(i)){
      console.log(powernames[i] + " unlocked " + powerrequires[i])
      document.getElementById(powernames[i]).style.backgroundColor = "white";
    }else if (unlockedPowers.includes(powerrequires[i]) || powerrequires[i] == 0){
      console.log(powernames[i] + " loaded " + powerrequires[i])
      document.getElementById(powernames[i]).style.backgroundColor = "lightgray";
    }
    i++;
  }
}

function learnSkill(skillId){
  console.log(powerrequires[skillId])
  if(unlockedPowers.includes(skillId) == false){
  if(powerrequires[skillId] == 0){
    unlockedPowers[unlockedPowers.length] = skillId;
    loadSkills();
  }else if(unlockedPowers.includes(powerrequires[skillId])){
    unlockedPowers[unlockedPowers.length] = skillId;
    loadSkills();
  }}
  console.log(unlockedPowers);
}
//83 : nothing here
function startBattle(enemy) {
  document.getElementById("combatMenu").hidden = false;
  document.getElementById("nonCombatMenu").hidden = true;
}
