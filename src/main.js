// main.js
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.mySwiper', {
    loop: true,               // ぐるっと一周（無限ループ）
    centeredSlides: true,     // 中央スナップ
    slidesPerView: 'auto',    // 自動幅（カード幅に合わせる）
    spaceBetween: 32,         // カード間余白（space-x-8相当）
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,  // 3秒ごとに自動スライド（任意）
      disableOnInteraction: false,
    },
  });
});
