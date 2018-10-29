'use strict'
$(document).ready(() => {
// =========================



  // Show the navbar when the page is scrolled up
  var MQL = 992;
  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('#mainNav').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function () {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
          //if scrolling up...
          if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
            $('#mainNav').addClass('is-visible');
          } else {
            $('#mainNav').removeClass('is-visible is-fixed');
          }
        } else if (currentTop > this.previousTop) {
          //if scrolling down...
          $('#mainNav').removeClass('is-visible');
          if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
        }
        this.previousTop = currentTop;
      });
  }
  
  
    $(".message").delay(200).fadeIn(500)
  }), $(function () {
    var e = $("#nav-toggle");
    menu = $("nav ul"), menuHeight = menu.height(), header = $("header#top"), $(e).on("click", function (e) {
      e.preventDefault(), menu.slideToggle(250), this.classList.toggle("active"), $("#top").hasClass("visable") ? console.log("Problem") : header.toggleClass("visable")
    }), $(window).resize(function () {
      var e = $(window).width();
      e > 320 && menu.is(":hidden") && menu.removeAttr("style")
    })
  }), $(window).scroll(function () {
    $(this).scrollTop() >= 200 ? $("header#top").addClass("visable") : $(this).scrollTop() <= 700 && $("header#top").removeClass("visable")
  }), $(".flipUp").textrotator({
    animation: "flipUp",
    separator: ",",
    speed: 3500
  });
  var project = $("#projects article"),
    viewProject = $("span");
  project.hover(function () {
    project.addClass("dim"), $(this).removeClass("dim"), $(this).hover(function () {
      viewProject.toggleClass("slide")
    })
  }), project.mouseleave(function () {
    project.removeClass("dim"), viewProject.removeClass("slide")
  }), $("#cbp-fwslider").cbpFWSlider(), $(function () {
    $("article").readingTime({
      readingTimeTarget: $(this).find(".eta")
    })

  
  
  
  $(window).scroll( function() {
      var scroll = $(window).scrollTop();
      var speed = 1; // dobrze znaleźć mniejsza wartosc
      
      $('.scroller').each(function(){
  {/* <div class="scroller">
           <h1>Portfolio</h1>
            <em>section parallax</em>
      </div> */}
  
          var $this = $(this);
          var $parent = $this.parent().css("background", "red");
          var topOffset = $parent.offset().top;
          var height = $parent.outerHeight(true);
          var parallaxSize = (topOffset-scroll) * speed; //tu jest klucz do poruszania w dol lub w gore
          
          // prevent parallax when scroll down
          if(scroll > topOffset + height) {
              return;
          }
          
          $this.css({ 
              'transform': scroll >= topOffset ? ('translateY(' + parallaxSize + 'px)' ) : ''
          });
      }); 




// ==========================
});