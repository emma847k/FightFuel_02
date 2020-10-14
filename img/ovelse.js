gsap.registerPlugin(ScrollTrigger);

gsap.to(".ball-1", {
    x: 200,
    duration: 2,
    ease: "bounce",
    scrollTrigger: {
        trigger: ".ball-1",
        markers: true,
        start: "center 75%",
        end: "bottom 25%"
    }
});
