
const animatedTags = document.querySelectorAll(
  // "h1, h3, p, section img, nav, a.button, header, a.marquee, .marquee,.contact-form, a.js-scroll"
  "header img, header nav, h1, .projects .project"
);

// fade out on load
animatedTags.forEach((tag) => {
  tag.style.opacity = 0;
});

const fadeIn = function () {
  // look through all the animated tags and see
  // with the getBoundingClientRect if it's in the window
  let delay = 0.25;

  animatedTags.forEach((tag) => {
    const tagTop = tag.getBoundingClientRect().top;
    const tagBottom = tag.getBoundingClientRect().bottom;

    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadein 1s ${delay}s both`;
      delay = delay + 0.1;
    } else {
      tag.style.opacity = 0;
      tag.style.animation = "";
    }
  });
};

// on load, run fadeIn
fadeIn();

// on scroll, run fadeIn
document.addEventListener("scroll", function () {
  fadeIn();
});

// on browser resize, run fadeIn
window.addEventListener("resize", function () {
  fadeIn();
});

// portfolio animations

//filter animations
const filterLanguages = document.querySelectorAll(".filters-list a");


filterLanguages.forEach((language) => {
  
  
  language.addEventListener("click", function (event) {
    event.preventDefault();

    const filter = language.getAttribute("data-filter");

    const projects = document.querySelectorAll(".project");
    projects.forEach((project) => {
      project.style.display = "none";
    });

    const selectedProjects = document.querySelectorAll(filter);
    selectedProjects.forEach((project) => {
      project.style.display = "block";
    });

    filterLanguages.forEach((language) => {
      language.classList.remove("selected");
    });
    language.classList.add("selected");
  });
});


// cursor
// const gsap = require('gsap');
// const cursor = document.querySelector(".cursor");
// const shape = document.querySelectorAll(".shape");

// document.body.addEventListener("mousemove", function(evt) {
//   const mouseX = evt.clientX;
//   const mouseY = evt.clientY;
  
  
//   gsap.set(cursor, {
//     x: mouseX,
//     y: mouseY
//   });
  
//   gsap.to(shape, {
//     x: mouseX,
//     y: mouseY,
//     stagger: -0.1
//   });
// });






// const gsap = require("gsap");
const cursor = document.querySelector(".cursor");
const shape = document.querySelectorAll(".shape");

function handleMouseMove(evt) {
  const mouseX = evt.clientX || evt.touches[0].clientX;
  const mouseY = evt.clientY || evt.touches[0].clientY;

  gsap.set(cursor, {
    x: mouseX,
    y: mouseY
  });

  if (window.innerWidth >= 735) {
    gsap.to(shape, {
      x: mouseX,
      y: mouseY,
      stagger: -0.1
    });
  } else {
    gsap.set(shape, {
      x: 0,
      y: 0
    });
  }
}

document.addEventListener("mousemove", handleMouseMove);
document.addEventListener("touchmove", handleMouseMove);
window.addEventListener("scroll", handleMouseMove);

// document.body.addEventListener("mousemove", handleMouseMove);



// const cursor = document.querySelector(".cursor");
// const shapes = document.querySelectorAll(".shape");

// // Import gsap from the required library
// // const gsap = require("gsap");

// function handleMouseMove(evt) {
//   const mouseX = evt.clientX || evt.touches[0].clientX;
//   const mouseY = evt.clientY || evt.touches[0].clientY;

//   const scrollX = window.pageXOffset;
//   const scrollY = window.pageYOffset;

//   gsap.set(cursor, {
//     x: mouseX - scrollX,
//     y: mouseY - scrollY
//   });

//   if (window.innerWidth >= 735) {
//     gsap.to(shapes, {
//       x: mouseX - scrollX,
//       y: mouseY - scrollY,
//       stagger: -0.1
//     });
//   } else {
//     gsap.set(shapes, {
//       x: 0,
//       y: 0
//     });
//   }
// }

// document.addEventListener("mousemove", handleMouseMove);
// document.addEventListener("touchmove", handleMouseMove);

// document.body.addEventListener("mousemove", handleMouseMove);


// cursor end