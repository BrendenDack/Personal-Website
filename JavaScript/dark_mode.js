// JavaScript File for Dark Mode toggle button
/*const toggle = document.getElementById('themeToggle');

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
}*/

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.contains('dark-mode');
    
    // Toggle dark mode class on body
    if (isDarkMode) {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
}
  
// Load the page with the correct theme
document.addEventListener("DOMContentLoaded", function() {
// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    // If a saved theme exists, apply it
    document.body.classList.add(savedTheme + '-mode');
    // Set the slider position based on the saved theme
    if (savedTheme === 'dark') {
    document.getElementById('themeToggle').checked = true;
    }
} else {
    // If no saved theme, default to system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
    document.getElementById('themeToggle').checked = true;
    } else {
    document.body.classList.add('light-mode');
    }
}
  
    // Add event listener for slider change
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('change', toggleDarkMode);
  });

// // Toggle theme and save preference
// toggle.addEventListener('change', () => {
//     if (toggle.checked) {
//         document.body.classList.add('dark-mode');
//         localStorage.setItem('theme', 'dark');
//     } 
//     else {
//         document.body.classList.remove('dark-mode');
//         localStorage.setItem('theme', 'light');
//     }
// });

// // Init on load
// window.addEventListener('DOMContentLoaded', toggleDarkMode);
