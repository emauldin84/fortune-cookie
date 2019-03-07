const jokeArray = [
    " ",
    "I wear a stethoscope so that in a medical emergency I can teach people a valuable lesson about assumptions.",
    "I adopted my dog from a blacksmith. As soon as we got home he made a bolt for the door.",
    "How many hipsters does it take to change a lightbulb? Oh, it's a really  obscure number. You've probably never heard of it.",
    "Without geometry life is pointless.",
    "Have you heard of the band 1023MB? They haven't got a gig yet.",
    "Why do bees have sticky hair? Because they use honey combs!",
    "Nurse: Doctor, there's a patient that says he's invisible. Doctor: Well, tell him I can't see him right now!"
];


const jokeDisplay = document.querySelector('[data-output]');
const button = document.querySelectorAll('[data-input]');

function respondToButtonClick(array) {
    
    for (let i = 0; i <= array.length; i++) {
        jokeDisplay.textContent = array[i];
        
        if (i === array.length + 1) {
            i = 1;
        };
    };
    
    
};

function attachClickEvent(eachButton) {
    eachButton.addEventListener('click', respondToButtonClick(jokeArray));
};

button.forEach(attachClickEvent);