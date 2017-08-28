$(document).ready(function() {

	// Placeholder
	// Doc: https://github.com/NV/placeholder.js/
	$("[placeholder]").textPlaceholder();

    // UP button
    $("#top").on('click', function () {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // show/hide mobile view
    $(".nav-mobile-toggle").on('click', function () {
        $(".nav_mobile").slideToggle();
    });

});