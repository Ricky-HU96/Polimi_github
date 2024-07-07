/*
	Twenty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() { return $header.height() + 10; }
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			expandMode: (browser.mobile ? 'click' : 'hover')
		});

	// Nav Panel.

		// Button.
			$(
				'<div id="navButton">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

		// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
			if (browser.os == 'wp' && browser.osVersion < 10)
				$('#navButton, #navPanel, #page-wrapper')
					.css('transition', 'none');

	// Header.
		if (!browser.mobile
		&&	$header.hasClass('alt')
		&&	$banner.length > 0) {

			$window.on('load', function() {

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt reveal'); },
					leave:		function() { $header.removeClass('alt'); }
				});

			});

		}

})(jQuery);






let navbarlinks = select('#navbar .scrollto', true)
const navbarlinksActive = () => {
 let position = window.scrollY + 200
 navbarlinks.forEach(navbarlink => {
   if (!navbarlink.hash) return
   let section = select(navbarlink.hash)
   if (!section) return
   if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
	 navbarlink.classList.add('active')
   } else {
	 navbarlink.classList.remove('active')
   }
 })
}
window.addEventListener('load', navbarlinksActive)
onscroll(document, navbarlinksActive)

/**
* Scrolls to an element with header offset
*/
const scrollto = (el) => {
 let elementPos = select(el).offsetTop
 window.scrollTo({
   top: elementPos,
   behavior: 'smooth'
 })
}

/**
* Back to top button
*/
let backtotop = select('.back-to-top')
if (backtotop) {
 const toggleBacktotop = () => {
   if (window.scrollY > 100) {
	 backtotop.classList.add('active')
   } else {
	 backtotop.classList.remove('active')
   }
 }
 window.addEventListener('load', toggleBacktotop)
 onscroll(document, toggleBacktotop)
}

/**
* Mobile nav toggle
*/
on('click', '.mobile-nav-toggle', function(e) {
 select('body').classList.toggle('mobile-nav-active')
 this.classList.toggle('bi-list')
 this.classList.toggle('bi-x')
})