// ? Loader
const loader = document.querySelector("#loader");
window.addEventListener("load", () => {
	loader.classList.add("fondu-out");
	setTimeout(() => {
		loader.style.visibility = "hidden";
		loader.remove();
		document.querySelector("body").style.overflow = "visible";
	}, 200);
});

// ? Menu hamburger
const myIcon = document.querySelector("#hamburger-icon");
const handleMenu = document.querySelector("#nav-right");
const border = "1px solid rgba(27, 27, 27, 0.15)";
const links = document.querySelectorAll(".nav-link");
links.forEach((elt) => {
	elt.addEventListener("click", () => {
		if (handleMenu.classList.contains("visible")) {
			handleMenu.classList.remove("visible");
			myIcon.style.opacity = 0;
			setTimeout(() => {
				myIcon.name = "reorder-three";
				myIcon.style.opacity = 1;
			}, 300);
		}
	});
});

myIcon.addEventListener("click", () => {
	handleMenu.style.borderTop = border;
	handleMenu.style.borderBottom = border;
	handleMenu.classList.toggle("visible");
	myIcon.style.opacity = 0;
	if (myIcon.name == "reorder-three") {
		setTimeout(() => {
			myIcon.name = "close-outline";
			myIcon.style.opacity = 1;
		}, 300);
	} else {
		setTimeout(() => {
			myIcon.name = "reorder-three";
			myIcon.style.opacity = 1;
		}, 300);
	}
});