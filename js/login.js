// Wait until page is loaded
document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validation
        if (email === "" || password === "") {
            alert("Please fill all fields.");
            return;
        }

        // Demo Login
        alert("Login Successful!");

        // Redirect to dashboard
        window.location.href = "dashboard.html";

    });

});