/*about container 'fade in' script*/
 /*Code for fade in on scroll: https://www.youtube.com/watch?v=RY5ZAUtrlaM&index=12&list=LLAh98or-kA2l2CkutpdIH0A
 	"Scoll Activated Animation || HTML, CSS, JQuery"*/
$(document).ready(function() {

 var aboutEl = $('div.aboutc'),
 aboutElOffset = aboutEl.offset().top/2,
 documentEl = $(document);
 documentEl.on('scroll', function(){
 	if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('cont')) aboutEl.removeClass('cont');

 });

});

/*gallery code*/
/*Code for scrolling gallery: Chapter 5 from "Head First JQuery" / 
https://www.youtube.com/watch?v=mK2U9fMa9Rw&t=35s&list=LLAh98or-kA2l2CkutpdIH0A&index=8
"Awesome JQuery Photo Gallery [VOICE TUTORIAL]"*/
$(document).ready(function(){

var window_width = $(window).width();
var main_width = $(".main").width();
var long_container = $(".long_container");
var item = $(".item");
var slide_number = 0;


long_container.css("width" , main_width * 3.05);
item.css("width" , long_container.width() / 9);

$(".see_next").click(function(){
	if(slide_number < 6){
		slide_number++
	
		if(slide_number == 6){
			$(".see_next").animate({opacity: 0});
		} else {
			$(".see_next").animate({opacity: 1});
		}

		if(slide_number == 0){
			$(".see_prev").animate({opacity: 0});
		} else {
			$(".see_prev").animate({opacity: 1});
		}

		var item_width   = $(".item").width();
		var pixels_moved = item_width * slide_number;

		long_container.animate({
			marginLeft: -pixels_moved
		});
	}
});

$(".see_prev").click(function(){
	if(slide_number > 0){
		slide_number--
	
		if(slide_number == 0){
			$(".see_prev").animate({opacity: 0});
		} else {
			$(".see_prev").animate({opacity: 1});
		}

		if(slide_number == 6){
			$(".see_next").animate({opacity: 0});
		} else {
			$(".see_next").animate({opacity: 1});
		}

		var item_width   = $(".item").width();
		var pixels_moved = item_width * slide_number;

		long_container.animate({
			marginLeft: -pixels_moved
		});
	}
  });
});

//Café Menu code
$(document).ready(function(){
	$(".tea").click(function(){
		$(".tea_menu").fadeIn(1000);
		$(".tea_price").fadeIn(1000);
		$(".coffee_menu").fadeOut(0);
		$(".coffee_price").fadeOut(0);
		$(".food_menu").fadeOut(0);
		$(".food_price").fadeOut(0);
	});

	$(".coffee").click(function(){
		$(".coffee_menu").fadeIn(1000);
		$(".coffee_price").fadeIn(1000);
		$(".tea_menu").fadeOut(0);
		$(".tea_price").fadeOut(0);
		$(".food_menu").fadeOut(0);
		$(".food_price").fadeOut(0);
	});

	$(".food").click(function(){
		$(".food_menu").fadeIn(1000);
		$(".food_price").fadeIn(1000);
		$(".coffee_menu").fadeOut(0);
		$(".coffee_price").fadeOut(0);
		$(".tea_menu").fadeOut(0);
		$(".tea_price").fadeOut(0);	
	});

});

//hamuburger menu code
$(document).ready(function(){ 
	$(".burger-nav").click(function(){
		$("#nav ul").fadeToggle(500);
		$(".logo").fadeToggle(0);
	});
});



















