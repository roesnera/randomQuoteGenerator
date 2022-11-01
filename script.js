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












async function getQuote() {
    try {
        const auth = document.getElementById('author');
        const quote = document.getElementById('quote');
        let quoteArray = await fetch('https://type.fit/api/quotes');
        quoteArray = await quoteArray.json();
        const randNum = Math.floor(Math.random() *quoteArray.length);
        const randQuote = quoteArray[randNum];
        quote.innerText = randQuote.text;
        auth.innerText = randQuote.author;
    } catch(err) {
        console.log(err.message);
    }
}

const btn = document.getElementById("getQuote");
btn.addEventListener("click", memoizedGetQuote());
onload = memoizedGetQuote();