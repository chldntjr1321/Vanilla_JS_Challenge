const colors = [
    '#ef5777',
    '#575fcf',
    '#4bcffa',
    '#34e7e4',
    '#0be881',
    '#f53b57',
    '#3c40c6',
    '#0fbcf9',
    '#00d8d6',
    '#05c46b',
    '#ffc048',
    '#ffdd59',
    '#ff5e57',
    '#d2dae2',
    '#485460',
    '#ffa801',
    '#ffd32a',
    '#ff3f34',
];

const ColorChange = document.getElementById("colorchange");

function ColorChangeBtn() {
    const firstColor = colors[Math.floor(Math.random() * colors.length)];
    const secondColor = colors[Math.floor(Math.random() * colors.length)];

    //그라데이션은 색상의 배열을 포함하는 이미지로 취급하기 때문에 backgroundColor 사용 불가
    document.body.style.backgroundImage = `linear-gradient(to right, ${firstColor}, ${secondColor})`;

    //고른 두 색상이 같을 경우 함수를 다시 실행
    if(firstColor === secondColor) {
        return ColorChangeBtn();
    }
}


ColorChange.addEventListener("click",ColorChangeBtn);







