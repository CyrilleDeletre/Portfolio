const burgerButton = document.querySelector("#burger-button");
const navbar = document.querySelector(".header-navbar");

burgerButton.addEventListener("click", function() {
    burgerButton.classList.toggle("active");
    navbar.classList.toggle("active");
});
