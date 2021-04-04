Unit.prototype.isReadyToMove = function(maxDistanse) {
    if (this.distance && this.distance >= maxDistanse) {
        console.log(`${this.typeUser} может преодалеть ${maxDistanse}км`);
        return true;
    }
    if (this.distance && this.distance < maxDistanse) {
        console.log(`${this.typeUser}  не может преодалеть ${maxDistanse}км`);
        return false;
    } else {
        console.log(" Что то не передали");
    }

}



Unit.prototype.isReadyToFight = function() {
    if (this.health && this.maxHealth && (this.health >= this.maxHealth / 2)) {
        console.log(`${this.typeUser} может сражаться`);
        return true;
    }
    if (this.health && this.maxHealth && (this.health < this.maxHealth / 2)) {
        console.log(`${this.typeUser}  не может сражаться`);
        return false;
    }
}



Unit.prototype.restore = function() {
    if (this.health && this.maxHealth && (this.health < this.maxHealth / 2)) {
        this.health = this.maxHealth;
    }

}


Unit.prototype.clone = function() {
    let b = new Unit(this.type, this.health, this.maxHealth, this.distance);

    return b;
}

let user1 = new Unit("comandor", 60, 100, 65);
let user2 = new Unit("doctor", 10, 100, 50);


user1.isReadyToMove(65);
user1.isReadyToFight();
user1.restore();
user1.isReadyToFight();

//**************************************************************** */

function Army(defaultUnits) {
    this.units = [];
    if (defaultUnits) this.combineUnits(defaultUnits);

}

Army.prototype.combineUnits = function(defaultUnits) {
    for (let i = 0; i < defaultUnits.length; i++) {
        this.units.push(defaultUnits[i]);
    }
}


let army = new Army([user1, user2]);
Army.prototype.isReadyToMove = function(distanceMax) {
    this.units.forEach(element => {
        if (element.distance < distanceMax) {
            console.log("армия не пройдет дистанцию");
            return false;
        }
        console.log("армия прйдет")
        return true;
    });

}


Army.prototype.isReadyToFight = function() {

    this.units.some(function(element) {
        if (element.health < element.maxHealth / 2) {
            console.log(false)
            return false;
        }
    })
}

Army.prototype.restore = function() {
    this.units.forEach(element => {
        if (element.health < element.maxHealth / 2) {
            element.health = element.maxHealth;
        }
    });
}
Army.prototype.getReadyToMoveUnits = function(moveDostanse) {
    let armyMove = [];
    this.units.forEach(element => {
        if (element.distance >= moveDostanse) {
            armyMove.push(element);
            console.log(armyMove);
            return armyMove;
        }
    });
}

Army.prototype.cloneUnit = function() {
    let clonArmy = [];
    this.units.forEach(element => {
        clonArmy.push(element);
        console.log(clonArmy);
        return clonArmy;
    });
}
army.isReadyToMove(100);
army.isReadyToFight();
army.restore();
console.log(army);
army.getReadyToMoveUnits(65)
army.cloneUnit();


//********************************************************************* */

// Animal.prototype.isValidCoordinate = function(coordinate) {
//     return coordinate >= 0 && coordinate <= this.gameFieldWidth;
// }

Animal.prototype.moveLeft = function() {

    if (this.x >= 10) {
        this.x = this.x - this.step;
    }


}

Animal.prototype.moveRight = function() {
    this.x = this.x + this.step;

}
Animal.prototype.jump = function() {
    this.y = this.y + this.x
}
Animal.prototype.render = function() {
    console.log(animal);
}

let animal = new Animal("man", 10, 1, 1);
animal.render();
animal.moveRight()
animal.render();
animal.moveLeft();
animal.jump();
animal.render();
/******************************************************************** */

let mammal = {
    milk() {
        if (this.half === "women") {
            console.log("дам молока");
            return true;
        } else {
            console.log("Я вообщето не даю молока ; )");
            return false;
        }
    }
};
mammal.__prto__ = animal;
mammal.half = "man";
mammal.milk();


function Raccoon(honesty) {
    this.honesty = honesty;

}

let raccoon = new Raccoon(2);

raccoon.__prto__ = animal;


Raccoon.prototype.thief = function() {
    if (this.honesty === 2 && this.half === "man") {
        console.log("украл")
        return false;
    } else {
        console.log("не украл");
        return false;
    }
};
raccoon.half = "man";



raccoon.thief();