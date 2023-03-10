const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// // draw rectangle
// ctx.beginPath();
// ctx.rect(20, 40, 50, 50); // .rect(x, y, width, height)
// ctx.fillStyle = "#FF0000"; // .fillStyle property stores a color that will be used by the fill()
// ctx.fill();
// ctx.closePath();

// //draw circle
// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI * 2, false); //.arc(x, y, radius, start angle, end angle, direction of drawing)
// /* 
// --- x, y - coordinates for the center of the circle
// --- angle in radians
// --- direction: clockwise - false (default), anti-clockwise - true; this parameter is optional
// */
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();

// // draw another rectangle using stroke instead of fill
// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx.stroke();
// ctx.closePath();

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
const ballRadius = 10;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
}

setInterval(draw, 10);