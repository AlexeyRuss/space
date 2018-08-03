window.addEventListener("scroll", function(){
    if(window.scrollY >= 100){
        document.body.classList.add("fixedNav");
    } else {
        document.body.classList.remove("fixedNav");
    }
}); 

$(document).ready(function(){
	/*var jBody = $(document.body);
	$(window).on("scroll", function() {
		if(window.scrollY >= 100){
			jBody.addClass("fixedNav");
		} else {
			jBody.removeClass("fixedNav");
		}
	}) Этот код идентичен коду сверху, для строки навигации, только здесь на jQuery а верхний на JS */
	
	
	
	$(".navigation").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});