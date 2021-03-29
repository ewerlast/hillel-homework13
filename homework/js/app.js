Unit.prototype.isReadyToMove = function(maxDistance) {
    this.maxDistance = maxDistance;

    if (this.maxDistance > 100) {
        console.log(`${this.type} не пройдет дистанцию ${this.maxDistance}`);
        return;
    }
    console.log(`${this.type}  пройдет дистанцию ${this.maxDistance}`);
}


Unit.prototype.isReadyToFight = function(health, maxDistance) {
    this.health = health;
    this.maxDistance = maxDistance;

    // если солдат прошел большое расстояние, то потерял здоровье
    if (this.maxDistance > 50) {
        this.health = this.health - 20;
    }
    if (this.health < 50) {
        console.log(`${this.type} не может сражаться`);
        return this.type;
    }
    console.log(`${this.type}  может сражаться`);
    return this.type;

}


Unit.prototype.restore = function() {
    if (this.health < 50) {
        return this.health = 100;
    }
    return this.health;
}
Unit.prototype.clone = function() {
    let b = new Unit(this.type, this.health, this.maxHealth, this.maxDistance);

    return b;
}



let unit1 = new Unit("programmer", 100, 100, 100);
let unit2 = new Unit("comandor", 75, 60, 100);


//      *****************************************************   

function Army(defaultUnits) {
    this.units = [];
    if (defaultUnits) {
        combineUnits(this.units, defaultUnits);
        console.log(this.units)
        return this.units;
    }
}

combineUnits.prototype = Army;


function combineUnits(arr, obj) {
    arr.push(obj);
    return arr;
}

Army.prototype.run = function() {
    console.log(this.units);
}
let army = new Army(unit1);
army.run();