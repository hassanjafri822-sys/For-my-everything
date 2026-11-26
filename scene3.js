const canvas = document.getElementById("rainCanvas");
const ctx = canvas.getContext("2d");

const lastButton = document.getElementById("lastButton");

const finalMessage = document.getElementById("finalMessage");
const ending = document.getElementById("ending");

let rain = [];
let rainIntensity = 0.45;

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();


function createRain() {

    rain = [];

    const count = Math.floor(window.innerWidth * rainIntensity);

    for (let i = 0; i < count; i++) {

        rain.push({

            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,

            length: Math.random() * 15 + 8,
            speed: Math.random() * 4 + 3

        });

    }

}


function drawRain() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "rgba(180, 215, 230, 0.35)";
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

        if (drop.y > canvas.height) {

            drop.y = -20;
            drop.x = Math.random() * canvas.width;

        }

    });

    requestAnimationFrame(drawRain);

}


createRain();
drawRain();


lastButton.addEventListener("click", () => {

    lastButton.disabled = true;

    finalMessage.classList.add("visible");

    ending.classList.add("visible");

    canvas.style.opacity = "0.08";

    document.querySelector(".blue-glow").style.opacity = "1";

    setTimeout(() => {

        ending.scrollIntoView({

            behavior: "smooth",
            block: "center"

        });

    }, 500);

});