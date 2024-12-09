const range = document.querySelector('#range');
const inputRange = document.querySelector('#range input');
const guess = document.querySelector('#guess');
const inputGuess = document.querySelector('#guess input');
const result = document.getElementById("result");
const div = document.querySelector("div");


const RANGE_OF_NUMBER = "Max_number";
const NUMBER_WHAT_YOU_GUESS = "number_guess";

let savedNumberRange;
let Answer;
let myAnswer;

function setRange(event) {
    //event.preventDefault();
    const rangenumber = inputRange.value;
    localStorage.setItem(RANGE_OF_NUMBER, rangenumber);
    savedNumberRange = parseInt(localStorage.getItem(RANGE_OF_NUMBER));
    Answer = Math.floor(Math.random()*((savedNumberRange) + 1));
    localStorage.setItem("Answer", Answer);
}

function GuessTheNumber(event) {
    event.preventDefault();
    const guessnumber = inputGuess.value;
    localStorage.setItem(NUMBER_WHAT_YOU_GUESS, guessnumber);
    myAnswer = parseInt(localStorage.getItem(NUMBER_WHAT_YOU_GUESS));
    setRange();
    
    div.innerText = `You chose : ${myAnswer}, the machine chose : ${Answer}`;
    if(myAnswer === Answer) {
        result.innerText = "YOU WON!!";
    } else {
        result.innerText = "YOU LOST..";
    }
}

range.addEventListener("submit", setRange);
guess.addEventListener("submit", GuessTheNumber);

