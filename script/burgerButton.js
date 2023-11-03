const burgerButton = document.querySelector("#burger-button");
const navbarLink = document.querySelector("#header-navbar");

burgerButton.addEventListener("click", function() {
    burgerButton.classList.toggle("active");
    navbarLink.classList.toggle("active");
});