
document.addEventListener("DOMContentLoaded", function () {

    // NAVIGATION MENU
    document.querySelectorAll("#mainNav .nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
            const menu = document.getElementById("mainNav");

            if (menu && menu.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(menu).hide();
            }
        });
    });


    // CONTACT FORM
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
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

            const recipient = "vssacluti@up.edu.ph";

            const body =
                "Name: " + name + "\n" +
                "Email: " + email + "\n\n" +
                "Message:\n" + message;

            const mailtoLink =
                "mailto:" + recipient +
                "?subject=" + encodeURIComponent(subject) +
                "&body=" + encodeURIComponent(body);

            window.location.href = mailtoLink;
        });
    }

});
