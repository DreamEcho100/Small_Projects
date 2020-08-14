let controller, slideScene, pageScene;

function animateSlides() {
	controller = new ScrollMagic.Controller();
	const sliders = document.querySelectorAll(".slide");
	const nav = document.querySelector(".nav-header");

	sliders.forEach( (slide, idx, slides) => {
		const revealImg = slide.querySelector(".reveal-img");
		const img = slide.querySelector("img");
		const revealTxt = slide.querySelector(".reveal-txt");
		//gsap.to(revealImg, 3, {x: "100%"});
		const slideTl = gsap.timeline( {
			defaults: { duration: 1, ease: "power1.inout" }
		} );
		slideTl.fromTo(revealImg, { x: "0%" }, { x: "100%" });
		//slideTl.fromTo(img, 0.7, { scale: "2" }, { scale: "1" });
		slideTl.fromTo(img,  { scale: "2" }, { scale: "1" }, "-=1");
		slideTl.fromTo(revealTxt,  { x: "0%" }, { x: "100%" }, "-=0.75");
		slideTl.fromTo(nav,  { y: "-100%" }, { y: "0%" }, "-=1");

		slideScene = new ScrollMagic.Scene({
			triggerElement: slide,
			triggerHook: 0.25,
			reverse: false
		})
			.setTween(slideTl)
			.addIndicators({colorStart: "white", colorTrigger: "white", name: "slide"})
			.addTo(controller);

		const pageTl = gsap.timeline();
		let nextSlide = slide.length - 1 === idx ? "end" : slide[idx - 1];
		pageTl.fromTo(nextSlide, {y: "0%"}, {y: "100%"});
		pageTl.fromTo(slide, {opacity: 1, scale: 1}, {opacity: 0, scale: 0});
		pageTl.fromTo(nextSlide, {y: "50%"}, {y: "0%"}, "-=0.5");
		pageScene = new ScrollMagic.Scene({
			triggerElement: slide,
			duration: "100%",
			triggerHook: 0
		})
			.addIndicators({colorStart: "white", colorTrigger: "white", name: "slide"})
			.setPin(slide, {pushFollowers: false})
			.setTween(pageTl)
			.addTo(controller);
	} );
}

let mouse = document.querySelector(".cursor");
let mouseTxt = mouse.querySelector("span");
let burger = document.querySelector(".burger");

function cursor(e) {
	mouse.style.top = `${e.pageY}px`;
	mouse.style.left = `${e.pageX}px`;
}

function activeCursor(e) {
	let item = e.target;
	if (item.id === "logo" || item.classList.contains("burger")) {
		mouse.classList.add("nav-active");
		mouse.style.mixBlendMode = "screen";
	} else  {
		mouse.classList.remove("nav-active");
		mouse.style.mixBlendMode = "none";
	}

	if (item.classList.contains("explore")) {
		mouse.classList.add("explore-active");
		gsap.to(".title-swipe", 1, {y: "0%"});
		mouseTxt.innerText = "Tap";
	} else {
		mouse.classList.remove("explore-active");
		mouseTxt.innerText = "";
		gsap.to(".title-swipe", 1, {y: "100%"});
	}
}

function navToggle(e) {
	if (!e.target.classList.contains("active")) {
		mouse.style.borderColor = "black";
		e.target.classList.add("active");
		gsap.to(".line1", 0.5, {rotate: "45", y: 5, background: "black"});
		gsap.to(".line2", 0.5, {rotate: "-45", y: -5, background: "black"});
		gsap.to("#logo", {color: "black"});
		gsap.to(".nav-bar", 0.5, {clipPath: "circle(2500px at 100% -10%)"});
		document.body.classList.add("hide");
	} else {
		mouse.style.borderColor = "white";
		e.target.classList.remove("active");
		gsap.to(".line1", 0.5, {rotate: "0", y: 0, background: "white"});
		gsap.to(".line2", 0.5, {rotate: "0", y: 0, background: "white"});
		gsap.to("#logo", {color: "white"});
		gsap.to(".nav-bar", 0.5, {clipPath: "circle(50px at 100% -10%)"});
		document.body.classList.remove("hide");

	}
		
}

burger.addEventListener("click", navToggle);
window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);

animateSlides();