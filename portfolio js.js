// Dark mode toggle functionality
const darkModeToggle = document.getElementById('darkModeToggle');

// Check if dark mode preference is already set in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.querySelector('header').classList.add('dark-mode');
    document.querySelector('footer').classList.add('dark-mode');
    document.querySelectorAll('section').forEach(section => section.classList.add('dark-mode'));
    document.querySelectorAll('.project-card').forEach(card => card.classList.add('dark-mode'));
    darkModeToggle.classList.add('dark-mode');
}

// Dark mode toggle click event
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelectorAll('section').forEach(section => section.classList.toggle('dark-mode'));
    document.querySelectorAll('.project-card').forEach(card => card.classList.toggle('dark-mode'));
    darkModeToggle.classList.toggle('dark-mode');

    // Save dark mode state to localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }
});
