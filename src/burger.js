const burgerBtn = document.querySelector(".burger");
const navbarItems = document.querySelector(".navbar-items");

const showNavbarItems = () => {
	burgerBtn.classList.toggle("active-burger");
	navbarItems.classList.toggle("active-navbar-items");
};

burgerBtn.addEventListener("click", showNavbarItems);
