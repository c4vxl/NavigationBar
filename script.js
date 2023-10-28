const navbar = document.querySelector(".navbar");
const phone__button = navbar.querySelector(".navbar__phone__button");
const links__container = navbar.querySelector(".navbar__links");
const dropdowns = links__container.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    const title = dropdown.querySelector(".dropdown__title");
    title.addEventListener("click", (event) => {
        dropdown.classList.toggle("active");
    });
});

phone__button.addEventListener("click", (event) => {
    navbar.classList.toggle("active");
});

window.addEventListener("scroll", (event) => {
    if (window.scrollY >= 10) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
})