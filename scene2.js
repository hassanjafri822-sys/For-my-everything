const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openLetter");
const continueButton = document.getElementById("continueBtn");

let letterOpened = false;

openButton.addEventListener("click", () => {

    if (letterOpened) return;

    letterOpened = true;

    envelope.classList.add("open");

    openButton.disabled = true;

    setTimeout(() => {

        continueButton.classList.add("visible");

    }, 1400);

});


continueButton.addEventListener("click", () => {

    continueButton.disabled = true;

    document.body.style.transition = "opacity 1s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "../scene3.html";

    }, 1000);

});