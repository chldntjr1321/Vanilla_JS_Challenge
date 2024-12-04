const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];


document.body.style.backgroundImage = `url(img/${chosenImage})`; //배경화면을 랜덤으로 띄우는 코드를 body.style에 삽입