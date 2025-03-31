// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check user preference from local storage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

// Toggle dark mode
const toggleDarkMode = () => {
    body.classList.toggle('dark-mode');
    // Save preference
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
};

darkModeToggle.addEventListener('click', toggleDarkMode);
