// ==================================
// 1. OPEN AND CLOSE POPUPS
// ==================================

function openPopup(popupId) {
    const popup = document.getElementById(popupId);

    if (popup) {
        popup.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);

    if (popup) {
        popup.classList.remove("active");

        // Restore scrolling if no other popup is open
        const anotherPopupIsOpen =
            document.querySelector(".popup-overlay.active");

        if (!anotherPopupIsOpen) {
            document.body.style.overflow = "";
        }
    }
}


// ==================================
// 2. CLOSE BUTTONS
// ==================================

document.querySelectorAll("[data-close]").forEach(button => {

    button.addEventListener("click", () => {
        closePopup(button.dataset.close);
    });

});


// ==================================
// 3. CLOSE BY CLICKING OUTSIDE
// ==================================

document.querySelectorAll(".popup-overlay").forEach(overlay => {

    overlay.addEventListener("click", event => {

        if (event.target === overlay) {
            closePopup(overlay.id);
        }

    });

});


// ==================================
// 4. ESCAPE KEY
// ==================================

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        document.querySelectorAll(".popup-overlay.active")
            .forEach(popup => closePopup(popup.id));

    }

});


// ==================================
// 5. PROJECT DETAILS POPUP
// ==================================

document.querySelectorAll(".project-card").forEach(card => {

    const button = card.querySelector(".view-project-btn");

    button.addEventListener("click", () => {

        const title = card.dataset.title;
        const description = card.dataset.description;
        const technologies = card.dataset.technologies;
        const image = card.dataset.image;
        const link = card.dataset.link;

        document.getElementById("projectTitle").textContent = title;

        document.getElementById("projectDescription").textContent =
            description;

        document.getElementById("projectTechnologies").textContent =
            technologies;

        document.getElementById("projectImage").src = image;

        document.getElementById("projectLink").href = link;

        openPopup("projectPopup");

    });

});


// ==================================
// 6. CONTACT FORM
// ==================================

const contactForm = document.getElementById("contactPopupForm");

contactForm.addEventListener("submit", event => {

    event.preventDefault();

    const name = document.getElementById("visitorName").value;

    alert(`Thank you, ${name}! Your message form was submitted.`);

    contactForm.reset();

    closePopup("contactPopup");

});


// ==================================
// 7. WELCOME POPUP
// ==================================

document.addEventListener("DOMContentLoaded", () => {

    openPopup("welcomePopup");

});