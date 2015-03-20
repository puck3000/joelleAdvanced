	// $(function() {  
	//     $(document).on('touchstart', function() {
	// 	    documentClick = true;
	// 	});
	// 	$(document).on('touchmove', function() {
	// 	    documentClick = false;
	// 	});
	// 	$(document).on('click touchend', function(event) {
	// 	    if (event.type == "click") documentClick = true;
	// 	    if (documentClick){
	// 	        $('body').toggleClass("back");
	// 	    }
	// 	 });

	// });

jQuery.fn.extend({
    clickOrTouch: function(handler) {
        return this.each(function() {
            var event = ('ontouchstart' in document) ? 'touchstart' : 'click';
            $(this).on(event, handler);
        });
    }
});





$('body').clickOrTouch(doSomething);
function doSomething(e) {
    $('body').toggleClass("back");
    e.stopPropagation();
}