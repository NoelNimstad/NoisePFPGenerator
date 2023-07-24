/* --- CONFIGURATION --- */

const FIFTYFIFTY = true; // split the colors into C1 C2 left and C3 C4 right

const C1 = "#f00"; // first colour
const C2 = "#0f0"; // second colour
const C3 = "#00f";
const C4 = "#0ff";

const W = 10; // ammount of pixels (width)
const H = 10; // ammount of pixels (height)
const SCALE = 100; // scale of the image

/* --- CODE --- */

const canvas = document.createElement("canvas");
canvas.width = W * SCALE;
canvas.height = H * SCALE;
document.body.append(canvas);

const context = canvas.getContext("2d");

for(let x = 0; x < W; x++) { for(let y = 0; y < H; y++)
{
    let random = Math.floor(Math.random() + 0.5) == 1;
    context.fillStyle = (FIFTYFIFTY && x >= W / 2) ? (random ? C3 : C4) : (random ? C1 : C2);
    context.fillRect(x * SCALE, y * SCALE, SCALE, SCALE);
}};