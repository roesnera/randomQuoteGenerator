import quotes from './dummyAPI.js';


function displayRandomQuote() {
    // generate a random number between 0 and the length of my arrays
    let randomIndex = Math.floor(Math.random() * quotes.length);
    // select the element corresponding to that random number
    let element = quotes[randomIndex];
    // update the index.html page with the randomly selected entry
    const quoteP = document.getElementById('quote');
    const authH3 = document.querySelector('#author');
    quoteP.innerHTML = element.text;
    authH3.innerText = element.author;
}


let myButton = document.getElementById('getQuote');
myButton.onclick = displayRandomQuote;
