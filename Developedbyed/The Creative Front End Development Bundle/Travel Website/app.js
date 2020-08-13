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

animateSlides();