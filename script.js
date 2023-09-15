const swiper = new Swiper(".mySwiper", {
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
const navItems = document.querySelectorAll(".nav-text");
const sections = document.querySelectorAll("section");

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
  });
});

// Получите ссылки на элементы списка и на div-элементы
const advaLinks = document.querySelectorAll(".adva-link");
const advaDivs = document.querySelectorAll(".adva__place");

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
