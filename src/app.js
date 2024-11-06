const toggler = document.querySelector(".mode_switch");
const backToTop = document.querySelector(".back_to_top");
const htmlEl = document.querySelector("html");

const toggleMode = () => {
  if (htmlEl.classList.contains("dark")) {
    htmlEl.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    htmlEl.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};

function addThemeToStorage() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    htmlEl.classList.add(`${savedTheme}`);
  }
}

const hamburgerBtn = document.querySelector(".hamBtn");
const menu = document.querySelector(".menu");
const header = document.querySelector("header");
const nav = document.querySelector(".nav");
const nav2 = document.querySelector(".nav2");
const nav3 = document.querySelector(".nav3");
const nav4 = document.querySelector(".nav4");
const nav5 = document.querySelector(".nav5");

hamburgerBtn.addEventListener("click", (e) => {
  hamburgerBtn.classList.toggle("open");
  menu.classList.toggle("open");
  // document.querySelector('body').classList.toggle('hide');
  console.log("object");
});

nav.addEventListener("click", (e) => {
  hamburgerBtn.classList.toggle("open");
  menu.classList.toggle("open");
  // document.querySelector('body').classList.toggle('hide');
  console.log("Hello");
});

nav2.addEventListener("click", (e) => {
  hamburgerBtn.classList.toggle("open");
  menu.classList.toggle("open");
  // document.querySelector('body').classList.toggle('hide');
  console.log("Hello2");
});

nav3.addEventListener("click", (e) => {
  setTimeout(() => {
    hamburgerBtn.classList.toggle("open");
    menu.classList.toggle("open");
  }, 1000);
});

nav4.addEventListener("click", (e) => {
  setTimeout(() => {
    hamburgerBtn.classList.toggle("open");
    menu.classList.toggle("open");
  }, 1000);
});

nav5.addEventListener("click", (e) => {
  setTimeout(() => {
    hamburgerBtn.classList.toggle("open");
    menu.classList.toggle("open");
  }, 1000);
});

window.onscroll = () => {
  header.classList.add("active");
  backToTop.classList.add("active");
};

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop === 0) {
    header.classList.remove("active");
    backToTop.classList.remove("active");
  }
});

function initSwiper() {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    freeMode: true,
    autoHeight: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
      700: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1200: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
    },
  });
}

function init() {
  addThemeToStorage();
  toggler.addEventListener("click", toggleMode);
  initSwiper();
}

document.addEventListener("DOMContentLoaded", init);
