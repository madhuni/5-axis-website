$(function() {

	// function for smooth scrolling to the different sections when navigated
	function smoothScroll() {

		$('a[href^="#"]').click(function(e) {

			var target = $(this).attr('href');
			var strip = target.slice(1);
			var anchor = $("div[id='" + strip + "']");

			e.preventDefault();

			$('body').animate({

				scrollTop: anchor.offset().top

			}, 1000);
		});

	}

	// calling the smooth scroll function
	smoothScroll();

});
