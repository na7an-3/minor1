
const form = document.getElementById('signupForm');
const email = document.getElementById('email');
const pass1 = document.getElementById('password1');
const pass2 = document.getElementById('password2');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{7,12}$/;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (!emailPattern.test(email.value.trim())) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!passwordPattern.test(pass1.value)) {
    alert('Password must be 7-12 characters long, include uppercase, lowercase, and a number.');
    return;
  }

  if (pass2.value !== pass1.value) {
    alert('Passwords do not match.');
    return;
  }

const userData = {
    email: email.value.trim(),
    password: pass1.value 
  };

  localStorage.setItem('user', JSON.stringify(userData));
  alert('Registration successful!');
  window.location.href = 'login2.html';
});


