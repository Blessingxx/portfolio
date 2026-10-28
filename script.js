
/* =========================
   1. MOBILE NAVIGATION
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close the menu when a navigation link is clicked
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });

    // Close the menu when the user presses Escape
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        }
    });
}


/* =========================
   2. UPDATE COPYRIGHT YEAR
========================= */

const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================
   3. SCROLL REVEAL ANIMATIONS
========================= */

const animatedElements = document.querySelectorAll(
    ".section-heading, .about-content, .skill-card, .project-card"
);

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    animatedElements.forEach((element) => {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });
}


/* =========================
   4. SMOOTH SECTION NAVIGATION
========================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        // Ignore empty placeholder links such as href="#"
        if (!targetId || targetId === "#") {
            return;
        }

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth",
                block: "start"
            });
        }
    });
});


/* =========================
   5. PROJECT CARD FEEDBACK
========================= */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.classList.add("is-hovered");
    });

    card.addEventListener("mouseleave", () => {
        card.classList.remove("is-hovered");
    });
});
