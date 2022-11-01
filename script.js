const memoizedGetQuote = () => {
    let quotesCache;
    return async () => {
        try {
            const auth = document.getElementById('author');
            const quote = document.getElementById('quote');
            if(!quotesCache){
                console.log('making fetch call')
                let quoteArray = await fetch('https://type.fit/api/quotes');
                quotesCache = await quoteArray.json();
            } else {
                console.log('using cached quote')
            }
            const randNum = Math.floor(Math.random() *quotesCache.length);
            const randQuote = quotesCache[randNum];
            quote.innerText = randQuote.text;
            auth.innerText = randQuote.author;
        } catch(err) {
            console.log(err.message);
        }
    }
}

const getCoffeePic = async () => {
    const url = 'https://foodish-api.herokuapp.com/api/';
    const img = document.getElementById('img');
    try {
        const resp = await fetch(url);
        const imgData = await resp.json();
        const imgURL = imgData.image;
        img.setAttribute('src', imgURL);
    } catch(err) {
        console.log(err.message);
    }
}

const btn = document.getElementById("getQuote");
const coffeeBtn = document.getElementById("coffeeBtn");
btn.addEventListener("click", memoizedGetQuote());
coffeeBtn.addEventListener('click', getCoffeePic)
onload = memoizedGetQuote();