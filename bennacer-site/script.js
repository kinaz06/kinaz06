// Simple script for handling the contact form and dynamic year

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Your message has been sent successfully!');
            form.reset();
        });
    }

    // update year in footer
    const yearSpan = document.querySelector('footer p');
    if (yearSpan) {
        const year = new Date().getFullYear();
        yearSpan.textContent = `\u00A9 ${year} BENNACER GROUP. All rights reserved.`;
    }
});
