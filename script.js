function Robot () {}
Robot.prototype.purpose = "To fight to the death"
Robot.prototype.setAttack = function (amt) { this.attack = amt }
Robot.prototype.setHealth = function (amt) { this.health = amt }
Robot.prototype.setAlignment = function (string) { this.alignment = string }

//SAVIORS
function Savior () {
    this.manufacturer = "Dr. Light"
}

Savior.prototype = new Robot()

//INSTANCES OF SAVIORS
var MegaMan = new Savior()
MegaMan.name = "Mega Man"
MegaMan.weapon = "Mega Buster"
MegaMan.setHealth(100)
MegaMan.setAttack(500)
MegaMan.setAlignment("Lawful Good")

var ProtoMan = new Savior()
ProtoMan.name = "Proto Man"
ProtoMan.weapon = "Proto Buster"
ProtoMan.setHealth(50)
ProtoMan.setAttack(1000)
ProtoMan.setAlignment("Chaotic Good")

console.log("Mega Man" , MegaMan, "Proto Man", ProtoMan)

//VILLAINS
function Villain () {}
Villain.prototype.manufacturer = "Dr. Wily"

Villain.prototype = new Robot ()

//INSTANCES OF VILLAINS
var ElecMan = new Villain()
ElecMan.name = "Elec Man"
ElecMan.weapon = "Elec Wave"
ElecMan.setHealth(80)
ElecMan.setAttack(700)
ElecMan.setAlignment("Chaotic Evil")

var GutsMan = new Villain()
GutsMan.name = "Guts Man"
GutsMan.weapon = "Heavy Arm"
GutsMan.setHealth(250)
GutsMan.setAttack(1250)
GutsMan.setAlignment("Neutral Evil")

console.log("Elec Man", ElecMan, "Guts Man", GutsMan)

//MINIBOSSES
function Miniboss () {}
Miniboss.prototype.manufacturer = "Unknown"

Miniboss.prototype = new Robot ()

//INSTANCES OF MINIBOSSES
var YellowDevil = new Miniboss()
YellowDevil.name = "Yellow Devil"
YellowDevil.weapon = "Eye Beam"
YellowDevil.setHealth(500)
YellowDevil.setAttack(1500)
YellowDevil.setAlignment("Lawful Neutral")

var Bass = new Miniboss()
Bass.name = "Bass"
Bass.weapon = "Bass Shot"
Bass.setHealth(75)
Bass.setAttack(350)
Bass.setAlignment("Chaotic Neutral")

console.log("Yellow Devil", YellowDevil, "Bass", Bass)



