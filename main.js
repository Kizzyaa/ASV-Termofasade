const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
  },
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
});
document.addEventListener("DOMContentLoaded", function () {
  const link = document.querySelector('.top__link');
  const target = document.getElementById('Связаться');

  link.addEventListener('click', function (e) {
      e.preventDefault(); // Отменяем стандартное поведение ссылки
      target.scrollIntoView({
          behavior: 'smooth', // Плавная прокрутка
          block: 'start',    // Начальная точка отображения элемента
      });
  });
});
