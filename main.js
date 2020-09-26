var canvas = document.getElementById("root-canvas");
var ctx = canvas.getContext("2d");
document.addEventListener("keydown", keyDown);
let posX = 0;
let posY = 0;
const speed = 15;

node = new binaryNode(1,
    new binaryNode(2, 
        new binaryNode(4, null, null),
        new binaryNode(5, null, null)),
    new binaryNode(3, null, null)
);

function clearCanvas() {
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
}

function printNode(node) {
    node.printNodes(ctx, canvas.width/2 + posX, 50 + posY, canvas.width/4);
}

function render(node) {
    clearCanvas();
    printNode(node);
}

function keyDown(e) {
    switch(e.key) {
        case "a":
            posX -= speed;
            break;
        case "d":
            posX += speed;
            break;
        case "w":
            posY -= speed;
            break;
        case "s":
            posY += speed;
            break;
    }
    render(node);
}

render(node);