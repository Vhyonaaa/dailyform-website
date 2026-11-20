// ==== NAVIGATION MENU === //
document.querySelectorAll('#mainNav .nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    const menu = document.getElementById('mainNav');
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

// === CONTACT FORM === //
  const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            // Stop normal browser form submission
            event.preventDefault();

            const name = document.getElementById("fullName").value.trim();
            const email = document.getElementById("emailAddress").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            // Check required fields
            if (!name || !email || !subject || !message) {
                alert("Please complete all fields.");
                return;
            }

            // Your receiving email address
            const recipient = "hello@examplewebsite142.com";

            // Prepare email content
            const body =
                "Name: " + name + "\n" +
                "Email: " + email + "\n\n" +
                "Message:\n" + message;

            // Create email link
            const mailtoLink =
                "mailto:" + recipient +
                "?subject=" + encodeURIComponent(subject) +
                "&body=" + encodeURIComponent(body);

            // Open visitor's email application
            window.location.href = mailtoLink;

        });

    }

});
