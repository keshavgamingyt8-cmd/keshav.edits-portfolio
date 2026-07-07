const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>30){

navbar.style.background="rgba(5,5,5,.85)";

}else{

navbar.style.background="rgba(5,5,5,.55)";

}

});

const card=document.querySelector(".preview-card");

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX/card.clientWidth-.5;

const y=e.offsetY/card.clientHeight-.5;

card.style.transform=
`rotateY(${x*12}deg) rotateX(${-y*12}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateY(0deg) rotateX(0deg)";

});
const links=document.querySelectorAll(".navbar a");

links.forEach(link=>{

link.addEventListener("click",()=>{

links.forEach(l=>l.classList.remove("active"));

link.classList.add("active");

});

});
// Counter Animation
const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function runCounters() {

    if (counterStarted) return;

    const statsSection = document.querySelector(".stats");

    const sectionTop = statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = +counter.dataset.target;

            let current = 0;

            const increment = Math.ceil(target / 80);

            const updateCounter = () => {

                current += increment;

                if (current >= target) {

                    counter.innerText = target;

                } else {

                    counter.innerText = current;

                   setTimeout(updateCounter,30);

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener("scroll", runCounters);
runCounters();

// FAQ

const faqs=document.querySelectorAll(".faq-item");

faqs.forEach(item=>{

item.querySelector(".faq-question").onclick=()=>{

item.classList.toggle("active");

};

});
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
});