// =====================================
// SVS STUDY HALL - JAVASCRIPT
// =====================================

// 1. WHATSAPP NUMBER
const WHATSAPP_NUMBER = "918988819222";

// 2. MOBILE NAVIGATION
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.textContent = isOpen ? "×" : "☰";
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.textContent = "☰";
        });
    });
}

// 3. AUTOMATIC COPYRIGHT YEAR
const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// 4. WHATSAPP FUNCTION
function openWhatsApp(message) {
    if (WHATSAPP_NUMBER.includes("X")) {
        alert("Please add the official SVS Study Hall WhatsApp number in script.js");
        return;
    }
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
}

// 5. FLOATING WHATSAPP BUTTON
const whatsappLink = document.getElementById("whatsapp-link");
if (whatsappLink) {
    whatsappLink.addEventListener("click", event => {
        event.preventDefault();
        openWhatsApp("Hello SVS Study Hall! I would like to know more about your study hall and membership options.");
    });
}

// 6. CONTACT FORM
const enquiryForm = document.getElementById("enquiry-form");
if (enquiryForm) {
    enquiryForm.addEventListener("submit", event => {
        event.preventDefault();
        const name = document.getElementById("student-name").value.trim();
        const phone = document.getElementById("student-phone").value.trim();
        const message = document.getElementById("student-message").value.trim();
        const feedback = document.getElementById("form-feedback");

        if (!/^[0-9+\-\s()]{8,18}$/.test(phone)) {
            if (feedback) feedback.textContent = "Please enter a valid mobile number.";
            return;
        }

        if (WHATSAPP_NUMBER.includes("X")) {
            if (feedback) feedback.textContent = "WhatsApp number has not been configured yet.";
            return;
        }

        const enquiry = `Hello SVS Study Hall!\n\nName: ${name}\n\nMobile: ${phone}\n\nEnquiry: ${message}`;
        openWhatsApp(enquiry);
    });
}