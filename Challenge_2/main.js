const h2 = document.createElement('h2'); //h2 태그 생성
document.body.prepend(h2); //만든 태그 body 안 첫번째에 삽입
h2.textContent = 'Hello!!'; //Hello!!

function checkSize() {
  document.body.classList.remove('blue', 'purple', 'yellow'); //blue, purple. yellow 클래스 이름 제거

    if (window.innerWidth > 1200) {
    //윈도우 창 크기가 1200보다 클 때
        document.body.classList.add('blue'); //blue 클래스 추가
    } else if (1200 >= window.innerWidth && window.innerWidth >= 500) {
    //윈도우 창 크기가 1200이하 500 이상일 때
        document.body.classList.add('purple'); //purple 클래스 추가
    } else {
        document.body.classList.add('yellow'); //yellow 클래스 추가
    }
}

checkSize();
window.addEventListener('resize', checkSize);
