function createSquare() {
    const square = document.createElement("div");
    square.style.width = "200px";
    square.style.height = "200px";
    square.style.border = "1px solid black";

    return square;
}

const squares = [];
for (let i = 0; i < 5; i++) {
    squares.push(createSquare());
}

squares.forEach(square => {

    square.addEventListener("click", onSquareClick);
    // document.body.appendChild(square);
});

const colors = ["green", "red", "blue"];

function onSquareClick(event) {
    const color = event.target.style.backgroundColor;
    const index = colors.findIndex(c => c === color) + 1;

    const nextColor = colors[index] ?? colors[0];
    event.target.style.backgroundColor = nextColor;
}

function createColorElement(colors) {
    // const colors = [
    //     "blue",
    //     "yellow",
    //     "green"
    // ];

    const area = document.createElement("div");
    area.style.border = "1px solid black";
    area.style.width = "50px";
    area.style.height = "50px";
    area.className = colors.shift();

    area.addEventListener("click", function (event) {
        colors.push(event.target.className);
        event.target.className = colors.shift();
    });

    return area;
}

const colorClasses = [
    "blue",
    "yellow",
    "green"
];

function createColorContainer() {
    const container = document.createElement("div");
    for (let i = 0; i < 5; i++) {
        const classes = Object.assign([], colorClasses);
        const area = createColorElement(classes);

        container.appendChild(area);
    }

    container.style = "display: flex";
    return container;
}

const colorContainer = createColorContainer();
// document.body.appendChild(colorContainer);

//
