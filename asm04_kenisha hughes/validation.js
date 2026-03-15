document.getElementById("form").addEventListener("submit", function (event) {
  // Prevent default form submission
  event.preventDefault();

  // Get form input values
  const username = document.getElementById("username-input").value.trim();
  const email = document.getElementById("email-input").value.trim();
  const password = document.getElementById("password-input").value.trim();

  // Validate inputs
  if (!username || !email || !password) {
    alert("Please fill in all fields (Username, Email, and Password).");
    return;
  }


  if (username.length < 7) {
    alert("Username must be at least 7 characters long.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return;
  }

  // Function to validate email format
function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Function to validate password strength
function validatePassword(password) {
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return passwordPattern.test(password);
}


  // Simulate successful login
  alert(`Welcome, ${username}! You have successfully logged in.`);
  window.location.href = "aboutme.html";
});