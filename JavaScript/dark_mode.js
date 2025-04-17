// JavaScript File for Dark Mode toggle button
const toggle = document.getElementById('themeToggle');

// Apply theme based on localStorage or system preference
function initTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            toggle.checked = true;
        }
    } 
    else {
        // No saved theme, check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            document.body.classList.add('dark-mode');
            toggle.checked = true;
        }
    }
}

// Toggle theme and save preference
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } 
    else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});

// Init on load
window.addEventListener('DOMContentLoaded', initTheme);
