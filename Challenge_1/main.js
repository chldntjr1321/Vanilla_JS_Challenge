// <⚠️ DONT DELETE THIS ⚠️>
import './styles.css';
const colors = ['#1abc9c', '#3498db', '#9b59b6', '#f39c12', '#e74c3c'];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const hello = document.querySelector('h2');

const superEventHandler = {
    mouseEnter: function (event) {
    event.target.style.color = colors[0]; //'#1abc9c'
    hello.innerText = 'The mouse is here!';
    },
    mouseLeave: function (event) {
    event.target.style.color = colors[1]; //'#3498db'
    hello.innerText = 'The mouse is gone!';
    },
    resize: function () {
    hello.style.color = colors[2]; //'#9b59b6'
    hello.innerText = 'You just resized!';
    },
    rightClick: function () {
    hello.style.color = colors[3]; //'#f39c12'
    hello.innerText = 'That was a right click!';
    },
};
hello.addEventListener('mouseenter', superEventHandler.mouseEnter);
hello.addEventListener('mouseleave', superEventHandler.mouseLeave);
window.addEventListener('resize', superEventHandler.resize);
window.addEventListener('contextmenu', superEventHandler.rightClick);
