function updateModifiers(){
  var strScore = document.getElementById("strScore").value
  document.getElementById("strMod").value = Math.floor((strScore - 10)/2);
    var dexScore = document.getElementById("dexScore").value
  document.getElementById("dexMod").value = Math.floor((dexScore - 10)/2);
    var conScore = document.getElementById("conScore").value
  document.getElementById("conMod").value = Math.floor((conScore - 10)/2);
    var intScore = document.getElementById("intScore").value
  document.getElementById("intMod").value = Math.floor((intScore - 10)/2);
    var wisScore = document.getElementById("wisScore").value
  document.getElementById("wisMod").value = 
Math.floor((wisScore - 10)/2);
    var chaScore = document.getElementById("chaScore").value
  document.getElementById("chaMod").value = Math.floor((chaScore - 10)/2);
}
function updateProfBonus(){
  var playerLevel = parseInt(document.getElementById("playerLevel").value);
  
  if (playerLevel >= 17){
document.getElementById("profB").value = 6;
} else if (playerLevel >= 13){
    document.getElementById("profB").value = 5;
} else if (playerLevel >= 9){
    document.getElementById("profB").value = 4;
} else if (playerLevel >= 5){
    document.getElementById("profB").value = 3;
} else {
    document.getElementById("profB").value = 2;
}