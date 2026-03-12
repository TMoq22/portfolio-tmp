/* Titouan moquet 2026*/
/* Version temporaire */

// CURSOR 

const cursor = document.querySelector("[data-cursor]");
window.addEventListener('mousemove', e => {
    //cursor.setAttribute('style', 'top:' + (e.pageY - 30) + "px; left:" + (e.pageX - 30) + "px;")
    const posX = e.clientX;
    const posY = e.clientY;
    //cursor.style.left = `${posX}px`;
    //cursor.style.top = `${posY}px`;
    cursor.animate({
        left: `${posX - 20}px`,
        top: `${posY - 20}px`
    }, { duration: 100, fill: "forwards" }
    );
})


tippy('[data-tippy-content]');

//NAV
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

const checkbox = document.getElementById('menu-toggle');
const navLinks = document.querySelectorAll('.nav-links a');


navLinks.forEach(link => {
  link.addEventListener('click', () => {
    checkbox.checked = false;
  });
});

//inspired by : https://laconsole.dev/blog/comment-creer-dark-mode-css-js
/* dark & light mode 
(function () {

    const root = document.documentElement;
    const togglers = document.querySelectorAll("[data-theme-toggler]");

    function updateButtonContent(theme) {
        togglers.forEach(btn => {
            if (theme === "dark") {
                btn.textContent = "Mode clair";
            } else {
                btn.textContent = "Mode sombre";
            }
        });
    }

    function toggleDarkMode() {
        const currentTheme = root.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        updateButtonContent(newTheme);
    }

    function init() {
        const storedPreference = localStorage.getItem("theme");
        const theme = storedPreference || "dark";
        root.setAttribute("data-theme", theme);
        updateButtonContent(theme);

    }

    init();

    document.addEventListener("DOMContentLoaded", function () {

        const togglers = document.querySelectorAll("[data-theme-toggler]");
        togglers.forEach((toggler) => {
            toggler.addEventListener("click", toggleDarkMode);

        });
    });

})();
*/

/* Animations des sections et du aside */
const elements = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear");
        } else {

            entry.target.classList.remove("appear");
        }
    });
}, {
    threshold: 0 /*controle du IntersectionObserver base sur le % visible du bloc */
});

elements.forEach(el => observer.observe(el));



/* GSAP*/
// document.addEventListener("DOMContentLoaded", (event) => {
//     gsap.registerPlugin(SplitText)
//     // gsap code here!

//     // split elements with the class "split" into words and characters
//     let split = SplitText.create(".split", { type: "words, chars" });

//     // now animate the characters in a staggered fashion
//     gsap.from(split.chars, {
//         duration: 1.2,
//         y: 100,       // animate from 100px below
//         autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
//         stagger: 0.05 // 0.05 seconds between each
//     });
// });


// gsap.registerPlugin(ScrambleTextPlugin);

// // document.addEventListener("DOMContentLoaded", () => {
// //   const h1 = document.getElementById("hero-text");

// // });


// document.addEventListener("DOMContentLoaded", (event) => {
//     const h1 = document.getElementById("hero-text");
//     gsap.to(".hero-text", {
//         scrambleText: {
//             text: h1.textContent,
//             chars: "upperAndLowerCase",
//             revealDelay: 0.2,
//             tweenLength: true,
//         },
//         ease: "power2.inOut",
//         overwrite: "auto",
//         duration: 3.2
//     });
// });



// // Initialize Lenis
// const lenis = new Lenis({
//   autoRaf: true,
// });

// // Listen for the scroll event and log the event data
// lenis.on('scroll', (e) => {
//   console.log(e);
// });