(function() {
 var aboutEl = $('div.about_container'),
 aboutElOffset = aboutEl.offset().top/6,
 documentEl = $(document);
 documentEl.on('scroll', function(){
 	if ( documentEl.scrollTop() > aboutElOffset && aboutEl.hasClass('container')) aboutEl.removeClass('container');
 });

});





























