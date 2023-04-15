// ===========  education and skills Togole section========
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// =================== typed animation ======
const typed = new Typed ('.multiple-type', {
  strings: ['Leader', 'Freelancer', 'Self-larner', 'Blogger', 'Mentor', 'Cadet'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
  });

// =================== ScrollReveal animation ======
ScrollReveal({
  reset: true ,
  distance: '80px',
  duration: 2000,
  delay: 500
  });
  
  ScrollReveal().reveal('.title, .about-img-effect', { origin: 'top' });
  ScrollReveal().reveal('.home-content, .about-content, .Achieve-img, .Carousel-effect', { origin: 'bottom' });
  
  ScrollReveal().reveal('.home-content h1, .home-content a, .about-content h1, .contact-left', { origin: 'left' });
  
  ScrollReveal().reveal('.contact-right', { origin: 'right' });