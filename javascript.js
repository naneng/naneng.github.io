// header animation                >>>>>>>>>

const headerTag = document.querySelector("header");

const toggleHeader = function () {
  const pixels = window.pageYOffset;

  if (pixels > 60) {
    headerTag.classList.add("scrolled");
  } else {
    headerTag.classList.remove("scrolled");
  }
};

const fadeBox = function () {
  const pixels = window.pageYOffset;
  const alpha = Math.min(pixels / 200, 0.5);

  headerTag.style.boxShadow = `0 0 10px rgba(0, 0, 0, ${alpha})`;
};
fadeBox();
toggleHeader();

document.addEventListener("scroll", function () {
  toggleHeader();
  fadeBox();
});

// marquee and animatedTag transition animations >>>>
function makeMarquee() {
  const contactTitle = "   Get in Touch  ";
  const marqueeText = new Array(100).fill(contactTitle).join("-");

  const marquee = document.querySelector(".contact .marquee span");
  marquee.innerHTML = marqueeText;
}
makeMarquee();

const animatedTags = document.querySelectorAll(
  "h1, h3, p, section img, nav, a.button, header, a.marquee, .marquee, a.js-scroll"
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

// form animations                      >>>>>>>>>
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "..got your message. thanks for dropping by..";
        // status.toggleClass('open')
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML =
              "Uh oh, it looks like your message got lost, try again..";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML =
        "Uh oh, it looks like your message got lost, try again..";
    });
}
form.addEventListener("submit", handleSubmit);

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

// anime({
//   targets: "#svg-logo path",
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: "easeInOutSine",
//   duration: 1500,
//   delay: function (el, i) {
//     return i * 250;
//   },
//   direction: "alternate",
//   loop: true,
// });
