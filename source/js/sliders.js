var swiperPromo = new Swiper(".swiper--promo", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  debugger: true,
});

var swiperAction = new Swiper(".swiper--action", {
  breakpoints: {
    768: {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerView: 1,
    },

    1280: {
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: false,
      },
    },
  },

  debugger: true,
});

//var breakpointDesktop = window.matchMedia( '(min-width: 31.25em)' );
var breakpointDesktop = window.matchMedia( '(min-width: 1200px)' );

var swiperStores = new Swiper(".swiper--product-navigation", {
  // loop: true,
  // slidesPerView: auto,
  //autoplayDisableOnInteraction: false,

  breakpoints: {
    768: {
      loop: true,
      slidesPerView: "auto",
    },

    320: {
      loop: true,
      slidesPerView: "auto",
    },
  },

  //   1280: {
  //     loop: false,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: false,
  //     },
  //   },
  // },

  debugger: true,
});

var breakpointChecker = function() {
  // if larger viewport and multi-row layout needed
  if ( breakpointDesktop.matches === true ) {
     // clean up old instances and inline styles when available
     if ( swiperStores !== undefined ) swiperStores.destroy( true, true );
     // or/and do nothing
     return;
  // else if a small viewport and single column layout needed
  } else if ( breakpointDesktop.matches === false ) {
     // fire small viewport version of swiper
     //return enableSwiper();
     return swiperStores;
  }
};

//swiperStores.autoplay.stop();

// var swiper = new Swiper('.swiper', {
//   // Default parameters
//   slidesPerView: 4,
//   spaceBetween: 40,
//   // Responsive breakpoints
//   breakpoints: {
//     // when window width is <= 320px
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 10
//     },
//     // when window width is <= 480px
//     480: {
//       slidesPerView: 2,
//       spaceBetween: 20
//     },

//     // when window width is <= 640px
//     640: {
//       slidesPerView: 3,
//       spaceBetween: 30
//     },
//   },
// });
