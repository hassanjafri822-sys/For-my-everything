const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");

const button = document.getElementById("forgiveBtn");
const opening = document.querySelector(".opening-screen");

let width;
let height;
let drops = [];

function resizeCanvas() {

    const ratio = Math.min(window.devicePixelRatio || 1, 2);

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * ratio;
    canvas.height = height * ratio;

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    createRain();
}


function createRain() {

    drops = [];

    for (let i = 0; i < 230; i++) {

        drops.push({

            x: Math.random() * width,
            y: Math.random() * height,

            length: Math.random() * 20 + 10,
            speed: Math.random() * 7 + 5,

            opacity: Math.random() * 0.35 + 0.1

        });

    }

}


function drawRain() {

    ctx.clearRect(0, 0, width, height);

    drops.forEach(drop => {

        ctx.beginPath();

        ctx.strokeStyle =
            `rgba(190, 215, 235, ${drop.opacity})`;

        ctx.lineWidth = 1;

        ctx.moveTo(drop.x, drop.y);

        ctx.lineTo(
            drop.x - 2,
            drop.y + drop.length
        );

        ctx.stroke();

        drop.y += drop.speed;
        drop.x -= 0.8;

        if (drop.y > height) {

            drop.y = -drop.length;
            drop.x = Math.random() * width;

        }

    });

    requestAnimationFrame(drawRain);

}


window.addEventListener("resize", resizeCanvas);

resizeCanvas();
drawRain();


/* THE SCREEN ROLLS UP */

button.addEventListener("click", () => {

    if (button.disabled) return;

    button.disabled = true;

    opening.classList.add("roll-away");

});
