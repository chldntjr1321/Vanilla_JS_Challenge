const search = document.querySelector(".search");
const searchTxt = document.querySelector(".search-text")



function searchSomething(event) {
    event.preventDefault();
    const searchThing = searchTxt.value;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(searchThing)}`, '_blank');
}


search.addEventListener("submit", searchSomething);