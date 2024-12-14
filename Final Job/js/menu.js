const dropdownBtn = document.querySelector(".dropdown-button");
const dropdownMenu = document.querySelector(".dropdown-menu");

function ActiveMenu() {
    dropdownMenu.classList.toggle("active");
}

function ActiveMenuList() {
    if (dropdownMenu.classList.contains("active")) {
        dropdownMenu.style.transform = 'translateY(0)';
        dropdownMenu.style.opacity = '1';
    }
}

dropdownBtn.addEventListener("click", ActiveMenu);
dropdownMenu.addEventListener("transitionend", ActiveMenuList);
