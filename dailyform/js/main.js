
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    if (!contactForm) {
        console.error("Contact form not found.");
        return;
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("emailAddress").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            alert("Please complete all fields.");
            return;
        }

        const recipient = "hello@examplewebsite142.com";

        const body =
            "Name: " + name + "\n" +
            "Email: " + email + "\n\n" +
            "Message:\n" + message;

        const mailtoLink =
            "mailto:" + recipient +
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body);

        alert("Opening your email application...");
        window.location.href = mailtoLink;
    });
});
