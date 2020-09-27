function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class binaryNode {

    constructor(key, left, right) {
        this.key = key;
        this.left = left;
        this.right = right;
    }

    async searchKey(key) {
        await sleep(500);

        let node;

        if (this.key == key) node = this;
        this.draw(ctx, this.x, this.y, "#000", "#22AA22");

        if (!node && this.left)
            node = await this.left.searchKey(key);
        

        if (!node && this.right)
            node = await this.right.searchKey(key);
        
        return node;
    }

    printNodes(ctx, x, y, marginX=100, marginY=100) {
        this.x = x;
        this.y = y;

        if (this.left) {
            this.drawLines(ctx, x, y, marginX, marginY, "#fff");
            this.left.printNodes(ctx, x + marginX, y + marginY, marginX/2);
        }
        if (this.right) {
            this.drawLines(ctx, x, y, -marginX, marginY, "#fff");
            this.right.printNodes(ctx, x - marginX, y + marginY, marginX/2);
        }
        
        this.draw(ctx, x, y, "#000", "#fff");
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