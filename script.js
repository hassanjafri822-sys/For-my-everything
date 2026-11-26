const openingScreen = document.getElementById("openingScreen");
const startButton = document.getElementById("startButton");

const canvas = document.getElementById("rainCanvas");
const ctx = canvas.getContext("2d");

let rain = [];

function resizeCanvas() {

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    createRain();

}

function createRain() {

    rain = [];

    const count = Math.floor(window.innerWidth * 0.45);

    for (let i = 0; i < count; i++) {

        rain.push({

            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,

            length: Math.random() * 18 + 8,
            speed: Math.random() * 4 + 3

        });

    }

}

function drawRain() {

    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    ctx.strokeStyle = "rgba(190, 220, 235, 0.3)";
    ctx.lineWidth = 0.7;

    rain.forEach(drop => {

        ctx.beginPath();

        ctx.moveTo(drop.x, drop.y);

        ctx.lineTo(
            drop.x - 1,
            drop.y + drop.length
        );

        ctx.stroke();

        drop.y += drop.speed;

        if (drop.y > window.innerHeight) {

            drop.y = -20;
            drop.x = Math.random() * window.innerWidth;

        }

    });

    requestAnimationFrame(drawRain);

}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();
drawRain();

/* OPEN SCENE 1 */

startButton.addEventListener("click", () => {

    if (startButton.disabled) return;

    startButton.disabled = true;

    openingScreen.classList.add("roll-away");

    setTimeout(() => {

        window.location.href = "scene1.html";

    }, 1300);

});