// interview.js

document.addEventListener("DOMContentLoaded", () => {

    const questions = [
        "Tell me about yourself.",
        "What are your strengths?",
        "What are your weaknesses?",
        "Why do you want to join our company?",
        "Where do you see yourself in 5 years?"
    ];

    let currentQuestion = 0;
    const answers = [];

    const questionText = document.getElementById("question");
    const answerInput = document.getElementById("answer");
    const nextBtn = document.getElementById("nextBtn");
    const progress = document.getElementById("progress");

    function loadQuestion() {
        questionText.textContent = questions[currentQuestion];
        progress.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
        answerInput.value = "";
        answerInput.focus();
    }

    nextBtn.addEventListener("click", () => {

        const answer = answerInput.value.trim();

        if (answer === "") {
            alert("Please enter your answer.");
            return;
        }

        answers.push(answer);

        currentQuestion++;

        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {

            localStorage.setItem("interviewAnswers", JSON.stringify(answers));

            alert("Interview Completed Successfully!");

            window.location.href = "report.html";
        }

    });

    loadQuestion();

});