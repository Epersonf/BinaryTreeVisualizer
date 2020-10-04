var canvas = document.getElementById("root-canvas");
var ctx = canvas.getContext("2d");

function clearCanvas() {
    ctx.beginPath();
    ctx.fillStyle = "#444";
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fill();
}

function printNode(node) {
    buttonClicked = false;
    node.printNodes(ctx, canvas.width/2 + posX, 50 + posY, canvas.width/4);
}

function render(nodeToRender=node) {
    clearCanvas();
    printNode(nodeToRender);
}

function resetNode(nodeToRender=node) {
    nodeToRender.executeOnNodes((e) => e.seen(false));
    render(node);
}

render(node);