const button = document.getElementById("navbar-toggler");
const menus = document.querySelectorAll(".menu");
button.addEventListener('click', () => {

    for(let el of menus)
    {
        el.classList.toggle("show");
    }
})