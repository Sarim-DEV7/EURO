```javascript
/* ===================================
   EURO ENTERPRISES JAVASCRIPT
=================================== */

/* ===========================
   COUNTER ANIMATION
=========================== */
alert("JavaScript Loaded!");
const counters = document.querySelectorAll(".stat-box h2");

const startCounter = (counter) => {

    const target =
        parseInt(
            counter.innerText.replace(/\D/g,"")
        );

    let current = 0;

    const increment = target / 100;

    const updateCounter = () => {

        current += increment;

        if(current < target){

            counter.innerText =
                Math.floor(current) + "+";

            requestAnimationFrame(updateCounter);

        }else{

            counter.innerText =
                target + "+";

        }

    };

    updateCounter();

};

const observer = new IntersectionObserver(
(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            startCounter(
                entry.target.querySelector("h2")
            );

            observer.unobserve(entry.target);

        }

    });

},
{
    threshold:0.5
}
);

document
.querySelectorAll(".stat-box")
.forEach(box=>{

    observer.observe(box);

});


/* ===========================
   SCROLL REVEAL
=========================== */

const hiddenElements =
document.querySelectorAll(
".service-card, .project-card, .testimonial, .about-content, .about-image, .solar-content, .solar-image"
);

hiddenElements.forEach(el=>{
    el.classList.add("hidden");
});

const revealObserver =
new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:0.15
}
);

hiddenElements.forEach(el=>{

    revealObserver.observe(el);

});


/* ===========================
   BACK TO TOP BUTTON
=========================== */

const topButton =
document.createElement("button");

topButton.innerHTML = "↑";

topButton.classList.add("top-btn");

document.body.appendChild(topButton);

topButton.style.display = "none";

window.addEventListener(
"scroll",
()=>{

    if(window.scrollY > 400){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

}
);

topButton.addEventListener(
"click",
()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

}
);


/* ===========================
   NAVBAR EFFECT
=========================== */

const header =
document.querySelector(".header");

window.addEventListener(
"scroll",
()=>{

    if(window.scrollY > 80){

        header.style.boxShadow =
        "0 5px 25px rgba(0,0,0,.12)";

    }else{

        header.style.boxShadow =
        "none";

    }

}
);


/* ===========================
   TESTIMONIAL SLIDER
=========================== */

const testimonials =
document.querySelectorAll(
".testimonial"
);

let testimonialIndex = 0;

function showTestimonials(){

    testimonials.forEach(item=>{

        item.style.display = "none";

    });

    testimonialIndex++;

    if(
        testimonialIndex >
        testimonials.length
    ){

        testimonialIndex = 1;

    }

    testimonials[
        testimonialIndex - 1
    ].style.display = "block";

}

if(testimonials.length > 0){

    showTestimonials();

    setInterval(
        showTestimonials,
        4000
    );

}



/* ===========================
   HERO BUTTON ANIMATION
=========================== */

const buttons =
document.querySelectorAll(
".primary-btn, .secondary-btn"
);

buttons.forEach(button=>{

    button.addEventListener(
    "mouseenter",
    ()=>{

        button.style.transform =
        "translateY(-5px)";

    });

    button.addEventListener(
    "mouseleave",
    ()=>{

        button.style.transform =
        "translateY(0)";

    });

});

const form = document.querySelector(".contact-form");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

    });

}



/* ===========================
   FLOATING WHATSAPP BUTTON
=========================== */

const whatsapp =
document.createElement("a");

whatsapp.href =
"https://wa.me/03332180943";

whatsapp.target = "_blank";

whatsapp.classList.add(
"whatsapp-btn"
);

whatsapp.innerHTML = "💬";

document.body.appendChild(
whatsapp
);


/* ===========================
   PARALLAX HERO EFFECT
=========================== */

window.addEventListener(
"scroll",
()=>{

    const hero =
    document.querySelector(
    ".hero"
    );

    if(hero){

        hero.style.backgroundPositionY =
        window.pageYOffset * 0.5 + "px";

    }

});


/* ===========================
   CURRENT YEAR FOOTER
=========================== */

const footer =
document.querySelector("footer");

if(footer){

    const year =
    new Date().getFullYear();

    footer.innerHTML =
    footer.innerHTML.replace(
    "2026",
    year
    );

}
```
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value;

    const phone = form.querySelectorAll('input')[2].value;

    const message = form.querySelector("textarea").value;

    const whatsappMessage =
        `Hello Euro Enterprises!%0A%0AName: ${name}%0APhone: ${phone}%0AMessage: ${message}`;

    window.open(
        `https://wa.me/03332180943?text=${whatsappMessage}`,
        "_blank"
    );
}); 
function calculateSavings(){

    const bill =
    Number(document.getElementById("bill").value);

    const system =
    Number(document.getElementById("system").value);

    if(bill <= 0){

        document.getElementById("results").innerHTML =
        "<p>Please enter a valid bill.</p>";

        return;
    }

    let monthlySavings;

    if(system === 5){

        monthlySavings = Math.round(bill * 0.50);

    }else if(system === 10){

        monthlySavings = Math.round(bill * 0.80);

    }else{

        monthlySavings = Math.round(bill * 1.00);

    }

    const yearlySavings =
    monthlySavings * 12;

    document.getElementById("results").innerHTML = `

        <div class="result-card">
            <h3>System Size</h3>
            <p>${system} kW</p>
        </div>

        <div class="result-card">
            <h3>Monthly Savings</h3>
            <p>Rs ${monthlySavings.toLocaleString()}</p>
        </div>

        <div class="result-card">
            <h3>Yearly Savings</h3>
            <p>Rs ${yearlySavings.toLocaleString()}</p>
        </div>

    `;
}
function toggleMenu(){

    const navbar =
    document.querySelector(".navbar");

    const button =
    document.querySelector(".menu-toggle");

    navbar.classList.toggle("active");

    if(navbar.classList.contains("active")){

        button.innerHTML = "&times;";

    }else{

        button.innerHTML = "&#9776;";

    }

}
