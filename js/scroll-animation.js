// Animate sections (images and featured-info text) to slide in from the side from invisible, alternating directions for each section

// 1. get all section images into an array
let sectionImgs = document.querySelectorAll('section img');
// 2. get all featured-info text sections into an array
let sectionDivs = document.querySelectorAll('section div.featured-info');

let heroText = document.querySelector('.hero p');
// console.log(sectionImgs);
// console.log(sectionDivs);
// console.log(heroText);

// animate the hero text to slide down on page load
gsap.from(heroText, {
    // no scrollTrigger: animate on page load, because it is at top of page
    y: -30, // slide in from top
    opacity: 0, // fade in from invisible
    duration: 1,
    delay: 0.3
});

// 3. on desktop media query, each section will animate from invisible and from a side, alternating left-right for each section.
// on desktop, within each section, img comes from one side and text-info comes from the opposite side, sliding in together towards center of screen from opposite directions. i.e. 1st img slides in from left and 1st info text slides in from right, then for the next section, the directions switch.
// on mobile, within each section, img and info-text animate from the same side.
// for both mobile and desktop, each section alternates which side it is animating from.
// i.e. 1st section slides in from left, 2nd section slides in from right, 3rd section slides in from left, ...
if ((window.matchMedia("(min-width: 900px)")).matches) {

    let movement = -100;
    for (let i=0; i<sectionImgs.length; i++) {
        
        gsap.from(sectionImgs[i], {	
            scrollTrigger: sectionImgs[i], // animation triggers when user scrolls to this section
            x: movement, // slide in from left
            opacity: 0, // fade in from invisible
            duration: 1,
            delay: 0.3
        });

        gsap.from(sectionDivs[i], {	
            scrollTrigger: sectionImgs[i], // animation triggers when user scrolls to this section
            x: -1*movement, // slide in from right / opposite direction that image moved
            opacity: 0, // fade in from invisible
            duration: 1,
            delay: 0.3
        });

        movement *=-1; // alternate the direction left-right for each section
    }

}
else {
    let movement = -100;
    for (let i=0; i<sectionImgs.length; i++) {
        
        gsap.from(sectionImgs[i], {	
            scrollTrigger: sectionImgs[i], // animation triggers when user scrolls to this section
            x: movement, // slide in from left
            opacity: 0, // fade in from invisible
            duration: 1,
            delay: 0.3
        });

        gsap.from(sectionDivs[i], {	
            scrollTrigger: sectionImgs[i], // animation triggers when user scrolls to this section
            x: movement, // slide in from left / same direction that image moved
            opacity: 0, // fade in from invisible
            duration: 1,
            delay: 0.3
        });

        movement *=-1; // alternate the direction left-right for each section
    }
    
}
