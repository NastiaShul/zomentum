"use strict";
// burger
document.addEventListener("DOMContentLoaded", () => {

	const burger = document.querySelector(".menu__icon");
	const footerLinks = document.querySelectorAll(".nav__label");


	function burgerMenu(burger, menuBlock, lockClass, activeClass) {
		if (burger) {
			const menuBody = document.querySelector(menuBlock);
	
			burger.addEventListener("click", () => {
				document.body.classList.toggle(lockClass);
				burger.classList.toggle(activeClass);
				menuBody.classList.toggle(activeClass);
			});
		}
	}
	
	
	function openBlocks(triger, activeClass) {
		triger.forEach(item => {
			item.addEventListener("click", () => {
				const parent = item.parentNode;
	
				parent.classList.toggle(activeClass);
			})
		});
	}


	burgerMenu(burger, ".menu__body", "lock", "body-active");
	openBlocks(footerLinks, "menu-footer--active");
});


