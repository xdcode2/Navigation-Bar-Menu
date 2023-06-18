const indicator = document.querySelector(".indicator"),
	sections = document.querySelectorAll("section[id]");

function activeScroll() {
	const scrollY = window.scrollY;
	sections.forEach((section, index) => {
		const sectionTop = section.offsetTop - 16,
			sectionHeight = section.offsetHeight,
			link = document.querySelector(`.navbar__link-item a[href='#${section.id}'`);
		if (scrollY >= sectionTop && scrollY <= sectionHeight + sectionTop) {
			link.classList.add("active");
			// indicator.style.left = `${index * 90 + 10}px`; it's up to you, you do not need to add this 
		} else {
			link.classList.remove("active");
		}
	});
}

window.addEventListener("scroll", activeScroll);
