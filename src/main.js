document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(
    '[data-collapse-toggle="navbar-sticky"]',
  );
  const navbarMenu = document.getElementById("navbar-sticky");

  toggleButton.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
    toggleButton.classList.toggle("active");
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const animationClass = element.dataset.animation;
        element.classList.add(animationClass);
        observer.unobserve(element); // Remove observer after animating once
      }
    });
  }, {
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  // Observe each section with data-animation attribute
  document.querySelectorAll("[data-animation]").forEach((el) => {
    observer.observe(el);
  });

  const blackButtons = document.querySelectorAll('.btn-black');
  blackButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('btn-black--outline');
    });
  });
});
