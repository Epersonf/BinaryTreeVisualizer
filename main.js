var canvas = document.getElementById("root-canvas");
var ctx = canvas.getContext("2d");

var codeField = document.getElementById("code-field");
var editor = CodeMirror.fromTextArea(codeField, {
    lineNumbers: true
});

var node = new binaryNode(1,
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

render(node);