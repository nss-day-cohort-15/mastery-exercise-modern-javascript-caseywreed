function Robot () {}

Robot.prototype.purpose = "To fight to the death"
Robot.prototype.setAttack = function (amt) { this.attack = amt }
Robot.prototype.setHealth = function (amt) { this.health = amt }


//SAVIORS
function Savior () {}
Savior.prototype.alignment = "Lawful Good"

function MegaMan () {}
MegaMan.prototype.weapon = "Mega Buster"

function ProtoMan () {}
ProtoMan.prototype.weapon = "Proto Buster"

//VILLAINS
function Villain () {}
Villain.prototype.alignment = "Chaotic Evil"

CutMan.prototype = Object.create(Villain.prototype)
ElecMan.prototype = Object.create(Villain.prototype)

//MINIBOSSES
function Miniboss () {}
Miniboss.prototype.alignment = "Neutral Evil"

YellowDevil.prototype = Object.create(Miniboss.prototype)
Bass.prototype = Object.create(Miniboss.prototype)

Savior.prototype = Object.create(Robot.prototype)
Villain.prototype = Object.create(Robot.prototype)
Miniboss.prototype = Object.create(Robot.prototype)

MegaMan.prototype = Object.create(Savior.prototype)
ProtoMan.prototype = Object.create(Savior.prototype)

var Roll = Object.create(Savior.prototype)

console.log(Roll)