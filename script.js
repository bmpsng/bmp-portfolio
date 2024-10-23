// script.js

// Function to hide all sections except the specified one
function showSection(sectionId) {
    // Get all sections in the wrapper
    const sections = document.querySelectorAll('.container > section, .project-section, .skills-container, .contactus-form-container');
    
    // Hide all sections
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the specified section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

// Initialize the display state of the sections
function init() {
    // Show the default section (up to id="social-media")
    showSection('social-media');
}

// Add event listeners for navbar links
document.addEventListener('DOMContentLoaded', () => {
    init(); // Run the initialization to set up the page

    // Event listeners for navbar links
    const projectLink = document.querySelector('a[href="#projects"]');
    const skillsLink = document.querySelector('a[href="#skills"]');
    const contactLink = document.querySelector('a[href="#contactme"]');

    projectLink.addEventListener('click', () => showSection('projects'));
    skillsLink.addEventListener('click', () => showSection('skills'));
    contactLink.addEventListener('click', () => showSection('contactme'));
});







// JavaScript to make the form responsive and functional
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form');
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const subjectInput = document.querySelector('input[name="subject"]');
    const messageInput = document.querySelector('textarea[name="message"]');
    const submitButton = document.querySelector('#submit-btn');

    // Helper function to validate email format
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return re.test(email);
    }

    // Validate inputs and handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Basic form validation
        if (nameInput.value === '') {
            alert('Please enter your name.');
            return;
        }

        if (emailInput.value === '') {
            alert('Please enter your email address.');
            return;
        }

        if (!validateEmail(emailInput.value)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (subjectInput.value === '') {
            alert('Please enter a subject.');
            return;
        }

        if (messageInput.value === '') {
            alert('Please enter your message.');
            return;
        }

        // All fields are valid, send the form (this is a placeholder for now)
        alert('Message sent successfully!');

        // Optionally, here you would send the form data using Fetch API or XMLHttpRequest
        // Example with Fetch API:
        /*
        fetch('your-backend-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: nameInput.value,
                email: emailInput.value,
                subject: subjectInput.value,
                message: messageInput.value
            })
        }).then(response => response.json())
          .then(data => {
              alert('Message sent successfully!');
          }).catch(error => {
              console.error('Error:', error);
          });
        */
    });

    // Make the textarea auto-resize based on content
    messageInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });

    // Responsive form: Adjust form elements on window resize
    window.addEventListener('resize', function() {
        const width = window.innerWidth;
        
        if (width < 768) {
            form.style.flexDirection = 'column';
            submitButton.style.width = '100%';
        } else {
            form.style.flexDirection = 'row';
            submitButton.style.width = 'auto';
        }
    });

    // Trigger resize event on load to adjust form accordingly
    window.dispatchEvent(new Event('resize'));
});
