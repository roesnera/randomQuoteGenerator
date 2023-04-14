// fetch the resource using fetch()
async function fetchResource() {
    try {
        let url = 'https://type.fit/api/quotes';
        let resource = await fetch(url);
        // parse the resource into an object
        let data = await resource.json();
        // grab a random entry from the returned object
        
        // generate a random number between 0 and the length of my arrays
        let randomIndex = Math.floor(Math.random() * data.length);
        // select the element corresponding to that random number
        let element = data[randomIndex];
        // update the index.html page with the randomly selected entry
        const quoteP = document.getElementById('quote');
        const authH3 = document.querySelector('#author');
        quoteP.innerHTML = element.text;
        authH3.innerText = element.author;
    } catch(robert) {
        console.error(robert);
    }
}

let myButton = document.getElementById('getQuote');
myButton.onclick = fetchResource;
