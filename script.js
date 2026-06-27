// ===============================
// AI Interview Practice
// script.js
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("AI Interview Practice Loaded Successfully!");

    // -----------------------------
    // Welcome Alert (only once)
    // -----------------------------
    setTimeout(() => {
        console.log("Welcome Pooja 👋");
    }, 1000);


    // -----------------------------
    // Navbar Scroll Effect
    // -----------------------------
    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){

            navbar.style.background = "rgba(15,23,42,0.95)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

        }else{

            navbar.style.background = "rgba(255,255,255,.08)";
            navbar.style.boxShadow = "none";

        }

    });



    // -----------------------------
    // Smooth Scroll
    // -----------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({
                    behavior:"smooth"
                });

            }

        });

    });



    // -----------------------------
    // Button Click Events
    // -----------------------------

    const startBtn = document.querySelector(".start");
    const learnBtn = document.querySelector(".learn");


    if(startBtn){

        startBtn.addEventListener("click",()=>{

           window.location.href = "pages/interview.html";

            // Future
            // window.location.href="pages/interview.html";

        });

    }



    if(learnBtn){

        learnBtn.addEventListener("click",()=>{

            document.querySelector(".features").scrollIntoView({

                behavior:"smooth"

            });

        });

    }



    // -----------------------------
    // Login Button
    // -----------------------------

    const loginBtn=document.querySelector(".login-btn");

    if(loginBtn){

        loginBtn.addEventListener("click",()=>{

            window.location.href = "pages/interview.html";

            // Future
            // window.location.href="pages/login.html";

        });

    }



    // -----------------------------
    // Card Hover Animation
    // -----------------------------

    const cards=document.querySelectorAll(".card");


    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transform="translateY(-12px) scale(1.03)";

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="translateY(0px) scale(1)";

        });

    });




    // -----------------------------
    // Scroll Reveal Animation
    // -----------------------------

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";

                entry.target.style.transform="translateY(0px)";

            }

        });

    },{

        threshold:0.2

    });




    document.querySelectorAll(".card,.left,.right,.features h2").forEach(el=>{

        el.style.opacity="0";

        el.style.transform="translateY(50px)";

        el.style.transition="all 1s ease";

        observer.observe(el);

    });



    // -----------------------------
    // Active Navigation Link
    // -----------------------------

    const navLinks=document.querySelectorAll("nav ul li a");

    navLinks.forEach(link=>{

        link.addEventListener("click",()=>{

            navLinks.forEach(nav=>nav.classList.remove("active"));

            link.classList.add("active");

        });

    });



    // -----------------------------
    // Typing Effect
    // -----------------------------

    const heading=document.querySelector(".left h1");

    const originalText=heading.innerHTML;

    heading.innerHTML="";

    let index=0;

    function typeEffect(){

        if(index<originalText.length){

            heading.innerHTML+=originalText.charAt(index);

            index++;

            setTimeout(typeEffect,25);

        }

    }

    typeEffect();



    // -----------------------------
    // Footer Year
    // -----------------------------

    const footer=document.querySelector("footer p");

    const year=new Date().getFullYear();

    footer.innerHTML=`© ${year} AI Interview Practice | Made with ❤️ by Pooja`;

});