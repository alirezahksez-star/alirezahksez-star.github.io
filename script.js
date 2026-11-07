
const typingElement = document.getElementById("typing-text");

const messages = [
    "Building with Python & Django",
    "Developing RESTful APIs",
    "Exploring Backend Architecture",
    "Learning. Building. Improving."
];

let messageIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentMessage = messages[messageIndex];

    if (!deleting) {

        typingElement.textContent =
            currentMessage.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentMessage.length) {
            deleting = true;
            setTimeout(typeEffect, 1800);
            return;
        }

    } else {

        typingElement.textContent =
            currentMessage.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {
            deleting = false;
            messageIndex = (messageIndex + 1) % messages.length;
        }
    }

    setTimeout(typeEffect, deleting ? 35 : 75);
}

typeEffect();
