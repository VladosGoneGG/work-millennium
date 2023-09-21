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

// mail

function sendMail(event) {
  event.preventDefault();

  // Получите значение поля email
  const emailValue = document.getElementById("email").value;

  // Проверьте, что emailValue не пуст и соответствует формату email
  if (emailValue.trim() === "") {
    alert("Please enter your email address.");
    return; // Прекратить выполнение функции, если email пуст
  } else if (!isValidEmail(emailValue)) {
    alert("Please enter a valid email address.");
    return; // Прекратить выполнение функции, если email имеет неправильный формат
  }

  // Если email прошел проверку, продолжайте отправку

  let params = {
    name: document.getElementById("name").value,
    tel: document.getElementById("phone").value,
    email: emailValue,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_3z7ej3q";
  const templateID = "template_jh4pchl";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message was sent successfully.");
    })
    .catch((err) => console.log(err));
}

// mail footer
