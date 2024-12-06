const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event){
    event.preventDefault(); // 기본 폼 제출 동작 막기
    loginForm.classList.add(HIDDEN_CLASSNAME); //로그인 폼 안보이게
    const username = loginInput.value; // 사용자가 입력이름 username에 저장
    localStorage.setItem(USERNAME_KEY, username); //localStorage에 username 저장
    paintGreetings(username); // Welcome + (username)
    showQuote(); // 명언 표시 ---> quotes.js 파일에 함수 있음, 그래서 html에 quotes.js를 먼저 script 해야함!!!
}

//로그인 후
function paintGreetings(username) {
    greeting.innerText = `Welcome ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//로그인 여부 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
    showQuote();
}