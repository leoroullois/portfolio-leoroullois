const mainTitle = document.querySelector("#main-title");
new Typewriter(mainTitle, {
	deleteSpeed: 20,
})
	.changeDelay(20)
	.typeString("Je suis Léo")
	.pauseFor(300)
	.typeString(", développeur <span style='color:#f39c12';>JavaScript</span> !")
	.pauseFor(1000)
	.deleteChars(12)
	.pauseFor(500)
	.typeString("<span style='color: #3498db;'>React</span> !")
	.pauseFor(1000)
	.deleteChars(7)
	.pauseFor(500)
	.typeString("<span style='color: #b93838;'>front-end</span> !")
	.start();
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

const chevron = document.querySelector("#chevron-down");
chevron.addEventListener("click", (e) => {
	e.preventDefault();
	window.scroll(0, e.pageY);
});

// ? Particles JS
particlesJS.load("particles-js", "../assets/home.particles.json", function () {
	console.log("callback - particles-js config loaded");
});

// ? Apparition au scroll
ScrollReveal(/*{reset:true}*/).reveal("#about", { delay: 100 });
ScrollReveal(/*{reset:true}*/).reveal("#skills", { delay: 100 });
ScrollReveal(/*{reset:true}*/).reveal("#portfolio", { delay: 100 });
ScrollReveal(/*{reset:true}*/).reveal("#contact", { delay: 100 });
// ScrollReveal(/*{reset:true}*/).reveal("footer", { delay: 200 });
