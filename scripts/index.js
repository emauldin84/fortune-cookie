const jokeArray = [
    "I wear a stethoscope so that in a medical emergency I can teach people a valuable lesson about assumptions.",
    "I adopted my dog from a blacksmith. As soon as we got home he made a bolt for the door.",
    "How many hipsters does it take to change a lightbulb? Oh, it's a really  obscure number. You've probably never heard of it.",
    "Without geometry life is pointless.",
    "Have you heard of the band 1023MB? They haven't got a gig yet.",
    "Why do bees have sticky hair? Because they use honey combs!",
    "Nurse: Doctor, there's a patient that says he's invisible. Doctor: Well, tell him I can't see him right now!"
];




url = 'http://loremricksum.com/api/?paragraphs=10&quotes=1'
fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(quoteData) {
    console.log(quoteData['data']); // or function to append to page
    
    const jokeDisplay = document.querySelector('[data-output]');
    const button = document.querySelectorAll('[data-input]');
    // const allbuttons = document.querySelectorAll('[data-input]')
    
    let seatNumber = 1;
    function respondToButtonClick() {
        seatNumber += 1;
        jokeDisplay.classList.remove('hidden');
    
        if (seatNumber === quoteData['data'].length) {
            seatNumber = 1;
        }
        
        jokeDisplay.textContent = quoteData['data'][seatNumber];
        // console.log(quoteData.length);
        return seatNumber;
    };
    
    function attachClickEvent(eachButton) {
        eachButton.addEventListener('click', respondToButtonClick);
    };
    
    button.forEach(attachClickEvent);
    
    // Bonus #1: Previous/Next. Add reverse order button
    const buttonReverse = document.querySelectorAll('[data-input-reverse]');
    
    // let seatNumberReverse = seatNumber;
    function respondToButtonReverse() {
        seatNumber -= 1;
        jokeDisplay.classList.remove('hidden');
        
        if (seatNumber === 0) {
            seatNumber = quoteData['data'].length - 1
        };
        jokeDisplay.textContent = quoteData['data'][seatNumber];
    
        console.log(seatNumber);
    
    };
    
    function attachReverseClickEvent(eachButton) {
        eachButton.addEventListener('click', respondToButtonReverse)
    };
    
    buttonReverse.forEach(attachReverseClickEvent);
    
    // Bonus #2: Random Fortune
    const buttonRandom = document.querySelectorAll('[data-input-random]');
    
    function respondToButtonRandom() {
        // set seatNumber to random number between 0 and quoteData.length -1
        seatNumber = Math.floor(Math.random() * (quoteData['data'].length - 1));
        jokeDisplay.classList.remove('hidden');
        
        jokeDisplay.textContent = quoteData['data'][seatNumber];
    
        console.log(seatNumber);
    };
    
    function attachRandomClickEvent(eachButton) {
        eachButton.addEventListener('click', respondToButtonRandom);
    
    };
    buttonRandom.forEach(attachRandomClickEvent);








})