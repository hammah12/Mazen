// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you would typically handle the form submission, e.g., sending data to a server
    alert('Thank you for your message! We will get back to you soon.');
    // Optionally reset the form
    event.target.reset();
});
