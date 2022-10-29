// Taking multiples animation:
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// We want to our animation goes to...
// Grabbing the span, change the position, everytime that the page load.

// Stagger move texts one by one, just determine the time between each element.
tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });

// Now we create a code that starts right after that one.
//  - This coder will move the container 'slider' from the bottom to the negative top.
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });

// Moving the whole intro section that has the h1 text.

tl.to(".intro", { y: "-100%", duration: 1 }, "-=1.5");

//Specifing a starting point and ending point changing the opacity of the logo and the links in navbar.

tl.fromTo("nav", { opacity: 0 }, { opacity: 0.9, duration: 1 });

// Changing the opacity in the title element.
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 0.9, duration: 1 }, "-=1");

// You can see everything about this course here:
// https://www.youtube.com/watch?v=sN93DRYkCO8
