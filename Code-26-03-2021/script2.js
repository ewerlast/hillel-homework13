const a = {
    id: 1,
    name: "Peter Parker",
    incrementId: function() {
      this.id++;
    },
    toString: function() {
        console.log("toString");

        return `Object, Id: ${this.id}`;
    }
}

const b = {
    id: 2,
    __proto__: a
}

const r = b.hasOwnProperty("name");
console.log(r)

b.incrementId();

console.log(a.id, b.id)
// console.log(String(a));

const r1 = Object.keys(b);
console.log(r1);

//
const PLAYER_STEP = 10;
const GAME_FIELD_WIDTH = 100;
const GAME_FIELD_HEIGHT = 100;

function Player(type, step, gameFieldWidth, gameFieldHeight) {
    this.type = type;
    this.step = step;
    this.gameFieldWidth = gameFieldWidth;
    this.gameFieldHeight = gameFieldHeight;

    this.x = 0;
    this.y = 0;

    this.renderElement = document.querySelector("#playerInfo");
}

Player.prototype.isValidCoordinate = function(coordinate) {
    return coordinate >= 0 && coordinate <= this.gameFieldWidth;
}

Player.prototype.moveLeft = function() {
    const x = this.x - this.step;
    if (this.isValidCoordinate(x)) {
        this.x = x;
    }
}

Player.prototype.moveRight = function() {
    const x = this.x + this.step;
    if (this.isValidCoordinate(x)) {
        this.x = x;
    }
}

Player.prototype.moveDown = function() {
    const y = this.y + this.step;
    if (this.isValidCoordinate(y)) {
        this.y = y;
    }
}

Player.prototype.moveUp = function() {
    const y = this.y - this.step;
    if (this.isValidCoordinate(y)) {
        this.y = y;
    }
}

Player.prototype.toString = function() {
    return JSON.stringify({
        type: this.type,
        x: this.x,
        y: this.y
    }, null, 2);
}

Player.prototype.render = function() {
    if (this.renderElement !== null) {
        this.renderElement.innerHTML = this.toString();
    }
}

const p = new Player("warrior", PLAYER_STEP, GAME_FIELD_WIDTH, GAME_FIELD_HEIGHT);
p.render();

document.addEventListener("keydown", event => {
    const key = event.key;

    switch (key) {
        case "ArrowRight":
        case "D":
        case "d": {
            p.moveRight();
            p.render();
            break;
        }
        case "ArrowLeft":
        case "A":
        case "a": {
            p.moveLeft();
            p.render();
            break;
        }
        case "ArrowDown":
        case "S":
        case "s": {
            p.moveDown();
            p.render();
            break;
        }
        case "ArrowUp":
        case "W":
        case "w": {
            p.moveUp();
            p.render();
            break;
        }
        default: break;
    }
});

const p1 = new p.constructor("magic man", PLAYER_STEP, GAME_FIELD_WIDTH, GAME_FIELD_HEIGHT);
console.log(p1);

function Car() {
    this.type = "Mazda 3";
}

Car.prototype = {
    move: function () {},
    constructor: Car
}

const c = new Car();
console.log(c);

const c1 = new c.constructor();
console.log(c1);

const ar = [];
console.log(ar);

const n = new Number(1);
const n1 = 1;

console.log(n);

String.prototype.log = function() {
    console.log(`String.log: ${this}`);
}

String.prototype.log = function() {
    console.log(`${this.toUpperCase()}`);
}

"abc".log();

function doIt() {
    return Array.prototype.join.call(arguments, "-");
}

const r4 = doIt(1, 2, 3, 4, 5);
console.log(r4);

const e = {
    id: 1,
    show: function () {
        console.log(this.id)
    }
}

const f = {
    name: "Dima"
}

Object.setPrototypeOf(f, e);
console.log(f, Object.getPrototypeOf(f));

const f1 = Object.create(null);
console.log(f1);

f1["__proto__"] = 1;

console.log(f1);