// report.js

document.addEventListener("DOMContentLoaded", () => {

    const reportContainer = document.getElementById("reportContainer");
    const scoreElement = document.getElementById("score");
    const clearBtn = document.getElementById("clearReport");

    const answers = JSON.parse(localStorage.getItem("interviewAnswers")) || [];

    if (answers.length === 0) {

        reportContainer.innerHTML = `
            <p>No interview report found.</p>
        `;

        scoreElement.textContent = "Score: 0 / 100";

    } else {

        let output = "";

        answers.forEach((answer, index) => {

            output += `
                <div class="report-card">
                    <h3>Question ${index + 1}</h3>
                    <p>${answer}</p>
                </div>
            `;

        });

        reportContainer.innerHTML = output;

        // Simple scoring
        const score = Math.min(answers.length * 20, 100);

        scoreElement.textContent = `Score: ${score} / 100`;

    }

    // Clear Report
    if (clearBtn) {

        clearBtn.addEventListener("click", () => {

            const confirmDelete = confirm("Do you want to clear the report?");

            if (confirmDelete) {

                localStorage.removeItem("interviewAnswers");

                alert("Report deleted successfully!");

                location.reload();

            }

        });

    }

});