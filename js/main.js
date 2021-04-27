const swiper = new Swiper('.slider', {
  // Optional parameters
	slidesPerView: 4,
  spaceBetween: 0,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },

	breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    450: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 30
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 30
    },
	},	
});

const swipe = new Swiper('.work__slider', {
  // Optional parameters
	slidesPerView: 1,
  spaceBetween: 10,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
});

const swip = new Swiper('.review__slider', {
  // Optional parameters
	slidesPerView: 2,
  spaceBetween: 0,
  loop: true,

	breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    450: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 30
    },

    768: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    970: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1200: {
      slidesPerView: 2,
      spaceBetween: 30
    },
	},	

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
});