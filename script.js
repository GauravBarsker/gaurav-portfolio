// Toggle the mobile navigation menu.
const menuButton = document.getElementById('menu-toggle');
const navigation = document.getElementById('nav');


menuButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
});


// Close the menu after a navigation link is selected.
navigation.querySelectorAll('a').forEach((link => {
  link.addEventListener('click', () => navigation.classList.remove('open'));
});


// Display the current year in the footer.
document.getElementById('year').textContent = new Date().getFullYear();
