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

// Получите ссылки на элементы списка и секции
let navItems = document.querySelectorAll(".nav-text");
let sections = document.querySelectorAll("section");

// По умолчанию покажите только первую секцию
sections[0].style.display = "block";

// Добавьте обработчики событий для кликов на элементы списка
navItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Скрыть все секции
    sections.forEach((section) => {
      section.style.display = "none";
    });

    // Показать только выбранную секцию
    sections[index].style.display = "block";

    // Добавьте код для скрытия формы в футере, если секция "CONTACT US" отображается
    if (sections[index].id === "contact-us") {
      document.querySelector(".contact-form-footer").style.display = "none";
    } else {
      // В противном случае, покажите форму в футере
      document.querySelector(".contact-form-footer").style.display = "grid";
    }
  });
});

// Получите ссылки на элементы списка и на div-элементы
let advaLinks = document.querySelectorAll(".adva-link");
let advaDivs = document.querySelectorAll(".adva__place");

// Скройте все div-элементы, кроме первого
for (let i = 1; i < advaDivs.length; i++) {
  advaDivs[i].style.display = "none";
}

// Добавьте обработчики событий для кликов на элементы списка
advaLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    // Скройте все div-элементы
    advaDivs.forEach((div) => {
      div.style.display = "none";
    });

    // Показать div-элемент, соответствующий кликнутому элементу списка
    advaDivs[index].style.display = "block";
  });
});

// burger

const menuBtn = document.querySelector(".menu__btn-burg");
const menu = document.querySelector(".nav__list");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("nav__list--active");
  menuBtn.classList.toggle("active");
});

// Получите ссылки на элементы навигации
const navItemsMob = document.querySelectorAll(".nav-text");

// Добавьте обработчики событий для элементов навигации
navItems.forEach((navItemMob) => {
  navItemMob.addEventListener("click", () => {
    // Закройте меню, добавив класс, который скрывает его
    menu.classList.remove("nav__list--active");
    menuBtn.classList.remove("active");
  });
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

// plans

function myFunction(imgs) {
  // Get the expanded image
  let expandImg = document.getElementById("expandedImg");
  // Get the image text
  let imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
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

function sendMailFooter(event) {
  event.preventDefault();
  // Получите значение поля email
  const emailValue = document.getElementById("email-f").value;

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
    name: document.getElementById("name-f").value,
    tel: document.getElementById("phone-f").value,
    email: emailValue,
  };

  const serviceID = "service_3z7ej3q";
  const templateID = "template_jh4pchl";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name-f").value = "";
      document.getElementById("phone-f").value = "";
      document.getElementById("email-f").value = "";
      console.log(res);
      alert("Your message was sent successfully.");
    })
    .catch((err) => console.log(err));
}

// Функция для проверки валидности email
function isValidEmail(email) {
  // Простейшая проверка формата email с использованием регулярного выражения
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
