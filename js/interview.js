// ==========================
// AI Interview Practice
// interview.js
// ==========================

// Interview Questions

const questions = [
    "Tell me about yourself.",
    "Why should we hire you?",
    "What are your strengths?",
    "What are your weaknesses?",
    "Why do you want to join our company?",
    "Explain a challenging project you worked on.",
    "What is your biggest achievement?",
    "Where do you see yourself in 5 years?",
    "How do you handle pressure?",
    "Do you have any questions for us?"
];

let index = 0;

// Elements

const question = document.getElementById("question");
const nextBtn = document.querySelector(".next-btn");
const submitBtn = document.querySelector(".submit-btn");
const endBtn = document.querySelector(".end-btn");
const timer = document.getElementById("time");

// ==========================
// Next Question
// ==========================

nextBtn.addEventListener("click", () => {

    index++;

    if(index >= questions.length){

        index = 0;

    }

    question.innerText = questions[index];

});

// ==========================
// Submit Answer
// ==========================

submitBtn.addEventListener("click", () => {

   submitBtn.addEventListener("click", () => {

    nextBtn.click();


});

});

// ==========================
// End Interview
// ==========================

endBtn.addEventListener("click", () => {

    if (stream) {
        stream.getTracks().forEach(track => {
            track.stop();
        });

        video.srcObject = stop;
    }

});

      window.location.href = "dashboard.html";


// ==========================
// Timer (15 Minutes)
// ==========================

let minutes = 15;
let seconds = 0;

function startTimer(){

    const interval = setInterval(()=>{

        if(minutes===0 && seconds===0){

            clearInterval(interval);

submitBtn.addEventListener("click", () => {

    nextBtn.click();

});


            window.location.href="dashboard.html";

            return;

        }

        if(seconds===0){

            minutes--;
            seconds=59;

        }

        else{

            seconds--;

        }

        timer.innerText =
        String(minutes).padStart(2,"0")
        + ":" +
        String(seconds).padStart(2,"0");

    },1000);

}

startTimer();

// ==========================
// Camera Access
// ==========================

let cameraStream;

const cameraBox = document.querySelector(".camera-preview");

if(navigator.mediaDevices){

navigator.mediaDevices.getUserMedia({

video:true,
audio:true

});

video,srcObject = stream;

then(stream=>{cameraStream = stream;

const video=document.createElement("video");

video.srcObject=stream;

video.autoplay=true;

video.style.width="100%";

video.style.height="100%";

video.style.objectFit="cover";

video.style.borderRadius="18px";

cameraBox.innerHTML="";

cameraBox.appendChild(video);

})

.catch(()=>{

cameraBox.innerHTML="<h3 style='color:white;'>Camera Permission Denied</h3>";

});

}
