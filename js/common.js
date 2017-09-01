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

    // Sort table.table-ico (2.html)
    $(".js-sort-table").on('click', function () {
        var icon = $(this).find('.icon-arrow-down');
        $('.icon-arrow-down').removeClass('active');
        icon.addClass('active');
        icon.toggleClass('up');

        // sorting...

    });

    // .nav-filter expand
    $(".nav-filter__item").on('click', function () {
        $('.nav-filter__link').removeClass('active');
        $(this).find('.nav-filter__link').addClass('active');
        $('.nav-filter .dropdown').slideUp();
        $(this).find('.dropdown').slideDown();
        $(this).find('.icon-arrow-down').toggleClass('up');
    });

});