let swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  speed: 1000,
  effect: "fade",
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// gallery
let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
  // burger
const menuBtn = document.querySelector(".menu__btn-burg");
const menu = document.querySelector(".nav__list");
const body = document.querySelector("body");

menuBtn.addEventListener("click", () =>  toogleBurger());

const toogleBurger = () => {
   menu.classList.toggle("nav__list--active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("scroll");
}

// mail
function sendMail(event) {
  event.preventDefault();

  // Получите значение поля email
  const name = $("#name").val();
  const tel = $("#phone").val();
  const email = $("#email").val();
  const message = $("#message").val();
  if(!name || !tel || !email || !message){
    alert("Enter all fields");
    return;
  }
  let params = {
    name,
    tel,
    email,
    message,
  };

  const serviceID = "service_3z7ej3q";
  const templateID = "template_jh4pchl";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      $("#name").val("");
      $("#phone").val("");
      $("#email").val("");
      $("#message").val("");
      alert("Email has been sent");
    })
    .catch((err) => console.log(err));
}

function offSetTop(selector){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(selector).offset().top
    }, 2000);
    toogleBurger();
  }

 $("#link-1").click(() => offSetTop("#section1"));
 $("#link-2").click(() => offSetTop("#section2"));
 $("#link-3").click(() => offSetTop("#section4"));
 $("#link-5").click(() => offSetTop("#section5"));