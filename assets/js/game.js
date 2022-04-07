var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//log multiple values into console
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto the foolish", "Amy Android", "Robo Trumble"];

for (var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
}

var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("The fight has begun!");
};
var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? enter FIGHT or SKIP to choose")

if (promptFight === "fight" || promptFight === "FIGHT") {

//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;
// Log a resulting message to the console so we know that it worked.
window.alert(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
);

if (enemyHealth <=0) {
    window.alert(enemyName + " has died!");
}
else{
    window.alert(enemyName + " still has " + enemyHealth + " remaining.");
}
// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;
// Log a resulting message to the console so we know that it worked.
window.alert(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);
}else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("are you sure you'd like to quit?");
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!")
    playerMoney = playerMoney - 2;
    }else{
        fight();
    }
}else{
    window.alert("You need to choose a valid option. Try again!");
    fight();
};

// fight();