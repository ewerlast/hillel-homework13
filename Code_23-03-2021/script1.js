"use strict";

const human = {
    name: "Peter Parker",
    age: 21,
    eats: true,
    walk: function() {
        console.log(`${this.name} is walking`);
    }
}

// human.walk();

const developer = {
    writesCode: true,
    work: function() {
        console.log(`${this.name} is writing code...`);
    }
};

developer.__proto__ = human;
// developer.__proto__ = "hello";
// developer.__proto__ = null;

developer.walk();

developer.name = "Garry";

developer.work();

//

function Developer(name, age) {
    // create {}
    // {} is put into this
    // this.__proto__ = Developer.prototype

    this.name = name;
    this.age = age;

    this.work = function() {
        console.log(`Developer ${this.name} is working`);
    }

    // this.hasOwnProperty = function() {
    //     return true;
    // }

    // this.walk = function() {
    //     console.log("HAHA");
    // }
    // return this
}

Developer.prototype = human;

const dev = new Developer("Vasya", 29);

console.log(dev);

dev.work();
dev.walk();

// const r = /[a-zA-Z]/.test("123");
// const r2 = /[$#$%]/.test("a");

// Object.assign()

for (const key in dev) {
    if (dev.hasOwnProperty(key)) {
        const value = dev[key];
        console.log(`Key: ${key}, Value: ${value}, Type: ${typeof value}`);
    }
}

// Button
// function Button(text, className) {
//     this.element = document.createElement("button");
//     this.element.innerText = text;
//     this.element.className = className;
//
//     this.render = function() {
//         document.body.appendChild(this.element);
//     }
//
//     this.increment = function() {
//         const value = +this.element.innerText;
//         this.element.innerText = value + 1;
//     }
//
//     this.decrement = function() {
//         const value = +this.element.innerText;
//         this.element.innerText = value - 1;
//     }
// }

// const myButton = new Button("0", "btn");
// myButton.render();
//
// myButton.increment();
// myButton.increment();
// myButton.increment();

// console.log(myButton);
// document.body.appendChild(myButton.element);

function Text(text) {
    this._element = document.createElement("p");
    this._element.innerText = text;

    this.render = function() {
        document.body.appendChild(this._element);
    }

    this.increment = function() {
        const value = +this._element.innerText;
        this._element.innerText = value + 1;
    }

    this.decrement = function() {
        const value = +this._element.innerText;
        if (value !== 0) {
            this._element.innerText = value - 1;
        }
    }
}

function Button(text, className) {
    this._element = document.createElement("button");
    this._element.innerText = text;
    this._element.className = className;

    this.render = function() {
        document.body.appendChild(this._element);
    }

    this.onClick = function(callback) {
        this._element.addEventListener("click", callback);
    }

    // this.disable = function() {
    //     this._element.disabled = true;
    // }
}

Button.prototype.disable = function() {
    this._element.disabled = true;
}

const text = new Text("0");

// text._element = null;

const incrementButton = new Button("Increment", "btn");
const decrementButton = new Button("Decrement", "btn");

text.render();
incrementButton.render();
decrementButton.render();

// incrementButton._element.addEventListener("click", () => text.increment());
// decrementButton._element.addEventListener("click", () => text.decrement());
incrementButton.onClick(() => text.increment());
// decrementButton.onClick(() => text.decrement());
decrementButton.onClick(text.decrement.bind(text));

// incrementButton.disable();
// setTimeout(() => {
//     incrementButton.disable();
// }, 3000);