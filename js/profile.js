// profile.js

document.addEventListener("DOMContentLoaded", () => {

    // Get user data from localStorage
    const userName = localStorage.getItem("userName");
    const userEmail = localStorage.getItem("userEmail");

    // Display user name
    const nameElement = document.getElementById("profileName");
    if (nameElement) {
        nameElement.textContent = userName || "Guest User";
    }

    // Display user email
    const emailElement = document.getElementById("profileEmail");
    if (emailElement) {
        emailElement.textContent = userEmail || "Not Available";
    }

    // Logout button
    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {

            const confirmLogout = confirm("Are you sure you want to logout?");

            if (confirmLogout) {
                localStorage.removeItem("userName");
                localStorage.removeItem("userEmail");
                localStorage.removeItem("userPassword");

                window.location.href = "login.html";
            }
        });
    }

});