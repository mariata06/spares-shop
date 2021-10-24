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

var swiperBestsellers = new Swiper(".swiper--bestsellers-list", {
  // slidesPerView: 4,
  // loop: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

  breakpoints: {
    320: {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },

    1440: {
      slidesPerView: 4,
      //spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },

    1920: {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  debugger: true,
});

var swiperRelevants = new Swiper(".swiper--relevants-list", {
  // slidesPerView: 4,
  // loop: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

  breakpoints: {
    320: {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },

    1440: {
      slidesPerView: 4,
      //spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },

    1920: {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  debugger: true,
});

var swiperAction = new Swiper(".swiper--action", {
  breakpoints: {
    320: {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      slidesPerView: 1,
    },

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

  debugger: true,
});

var swiperFilter = new Swiper(".swiper--filter", {
  breakpoints: {
    1200: {
      loop: false,
      slidesPerView: "auto",
    },

    768: {
      loop: true,
      slidesPerView: "auto",
    },

    320: {
      loop: true,
      slidesPerView: "auto",
    },
  },

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
