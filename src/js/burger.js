const burgerBtn = document.querySelector(".burger");
const navbarItems = document.querySelector(".navbar-items");
const body = document.querySelector("body");

const showNavbarItems = () => {
	burgerBtn.classList.toggle("active-burger");
	navbarItems.classList.toggle("active-navbar-items");
	body.classList.toggle("disabled-scroll");
};

const hideNavbarItems = () => {
	burgerBtn.classList.remove("active-burger");
	navbarItems.classList.remove("active-navbar-items");
	body.classList.remove("disabled-scroll");
};

burgerBtn.addEventListener("click", showNavbarItems);
navbarItems.addEventListener("click", hideNavbarItems);
