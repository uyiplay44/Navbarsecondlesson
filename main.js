window.addEventListener("window.scroll", () => {
    document.querySelector(navMenu).classList.toggle('window.scroll', window.scroll > 100)
})

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav_links"). forEach(n => n.addEventListener ("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
} ))

const titleMenu = document.querySelectorAll('.title__menu');

titleMenu.forEach(titleMenu => {
    titleMenu.addEventListener("click", () => {
        titleMenu.classList.toggle('open');

        const icon = titleMenu.querySelector('.faqs__icon');
        if(icon.className === "fi fi-br-minus") {
            icon.className = "fi fi-br-minus";
        }
    })
})

// slide motion