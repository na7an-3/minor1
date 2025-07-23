const menu = document.getElementById('menu');
const navMenu = document.querySelector('.navmenu');

menu.addEventListener('click', () => {
  menu.classList.toggle('is-active');
  navMenu.classList.toggle('active');
});

document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent actual form submission

  // Simple confirmation message
  alert('Thank you for reaching out! We will get back to you soon.');

  this.reset(); // Clear the form fields
});
