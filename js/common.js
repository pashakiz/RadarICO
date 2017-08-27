$(document).ready(function() {

	//Placeholder
	//Doc: https://github.com/NV/placeholder.js/
	$("[placeholder]").textPlaceholder();

    //Кнопка "Наверх"
    //Документация:
    //http://api.jquery.com/scrolltop/
    //http://api.jquery.com/animate/
    $("#top").on('click', function () {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});