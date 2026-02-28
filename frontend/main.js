gsap.registerPlugin(ScrollTrigger);

function initScrollAnimation() {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero-canvas",
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5, // Smooth scrubbing
        }
    });

    // 1. Move car from Left to Right and Scale up
    tl.to("#car-wrapper", {
        left: "120%", // Drives completely off the right side
        rotateY: -10, // Slight perspective tilt
        scale: 1.2,
        ease: "none"
    })
    
    // 2. While car is moving, keep headline visible but dim
    // (It is "revealed" because the car passes over it)
    .to("#headline", {
        opacity: 1,
        duration: 0.1
    }, 0) 

    // 3. Once the car is hidden (right side), make the text glow
    // We use a callback to add/remove the CSS class
    .to("#headline", {
        onUpdate: function() {
            const progress = this.progress();
            const textElement = document.getElementById("headline");
            if (progress > 0.8) {
                textElement.classList.add("glow");
            } else {
                textElement.classList.remove("glow");
            }
        }
    });
}

// Call this after your loadMetrics() function
initScrollAnimation();