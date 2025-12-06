document.addEventListener('DOMContentLoaded', function () {

    var loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            if (!isValidEmail(email)) {
                alert('Please enter a valid email address!');
                return;
            }

            if (password.length < 6) {
                alert('Password must be at least 6 characters long!');
                return;
            }

            alert('Login successful! Redirecting to dashboard...');
            window.location.href = 'dashboard.html';
        });
    }

    initDarkMode();
});

function isValidEmail(email) {
    if (email.includes('@') && email.includes('.')) {
        return true;
    }
    return false;
}

function initDarkMode() {
    var savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    var toggleButton = document.getElementById('darkModeToggle');

    if (toggleButton) {
        toggleButton.addEventListener('click', toggleDarkMode);
        updateToggleIcon();
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }

    updateToggleIcon();
}

function updateToggleIcon() {
    var toggleButton = document.getElementById('darkModeToggle');
    if (toggleButton) {
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = '☀️';
        } else {
            toggleButton.textContent = '🌙';
        }
    }
}
