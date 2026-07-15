// for contact
const restStatus = document.getElementById("rest-status");
//getting the mins and hour
const now = new Date();
const currentHour = now.getHours();
const currentMinutes = now.getMinutes();
//opening and closing time
const openingHour = 8;
const closingHour = 21;
const closingMinutes = 30;

//now th conditions
if (
    currentHour > openingHour &&  currentHour < closingHour ||
    (currentHour === openingHour && currentMinutes >= 0) ||
    (currentHour === closingHour && currentMinutes <= closingMinutes)
){
    restStatus.textContent = "Open Now • Closes at 9:30 PM";
    restStatus.style.color = "green"
} else{
    restStatus.textContent = "Closed • Opens at 8:00 AM";
    restStatus.style.color = "red";
}

//for navs
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

const backtoTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if(window.scrollY > 300){
        backtoTop.style.display = "block"
    }else{
        backtoTop.style.display = "none";
    }
});

backtoTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behaviour: "smooth"
    });
});

//hamburger
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuToggle.classList.remove("bi-list");
        menuToggle.classList.add("bi-x");
    } else {
        menuToggle.classList.remove("bi-x");
        menuToggle.classList.add("bi-list");
    }

});

const navLink = document.querySelectorAll(".navbar a");

navLink.forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");
        menuToggle.classList.remove("bi-x");
        menuToggle.classList.add("bi-list");

    });

});