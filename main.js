let hp = 100;
let mp = 5;
let xpos = 0;
let ypos = 0;
let possibleEncounters = ["battle", "search"];
let possibleEnemies = ["energy"];
let treeId = 1;
// temporary, make it settable later on
let enemyTrees = [1, 2];
let powerTrees = [0, 0, 1, 1, 1];
let powerRequires = [0, 0, 0, 2, 2];
let powerNames = ["scratch", "resistance", "spark", "fire", "lightning"];
let powersPower = [15, 10, 25, 15, 50];
let powerEffect = ["1", "2", "1", "3", "1"];
let unlockedPowers = [0, 1];
let exclusivePowers = [-1, -1, -1, 3, 2];
let selectedPower = -1;
let equippedPowers = [0, 1, -1, -1]
//3 is burning, meaning that without specific items, it will apply a burning effect and perform 1 for the power
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

function closeSkill(){
  document.getElementById("skillTree").hidden = true;
}

function loadSkills(){
  console.log("loaded skills")
  console.log(powerTrees.indexOf(treeId))
  var i = powerTrees.indexOf(treeId);
  while(i != powerTrees.lastIndexOf(treeId)+1){
    console.log(i)
    if(unlockedPowers.includes(i)){
      console.log(powerNames[i] + " unlocked " + powerRequires[i])
      document.getElementById(powerNames[i]).style.backgroundColor = "white";
      //83: Nothing here
    }else if (unlockedPowers.includes(powerRequires[i]) || powerRequires[i] == 0){
      console.log(powerNames[i] + " loaded " + powerRequires[i])
      document.getElementById(powerNames[i]).style.backgroundColor = "lightgray";
    }
    i++;
  }
  if (equippedPowers[0] == -1) {
    document.getElementById("PowerTree1").innerHTML = " - - ";
    document.getElementById("Power1").innerHTML = " - - ";
  }else{
    document.getElementById("PowerTree1").innerHTML = powerNames[equippedPowers[0]];
    document.getElementById("Power1").innerHTML = powerNames[equippedPowers[0]];
  }
  if (equippedPowers[1] == -1) {
    document.getElementById("PowerTree2").innerHTML = " - - ";
    document.getElementById("Power2").innerHTML = " - - ";
  }else{
    document.getElementById("PowerTree2").innerHTML = powerNames[equippedPowers[1]];
    document.getElementById("Power2").innerHTML = powerNames[equippedPowers[1]];
  }
  if (equippedPowers[2] == -1) {
    document.getElementById("PowerTree3").innerHTML = " - - ";
    document.getElementById("Power3").innerHTML = " - - ";
  }else{
    document.getElementById("PowerTree3").innerHTML = powerNames[equippedPowers[2]];
    document.getElementById("Power3").innerHTML = powerNames[equippedPowers[2]];
  }
  if (equippedPowers[3] == -1) {
    document.getElementById("PowerTree4").innerHTML = " - - ";
    document.getElementById("Power4").innerHTML = " - - ";
  }else{
    document.getElementById("PowerTree4").innerHTML = powerNames[equippedPowers[3]];
    document.getElementById("Power4").innerHTML = powerNames[equippedPowers[3]];
  }
  console.log(equippedPowers)
}

function learnSkill(skillId){
  console.log(powerRequires[skillId])
  if(unlockedPowers.includes(skillId) == false){
  if(powerRequires[skillId] == 0){
    unlockedPowers[unlockedPowers.length] = skillId;
    loadSkills();
  }else if(unlockedPowers.includes(powerRequires[skillId])){
    unlockedPowers[unlockedPowers.length] = skillId;
    loadSkills();
  }}else{
    selectedPower = skillId;
    document.getElementById("powerSelectInfo").innerHTML = powerNames[skillId] + " Selected";
  }
  console.log(unlockedPowers);
}

function placePower(pos) {
  if (selectedPower != -1){
    if (equippedPowers.includes(selectedPower) == false){
      equippedPowers[pos] = selectedPower;
      console.log("succsessfully placed power" + selectedPower)
    }
    selectedPower = -1;
    document.getElementById("powerSelectInfo").innerHTML = "None Selected";
    loadSkills();
  }
}

function startBattle(enemy) {
  document.getElementById("combatMenu").hidden = false;
  document.getElementById("nonCombatMenu").hidden = true;
}

//what are you looking for? there is nothing down here
// - Spacetinker
// imagine if this gets anywhere, that'd be cool
// - Spacetinker again
// i should stop doing these little messages at the bottom
// - spacetinker again, i'm procrastinating and made 3 messages in a hour
