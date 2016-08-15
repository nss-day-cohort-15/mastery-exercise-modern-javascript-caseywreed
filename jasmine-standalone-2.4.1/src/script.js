var RobotBattle = function (robotbattle) {

var _robotName = null
var _robotType = null
var _newPlayer = null
var _newEnemy = null

var Factory = {}

Factory.Robot = function() {
    this.purpose = "To fight to the death"
}
Factory.Robot.prototype.setAttack = function (amt) { this.attack = amt }
Factory.Robot.prototype.setHealth = function (amt) { this.health = amt }
Factory.Robot.prototype.dealDamage = function (target) {target.health -= this.attack}
// Factory.Robot.prototype.takeDamage = function (target) {target}

//SAVIORS
Factory.Savior = function () {
    this.manufacturer = "Dr. Light"
}
Factory.Savior.prototype = new Factory.Robot()

Factory.ArmCannon = function () {
    this.setAttack.call(this, 100)
    this.setHealth.call(this, 1000)
    this.weapon = "Mega Buster"
}
Factory.ArmCannon.prototype = new Factory.Savior()

Factory.Sword = function () {
    this.setAttack.call(this, 150)
    this.setHealth.call(this, 900)
    this.weapon = "Beam Sword"
}
Factory.Sword.prototype = new Factory.Savior()

// VILLAINS
Factory.Villain = function () {
    this.manufacturer = "Dr. Wily"
}
Factory.Villain.prototype = new Factory.Robot()

Factory.Electricity = function () {
    this.setAttack.call(this, 150)
    this.setHealth.call(this, 700)
    this.weapon = "Elec Beam"
}
Factory.Electricity.prototype = new Factory.Villain()

Factory.Blades = function () {
    this.setAttack.call(this, 175)
    this.setHealth.call(this, 700)
    this.weapon = "Rolling Cutter"
}
Factory.Blades.prototype = new Factory.Villain()

//ROGUES
Factory.Rogue = function () {
    this.manufacturer = "Unknown Future Scientist"
}
Factory.Rogue.prototype = new Factory.Robot()

Factory.Dog = function () {
    this.setAttack.call(this, 125)
    this.setHealth.call(this, 600)
    this.weapon = "Metal Fangs"
}
Factory.Dog.prototype = new Factory.Rogue()

Factory.Agent = function () {
    this.setAttack.call(this, 200)
    this.setHealth.call(this, 650)
    this.weapon = "Bass Rumble"
}
Factory.Agent.prototype = new Factory.Rogue()

var attackButton = `<button id="attackButton">ATTACK!</button>`

function beginBattle () {
    createNewRobot()
    createNewEnemy()
    renderRobots()
}

function createNewRobot () {
    console.log("createNewRobot running")
    let playerName = $("#robotName").val()
    let robotType = $("#robotType option:selected").val()
    _newPlayer = new Factory[robotType]
    _newPlayer.name = playerName
    console.log("New Player", _newPlayer)
}

function createNewEnemy () {
    console.log("createNewEnemy running")
    enemyNameOptions = ["Paul", "John", "George", "Ringo"]
    var enemyName = enemyNameOptions[Math.round(Math.random() * (enemyNameOptions.length - 1))];
    enemyTypeOptions = ["ArmCannon", "Sword", "Electricity", "Blades", "Dog", "Agent"]
    var enemyType = enemyTypeOptions[Math.round(Math.random() * (enemyTypeOptions.length - 1))];
    _newEnemy = new Factory[enemyType]
    _newEnemy.name = enemyName
    console.log("New Enemy", _newEnemy)
}

function renderRobots () {
    console.log("renderRobots is running")
    $("#robotOneOutput").html(`
        <section class="battleCard">
            <article class="roboStats">
                <p>Name: ${_newPlayer.name}</p>
                <p>Attack: ${_newPlayer.attack}</p>
                <p>Health: ${_newPlayer.health}</p>
            </article>
        </section>
    `)
    $("#buttonOutput").html(attackButton)
    $("#robotTwoOutput").html(`
        <section class="battleCard">
            <article class="roboStats">
                <p>Name: ${_newEnemy.name}</p>
                <p>Attack: ${_newEnemy.attack}</p>
                <p>Health: ${_newEnemy.health}</p>
            </article>
        </section>
    `)
    $("#attackButton").on("click", robotAttack)
}

function checkForHealth () {
    if (_newPlayer.health <= 0 || _newEnemy.health <= 0) {
        if (_newPlayer.health > _newEnemy.health) {
            alert(`You win, ${_newPlayer.name}! You've defeated ${_newEnemy.name} with your ${_newPlayer.weapon}!`)
        }   else {
            alert(`You lose, ${_newPlayer.name}... You were defeated by ${_newEnemy.name} and their ${_newEnemy.weapon}`)
        }
    }
}

function robotAttack () {
    _newPlayer.dealDamage(_newEnemy)
    _newEnemy.dealDamage(_newPlayer)
    renderRobots()
    checkForHealth()
}

//FUTURE NEEDS
//renderRobots to print stats

$("#buildButton").on("click", beginBattle)

}(RobotBattle || {});

// For Jasmine Testing only

function helloWorld() {
    return "Hello world!";
}

// Testing Section End
