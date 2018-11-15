'use strict'
$(document).ready(() => {
  
  AOS.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'section', // class applied after initialization
  animatedClassName: 'fade-up', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 320, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  
  });
      $(".text-wrapper").delay(200).fadeIn(500);
//Morphext - text rotator in jumbotron
      $(".rotate").Morphext({
        animation: "flipInX",
        separator: ",", 
        speed: 3000
      });

      var scroll = new SmoothScroll('a[href*="#"]', {
        // Selectors
        ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
        header: false, // Selector for fixed headers (must be a valid CSS selector)
        topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"
      
        // Speed & Easing
        speed: 500, // Integer. How fast to complete the scroll in milliseconds
        clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
        offset: function (mql) {
          mql = 992;
          if ($(window).width() > mql) {
            return 40
          } else {
            return 0
          }
          },
        easing: 'easeInOutCubic', // Easing pattern to use
              
        // History
        updateURL: false, // Update the URL on scroll
        popstate: true, // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)
      
        // Custom Events
        emitEvents: true // Emit custom events
      
      });
      
    $(window).scroll(function () {
              var scroll = $(window).scrollTop();
              var speed = 0.5; // dobrze znaleźć mniejsza wartosc

              $("#home").css({
                backgroundSize: (100 + scroll/80) + "%"
              })
            

              $('.hero').each(function () {
                      
                var $this = $(this);
                var $parent = $this.parent()
                var topOffset = $parent.offset().top;
                var height = $parent.outerHeight(true);
                var parallaxSize = (topOffset - scroll) * speed; //tu jest klucz do poruszania w dol lub w gore
                var opacitySize = (scroll - topOffset) * 0.01; //tu jest klucz do poruszania w dol lub w gore
      
                // prevent parallax when scroll down
                if (scroll > topOffset + height) {
                  return;
                }
      
                $this.css({
                  'transform': scroll >= topOffset ? ('translateY(' + parallaxSize + 'px)') : '',
                  'opacity': scroll >= (topOffset) ? 1/opacitySize : '',
                  'z-index': '1'
                });
              });
            });


    });

// // =========================
//   // Show the navbar when the page is scrolled up
//   var MQL = 992;
//   //primary navigation slide-in effect
//   if ($(window).width() > MQL) {
//     var headerHeight = $('#mainNav').height();
//     $(window).on('scroll', {
//         previousTop: 0
//       },
//       function () {
//         var currentTop = $(window).scrollTop();
//         //check if user is scrolling up
//         if (currentTop < this.previousTop) {
//           //if scrolling up...
//           if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
//             $('#mainNav').addClass('is-visible');
//           } else {
//             $('#mainNav').removeClass('is-visible is-fixed');
//           }
//         } else if (currentTop > this.previousTop) {
//           //if scrolling down...
//           $('#mainNav').removeClass('is-visible');
//           if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
//         }
//         this.previousTop = currentTop;
//       });

// }), $(function () {
//   var e = $("#nav-toggle");
//   menu = $("nav ul"), menuHeight = menu.height(), header = $("header#top"), $(e).on("click", function (e) {
//     e.preventDefault(), menu.slideToggle(250), this.classList.toggle("active"), $("#top").hasClass("visable") ? console.log("Problem") : header.toggleClass("visable")
//   }), $(window).resize(function () {
//     var e = $(window).width();
//     e > 320 && menu.is(":hidden") && menu.removeAttr("style")
//   })
// }), $(window).scroll(function () {
//   $(this).scrollTop() >= 200 ? $("header#top").addClass("visable") : $(this).scrollTop() <= 700 && $("header#top").removeClass("visable")
// }), $(".flipUp").textrotator({
//   animation: "flipUp",
//   separator: ",",
//   speed: 3500
// });
// var project = $("#projects article"),
//   viewProject = $("span");
// project.hover(function () {
//     project.addClass("dim"), $(this).removeClass("dim"), $(this).hover(function () {
//       viewProject.toggleClass("slide")
//     })
//   }), project.mouseleave(function () {
//     project.removeClass("dim"), viewProject.removeClass("slide")
//   }), $("#cbp-fwslider").cbpFWSlider(), $(function () {
//       $("article").readingTime({
//         readingTimeTarget: $(this).find(".eta")
//       })




//       $(window).scroll(function () {
//         var scroll = $(window).scrollTop();
//         var speed = 1; // dobrze znaleźć mniejsza wartosc

//         $('.scroller').each(function () {
//           {
//             /* <div class="scroller">
//                        <h1>Portfolio</h1>
//                         <em>section parallax</em>
//                   </div> */
//           }

//           var $this = $(this);
//           var $parent = $this.parent().css("background", "red");
//           var topOffset = $parent.offset().top;
//           var height = $parent.outerHeight(true);
//           var parallaxSize = (topOffset - scroll) * speed; //tu jest klucz do poruszania w dol lub w gore

//           // prevent parallax when scroll down
//           if (scroll > topOffset + height) {
//             return;
//           }

//           $this.css({
//             'transform': scroll >= topOffset ? ('translateY(' + parallaxSize + 'px)') : ''
//           });
//         });




        // ==========================
