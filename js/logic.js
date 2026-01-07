const cardContent = document.getElementById("card-content");
const flipButton = document.getElementById("flip-button");

function changeContent() {
    cardContent.innerText = "Antwoord is 4!"
}

flipButton.addEventListener("click", changeContent);