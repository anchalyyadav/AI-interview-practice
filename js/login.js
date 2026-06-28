// login.js

document.addEventListener("DOMContentLoaded", function () {

  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Basic validation
    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    // Dummy login check (you can replace with real backend later)
    if (email.length < 5) {
      alert("Invalid email");
      return;
    }

    if (password.length < 4) {
      alert("Password too short");
      return;
    }

    // Save login state (optional but useful)
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);

    // Redirect to dashboard
    window.location.href = "dashboard.html";
  });

});