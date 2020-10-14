window.addEventListener("load", sidenVises);


function sidenVises() {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".icon", {
        duration: 1.2,
        scale: 0.5,
        opacity: 0,
        stagger: 0.2,
        ease: "expo",
        scrollTrigger: {
            trigger: "#icons",
            start: "top 75%",
            end: "center 50%"
        }
    });

    gsap.from(".quote1", {
        duration: 2,
        scale: 0.5,
        opacity: 0,
        ease: "power3",
        scrollTrigger: {
            trigger: ".quote1",
            start: "top 75%",
            end: "center 40%",
            scrub: true
        }
    });

    gsap.from(".quote2", {
        duration: 2,
        scale: 0.5,
        opacity: 0,
        ease: "power3",
        scrollTrigger: {
            trigger: ".quote2",
            start: "top 75%",
            end: "center 40%",
            scrub: true
        }
    });
}
