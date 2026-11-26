const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", () => {

    continueBtn.disabled = true;

    document.body.style.transition = "opacity 1s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "../scene2.html";
    }, 1000);

});