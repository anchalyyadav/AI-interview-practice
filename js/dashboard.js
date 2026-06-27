// dashboard.js

document.addEventListener("DOMContentLoaded", () => {

    // Welcome message
    const userName = localStorage.getItem("userName");

    const welcomeText = document.getElementById("welcomeUser");

    if (welcomeText) {
        welcomeText.textContent = userName
            ? `Welcome, ${userName}!`
            : "Welcome to AI Interview Practice!";
    }

    // Logout Button
    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {

            const confirmLogout = confirm("Are you sure you want to logout?");

            if (confirmLogout) {
                localStorage.removeItem("userName");
                window.location.href = "login.html";
            }
        });
    }

});