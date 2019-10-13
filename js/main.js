document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});


// sticky navbar
let mainNavLinks = document.querySelectorAll(".navbar-end a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    mainNavLinks.forEach(link => {
        let section = document.querySelector(link.hash);

        console.log(fromTop)

        if (fromTop === 0) {
            document.querySelector(".navbar").classList.remove("navbar-shadow");
        } else {
            document.querySelector(".navbar").classList.add("navbar-shadow");
        }

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("is-active");
        } else {
            link.classList.remove("is-active");
        }
    });
});