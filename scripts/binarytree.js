var buttonClicked = false;
function sleep(ms) {

    if (ms)
        return new Promise(resolve => setTimeout(resolve, ms));

    const waitFor = (resolve) => {
        if (buttonClicked) {
            resolve();
            buttonClicked = false;
        } else
            setTimeout(() => waitFor(resolve), 25);
    }

    return new Promise(waitFor);
}

class binaryNode {

    constructor(key, left, right) {
        this.key = key;
        this.left = left;
        this.right = right;
    }

    async searchKey(key, code=codeSelection[1]) {
        return await eval("(async () => {" + code + "})()");
    }

    executeOnNodes(action) {
        action(this);
        if (this.left) this.left.executeOnNodes(action);
        if (this.right) this.right.executeOnNodes(action);
    }

    seen(v) {
        this.checked = v;
        if (v)
            this.draw(ctx, this.x, this.y, "#000", "#22AA22");
    }

    printNodes(ctx, x, y, marginX=100, marginY=100) {
        this.x = x;
        this.y = y;

        if (this.left) {
            this.drawLines(ctx, x, y, -marginX, marginY, "#fff");
            this.left.printNodes(ctx, x - marginX, y + marginY, marginX/2);
        }
        if (this.right) {
            this.drawLines(ctx, x, y, marginX, marginY, "#fff");
            this.right.printNodes(ctx, x + marginX, y + marginY, marginX/2);
        }
        
        this.draw(ctx, x, y, "#000", (!this.checked) ? "#fff" : "#22AA22");
    }

    drawLines(ctx, x, y, marginX, marginY, color) {
        ctx.strokeStyle = "#fff";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + marginX, y + marginY);
        ctx.stroke();
    }

    draw(ctx, x, y, textColor, color) {

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y, 50, 0, 2 * Math.PI);
        ctx.fill();

        ctx.textBaseline = 'middle';
        ctx.textAlign = "center";
        ctx.fillStyle = textColor;
        ctx.font = "30px Arial";
        ctx.fillText(this.key, x, y);
    }
}