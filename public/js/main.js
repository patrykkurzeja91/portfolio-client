'use strict'
$(document).ready(() => {

	//reload on resize
	$(window).resize(function () {
		let resizeId
		clearTimeout(resizeId)
		resizeId = setTimeout(doneResizing, 500)
	})

	function doneResizing() {
		location.reload()
	}
	//AOS animations
	AOS.init({
		disable: function () {
			if ($(document).width() > 786) {
				return false
			} else {
				return true
			}
		}, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
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
	})

	//Morphext - text rotator in jumbotron
	$(".rotate").Morphext({
		animation: "flipInX",
		separator: ",",
		speed: 3000
	})

	new SmoothScroll('a[href*="#"]', {
		// Selectors
		ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
		header: false, // Selector for fixed headers (must be a valid CSS selector)
		topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"
		// Speed & Easing
		speed: 400, // Integer. How fast to complete the scroll in milliseconds
		clip: false, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page
		offset: function () {
			let navHeight = $('nav').innerHeight()
			return navHeight / 2
		},
		easing: 'easeInOutCubic', // Easing pattern to use
		// History
		updateURL: false, // Update the URL on scroll
	})

	// $("#send_btn").click(function () {
	// 	let name = $('#input_name').val()
	// 	let email = $('#input_email').val()
	// 	let message = $('#input_text').val()
	// 	$("#success-message").text("Sending E-mail...Please wait")
	// 	$.get("/sendMail", {
	// 			name: name,
	// 			email: email,
	// 			message: message
	// 		},
	// 		function (data) {
	// 			if (data == 200) {
	// 				$("#success-message").empty().html("Email is been sent ")
	// 			}

	// 		})
	// })


	$('#myForm').submit(function (e) {
		e.preventDefault()
		$('.lds-dual-ring').addClass('show')
	
		let name = $('#input_name').val()
		let email = $('#input_email').val()
		let message = $('#input_text').val()

		if (name == '' || message == '') {
			$('#error_message').html('Errorrrr')
		} else {

			console.log(name, email, message)
			$('#error_message').html('')
			$.ajax({
				url: '/sendMail',
				type: 'POST',
				data: {
					name,
					email,
					message
				},
				// contentType: 'application/json',
				success: function (data) {
					// $('#myForm').trigger('reset')
					$('.lds-dual-ring').removeClass('show')
					$('.loader-icon').html(data).fadeIn('fast').addClass('show');
					$('.messages').fadeIn('fast').addClass('show');
					setTimeout(function () {
						$('.loader-icon').fadeOut('slow').removeClass('show')
						$('.messages').fadeOut('slow').removeClass('show')
					}, 4000)
				}
			})
		}
	})



	let vid = $(".video")
	vid.autoplay = true
	vid.load()

	// parallaxHero()
	navbarFixing()
	scrollActive()
	hideMenu()
	// toggleBtn()

})

let parallaxHero = () => {
	$(window).scroll(function () {
		let scroll = $(window).scrollTop()
		let speed = 0.5 // dobrze znaleźć mniejsza wartosc

		$('.hero').filter(function () {
			let $this = $(this)
			let $parent = $this.parent()
			let topOffset = $parent.offset().top
			let height = $parent.outerHeight(true)
			let parallaxSize = (topOffset - scroll) * speed
			let opacitySize = (scroll - topOffset) * 0.01
			// prevent parallax when scroll down
			if (scroll > topOffset + height) {
				return
			}
			$this.css({
				'transform': scroll >= topOffset ? ('translateY(' + parallaxSize + 'px)') : '',
				'opacity': scroll >= (topOffset) ? 1 / opacitySize : '',
				'z-index': '1'
			})
		})
	})
}

function navbarFixing() {
	// var scroll = $('html').scrollTop()
	if ($(window).innerWidth() > 768) {
		$(window).scroll(function () {
			let cur_pos = $(this).scrollTop()
			const about_top = $('#about').offset().top
			let nav = $('.navbar')
			let navHeight = nav.innerHeight()
			// console.log()
			if (cur_pos <= (about_top - navHeight)) {

				$(".navbar").addClass("transparent")
				$(".nav-mobile").addClass("transparent")

			} else {

				$(".navbar").removeClass("transparent")
				$(".nav-mobile").removeClass("transparent")
			}
		})
	} else {
		$(".navbar").removeClass("transparent")
		$(".nav-mobile").removeClass("transparent")
	}

}

//active watching on navbar links
function scrollActive() {
	let sections = $('.section')
	let nav = $('.main')
	let navHeight = nav.innerHeight()

	$(window).scroll(function () {
		let cur_pos = $(this).scrollTop()
		sections.filter(function () {
			let top = $(this).offset().top - navHeight
			if (cur_pos >= top) {
				nav.find('a').removeClass('active')
				nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active')
			}
		})
	})
}

// let navbarDropdown = () => {
//   if ($(window).innerWidth() < 960) {
//     $('nav ul li a').click(function(e) {
//       $(this).siblings('.nav-dropdown').toggle()
//       e.stopPropagation()
//     })
//     // Clicking away from dropdown will remove the dropdown class
//     $('html').click(function() {
//       $('.nav-dropdown').hide()
//     })
//     // Toggle open and close nav styles on click
//     $('#nav-toggle').click(function() {
//       $('nav li').slideToggle()
//     })
//     // Hamburger to X toggle
//     $('#nav-toggle').on('click', function() {
//       this.classList.toggle('active')
//     })
//     // Hamburger to X toggle
//     $('.main a').on('click', function() {

//       $('nav li').slideToggle()
//     })
//   }

// }


function toggleBtn() {

	$('#toggle-btn').click(function (e) {
		e.preventDefault()
		$(this).toggleClass('active')
	})
}

function hideMenu() {
	$('.main a').click(function (e) {
		e.preventDefault()
		$('.navbar-collapse').toggleClass('show')
		$('#toggle-btn').toggleClass('active')
	})
}

// function toggleHamburger() {
//   // Hamburger to X toggle
//     $('#nav-toggle').on('click', function() {
//       this.classList.toggle('active')
//     })
// }