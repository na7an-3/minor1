document.addEventListener('DOMContentLoaded', () => {
  // ====== SIGNUP FORM VALIDATION ======
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    const email = signupForm.querySelector('#email');
    const pass1 = signupForm.querySelector('#password1');
    const pass2 = signupForm.querySelector('#password2');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{7,12}$/;

    signupForm.addEventListener('submit', (e) => {
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

      // Save user data in localStorage as JSON
      const user = {
        email: email.value.trim(),
        password: pass1.value
      };
      localStorage.setItem('user', JSON.stringify(user));

      alert('Registration successful!');
      window.location.href = 'login2.html'; // Redirect to login page
    });
  }

  // ====== LOGIN FORM VALIDATION ======
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    const emailInput = loginForm.querySelector('#lemail');
    const passwordInput = loginForm.querySelector('#lpassword1');

    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const storedUser = localStorage.getItem('user');
      if (!storedUser) {
        alert('No registered user found. Please sign up first.');
        return;
      }

      const user = JSON.parse(storedUser);

      if (emailInput.value.trim() !== user.email || passwordInput.value !== user.password) {
        alert('Invalid email or password.');
        return;
      }

      alert('Login successful!');
      window.location.href = 'index.html';
    });
  }
});
