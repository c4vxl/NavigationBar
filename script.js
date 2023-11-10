const navbar = document.querySelector(".navbar");
const links_container = navbar.querySelector(".navbar__links");
const dropdowns = links_container.querySelectorAll(".dropdown");
const phone_btn = navbar.querySelector(".navbar__button");

dropdowns.forEach(dropdown => {
    const title = dropdown.querySelector(".dropdown__title");
    title.addEventListener("click", (event) => {
        dropdown.classList.toggle("active");
    });
    dropdown.addEventListener("mouseenter", (event) => {
        dropdown.classList.add("active");
    });
    dropdown.addEventListener("mouseleave", (event) => {
        dropdown.classList.remove("active");
    });
});

phone_btn.addEventListener("click", (event) => {
    navbar.classList.toggle("active");
});

window.addEventListener("scroll", (event) => {
    if (window.scrollY >= 10) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
})