// Een variabel is een container waar een waarde in bewaard kan worden zodat deze later opnieuw
// gebruikt kan worden.
let question = "Was is de hoofdstad van Nederland?"
let answer = "Amsterdam"


const cardContent = document.getElementById("card-content");
const flipButton = document.getElementById("flip-button");

let flipped = true;

function flipCard() {
    if (flipped == true) {
        cardContent.innerText = answer;
        flipped = false;
    } else {
        cardContent.innerText = question;
        flipped = true;
    }
}

flipButton.addEventListener("click", flipCard);