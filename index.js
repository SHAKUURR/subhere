"use strict";
const header = document.querySelector(".nav-section");
const elements = document.querySelector(".nav-list");
const menu = document.querySelectorAll(".nav-link");
const icon = document.querySelector("#menu-icon i");

menu.forEach((element) => {
	element.addEventListener("click", () => {
		elements.classList.toggle("active");
		icon.classList.toggle("active");
	});
});
//Animation on scroll........................
ScrollReveal({ distance: "60px", duration: 2000, delay: 400 });

ScrollReveal().reveal(".hero-img, .hero", {
	delay: 110,
	origin: "right",
	// interval: 500,
	duration: 2200,
	distance: "50px",
});

ScrollReveal().reveal(".about-textbox, .about, .service, .why", {
	delay: 110,
	origin: "bottom",
	interval: 500,
	duration: 1500,
});

ScrollReveal().reveal(".other, .own", {
	delay: 110,
	origin: "right",
	interval: 600,
	duration: 2200,
});

ScrollReveal().reveal(".work-img", {
	delay: 110,
	origin: "left",
	interval: 400,
	duration: 2200,
});
ScrollReveal().reveal(".work-box", {
	delay: 110,
	origin: "right",
	interval: 600,
	duration: 2200,
});

ScrollReveal().reveal(".work", {
	delay: 110,
	origin: "buttom",
	interval: 600,
	duration: 2200,
});
