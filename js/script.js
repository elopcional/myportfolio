
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // MOBILE NAVIGATION
    // =====================================

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navLinks.classList.toggle("show");

            menuToggle.setAttribute("aria-expanded", isOpen);

            menuToggle.textContent = isOpen ? "✕" : "☰";

        });

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", function () {

                navLinks.classList.remove("show");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.textContent = "☰";

            });

        });

    }


    // =====================================
    // ACTIVE NAVIGATION
    // =====================================

    const sections = document.querySelectorAll("main section[id]");
    const navigationItems = document.querySelectorAll(".nav-links a[href^='#']");

    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }

        });

        navigationItems.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveNavigation);

    updateActiveNavigation();


    // =====================================
    // CURRENT YEAR
    // =====================================

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    // =====================================
    // CONTACT FORM
    // =====================================

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("contactName").value.trim();

            const email =
                document.getElementById("contactEmail").value.trim();

            const subject =
                document.getElementById("contactSubject").value.trim();

            const message =
                document.getElementById("contactMessage").value.trim();

            const status =
                document.getElementById("formStatus");

            if (!name || !email || !subject || !message) {

                status.textContent = "Please complete all fields.";

                return;

            }

            // Opens the visitor's email application.
            // Replace this with your real email address.

            const recipient = "YOUR_EMAIL@example.com";

            const mailSubject = encodeURIComponent(subject);

            const mailBody = encodeURIComponent(
                "Name: " + name +
                "\nEmail: " + email +
                "\n\nMessage:\n" + message
            );

            const mailLink =
                `mailto:${recipient}?subject=${mailSubject}&body=${mailBody}`;

            status.textContent =
                "Opening your email application...";

            window.location.href = mailLink;

        });

    }

});
