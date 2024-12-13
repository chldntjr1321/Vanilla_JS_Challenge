const quotes = [
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt",
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker",
    },
    {
        quote: "I think, therefore I am",
        author: "Rene Descartes",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S.Lewis",
    },
    {
        quote: "In the end, it's not the years in you life that count. It's the life in your years.",
        author: "Abraham Lincoln",
    },
    {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra",
    },
    {
        quote: "Never give up",
        author: "Winston Churchill",
    },
    {
        quote: "Don't let yesterday take up too much of today.",
        author: "Will Rogers",
    },
    {
        quote: "Act as if what you do makes a difference. It does.",
        author: "William James",
    },
]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const quoteBox = document.querySelector("#quote");

function showQuote() {
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = `『 ${todaysQuote.quote} 』_ `;
    author.innerText = todaysQuote.author;
    quoteBox.classList.remove(HIDDEN_CLASSNAME);
}