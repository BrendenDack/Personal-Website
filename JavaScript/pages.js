// Javascript for loading different pages
function loadPage(page) {
    const content = document.getElementById('content');
    const wipe = document.getElementById('wipe');
  
    // Trigger wipe coming down
    wipe.className = 'down';
  
    setTimeout(() => {
      fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
          content.innerHTML = data;
        })
        .catch(error => {
          content.innerHTML = `<h2>Oops!</h2><p>Page "${page}" not found.</p>`;
        })
        .finally(() => {
          // Once content is ready, trigger wipe leaving
          wipe.className = 'up';
  
          // Reset after it's gone so it's ready for next time
          setTimeout(() => {
            wipe.className = '';
          }, 400);
        });
    }, 400); // Wait for wipe-down to complete before loading
}

// Function to toggle the navigation menu on small screens
function toggleMenu() {
    const menu = document.querySelector('.nav-buttons');
    menu.classList.toggle('show');
}

// Close the menu when a nav button is clicked (on mobile)
document.querySelectorAll('.nav-buttons button').forEach(button => {
  button.addEventListener('click', () => {
    const navMenu = document.getElementById('navMenu');
    // Only close if on mobile (i.e., nav is in dropdown mode)
    if (window.innerWidth <= 768 && navMenu.classList.contains('show')) {
      navMenu.classList.remove('show');
    }
  });
});

/* If the windows resizes (Like turning the phone horizontal)
   close the hamburger menu to prevent goofy looking issues */
window.addEventListener('resize', () => {
  const navMenu = document.getElementById('.nav-buttons');
  if (window.innerWidth > 768) {
    navMenu.classList.remove('show');
  }
});

// Load the home page by default when the site loads
document.addEventListener("DOMContentLoaded", () => {
  loadPage("home");
});