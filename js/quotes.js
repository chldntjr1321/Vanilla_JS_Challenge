const quotes = [
    {
        quote: "Carpe diem",
        author: "Horace",
    },
    {
        quote: "Be yourself",
        author: "Oscar Wilde",
    },
    {
        quote: "I think, therefore I am",
        author: "Rene Descartes",
    },
    {
        quote: "Less is more",
        author: "Robert Browning ",
    },
    {
        quote: "This too shall pass",
        author: "Medieval Persian Sufi poets",
    },
    {
        quote: "Life goes on",
        author: "Unknown",
    },
    {
        quote: "Dare to dream",
        author: "Unknown",
    },
    {
        quote: "Never give up",
        author: "Winston Churchill",
    },
    {
        quote: "Just do it",
        author: "Nike slogan",
    },
    {
        quote: "Know thyself",
        author: "Socrates",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;