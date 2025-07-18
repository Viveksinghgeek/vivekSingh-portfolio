document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example: Simple form submission (you'd typically use a backend for this)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission

            // In a real application, you'd send this data to a server
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Form Submitted!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            alert('Thank you for your message! I will get back to you soon.');

            // Clear the form
            contactForm.reset();
        });
    }

    // You can add more JavaScript here for other interactive elements
    // For example, a mobile navigation toggle, animations, etc.
});