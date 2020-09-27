let dragging = false;

let mouseX = -1;
let mouseY = -1;

let posX = 0;
let posY = 0;

document.addEventListener("mousemove", mouseMove);
document.addEventListener("mousedown", (e) => {
    dragging = true;
    mouseX = e.pageX;
    mouseY = e.pageY;
});
document.addEventListener("mouseup", () => dragging = false);


function mouseMove(e) {
    if (!dragging) return;
    if (mouseX >= 0 && mouseY >= 0) {
        posX -= mouseX - e.pageX;
        posY -= mouseY - e.pageY;
        render(node);
    }
    mouseX = e.pageX;
    mouseY = e.pageY;
}