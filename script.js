// Simple login validation script for beginners

// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function () {

    // Get the form element (only on login page)
    var loginForm = document.getElementById('loginForm');

    // Only add login functionality if we're on the login page
    if (loginForm) {
        // Add event listener for form submission
        loginForm.addEventListener('submit', function (event) {
            // Prevent the form from submitting normally
            event.preventDefault();

            // Get the email and password values
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            // Check if email is valid
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address!');
                return;
            }

            // Check if password is at least 6 characters
            if (password.length < 6) {
                alert('Password must be at least 6 characters long!');
                return;
            }

            // If everything is valid, redirect to dashboard
            alert('Login successful! Redirecting to dashboard...');
            window.location.href = 'dashboard.html';
        });
    }

    // Dark Mode Toggle Functionality
    initDarkMode();
});

// Function to check if email is valid
function isValidEmail(email) {
    // Simple email validation: check if it contains @ and a dot
    if (email.includes('@') && email.includes('.')) {
        return true;
    }
    return false;
}

// Dark Mode Functions
function initDarkMode() {
    // Check if user has a saved preference
    var savedTheme = localStorage.getItem('theme');

    // If user previously selected dark mode, apply it
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Get or create the dark mode toggle button
    var toggleButton = document.getElementById('darkModeToggle');

    // Only add click listener if button exists
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleDarkMode);
        updateToggleIcon();
    }
}

function toggleDarkMode() {
    // Toggle the dark-mode class on body
    document.body.classList.toggle('dark-mode');

    // Save user preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }

    // Update the button icon
    updateToggleIcon();
}

function updateToggleIcon() {
    var toggleButton = document.getElementById('darkModeToggle');
    if (toggleButton) {
        // Change icon based on current mode
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = '☀️'; // Sun icon for light mode
        } else {
            toggleButton.textContent = '🌙'; // Moon icon for dark mode
        }
    }
}
