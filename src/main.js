import Swiper from 'swiper';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

Swiper.use([Pagination, Navigation, Autoplay, EffectFade]);

document.addEventListener("DOMContentLoaded", () => {
  scrollTo({ top: 0, behavior: 'smooth' });

  const toggleButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
  const navbarMenu = document.getElementById("navbar-sticky");
  const links = document.querySelectorAll(".nav-text-link");
  const currentPath = window.location.pathname;

  links.forEach(link => {
    if (link.getAttribute("href") === currentPath) link.classList.add("active");
  });

  toggleButton.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
    toggleButton.classList.toggle("active");
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      const animationClass = target.dataset.animation;
      if (isIntersecting) {
        target.classList.add(animationClass);
        target.setAttribute('data-inviewport', 'true');
        observer.unobserve(target);
      } else {
        target.setAttribute('data-inviewport', 'false');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll("[data-animation]").forEach(el => observer.observe(el));

  document.querySelectorAll('.btn-black').forEach(button => {
    button.addEventListener('click', () => button.classList.toggle('btn-black--outline'));
  });

  const initSwiper = (selector, options, navSelector) => {
    const swiper = new Swiper(selector, options);
    if (navSelector) {
      swiper.on('slideChange', () => {
        document.querySelectorAll(`${navSelector} li`).forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`${navSelector} li[data-slide="${swiper.realIndex}"]`);
        activeLink?.classList.add('active');
      });

      document.querySelectorAll(`${navSelector} li`).forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          swiper.slideTo(parseInt(link.getAttribute('data-slide'), 10));
        });
        // Hover: stop autoplay
        link.addEventListener('mouseenter', () => {
          if (swiper.autoplay) {
            swiper.autoplay.stop();
          }
        });

        // Mouse leave: start autoplay
        link.addEventListener('mouseleave', () => {
          if (swiper.autoplay) {
            swiper.autoplay.start();
          }
        });
      });
    }
    return swiper;
  };

  initSwiper(".swiper--stories", {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper--stories__swiper-arrowRight",
      prevEl: ".swiper--stories__swiper-arrowLeft",
    },
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: {
      320: { slidesPerView: 1.2, spaceBetween: 24 },
      768: { slidesPerView: 2, spaceBetween: 44 },
    },
  });

  initSwiper(".swiper--steps", {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    autoplay: { delay: 7500, disableOnInteraction: false },
  }, '.swiper-steps-nav');

  initSwiper(".swiper--vision", {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    autoplay: { delay: 7500, disableOnInteraction: false },
  }, '.swiper-vision-nav');

  initSwiper(".swiper--principles", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper--principles__swiper-arrowRight",
      prevEl: ".swiper--principles__swiper-arrowLeft",
    },
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: {
      320: { slidesPerView: 1.2 },
      768: { slidesPerView: 1.75 },
    },
  });

  initSwiper(".swiper--press", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper--press__swiper-arrowRight",
      prevEl: ".swiper--press__swiper-arrowLeft",
    },
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: {
      320: { slidesPerView: 1.25 },
      520: { slidesPerView: 1.75 },
      768: { slidesPerView: 2.5 },
      1024: { slidesPerView: 3.5 },
    },
  });
});