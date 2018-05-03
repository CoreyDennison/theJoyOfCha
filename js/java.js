/*about container 'fade in' script*/
$(document).ready(function() {

 var aboutEl = $('div.aboutc'),
 aboutElOffset = aboutEl.offset().top/2,
 documentEl = $(document);
 documentEl.on('scroll', function(){
 	if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('cont')) aboutEl.removeClass('cont');

 });

});





























