const clockTitle = document.querySelector('.js-clock');

const CALCULATE_SEC = 1000 * 60; //밀리sec이라서 1000 * 60 = 60sec
const CALCULATE_MIN = 1000 * 60 * 60; //1000 * 60 * 60 = 60min
const CALCULATE_DAY = 1000 * 60 * 60 * 24; //1000 * 60 * 60 * 24 = 24h


function getClcok() {
    const xmas = new Date('2024-12-25 00:00:00');
    const today = new Date();

    const distance = xmas.getTime() - today.getTime(); //두 날짜 차이를 "밀리sec"값으로 가져옴

    const d_day = Math.floor(distance / CALCULATE_DAY);
    const d_hour = String(Math.floor((distance % CALCULATE_DAY) / CALCULATE_MIN)).padStart(2, "0");
    const d_min = String(Math.floor((distance % CALCULATE_MIN) / CALCULATE_SEC)).padStart(2, "0");
    const d_sec = String(Math.floor((distance % CALCULATE_SEC) / 1000)).padStart(2, "0");

    clockTitle.innerText = `${d_day}d ${d_hour}h ${d_min}m ${d_sec}s`
}

getClcok();
setInterval(getClcok, 1000);