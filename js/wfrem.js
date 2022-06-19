// Removes Nasty White Flash on Page load
$(document).ready(function() {
  $("body").removeClass('preload');

    
function focusObject(myobject) {
    myobject.focus();
};

 (function($) {
    var element = $('.upageDisContent'),
        originalY = element.offset().top;

    // Space between element and top of screen (when scrolling)
    var topMargin = 135;
    // Should probably be set in CSS; but here just for emphasis
    element.css('position', 'absolute');

    $('#ushowcaseTrueContainer').on('scroll', function(event) {
        var scrollTop = $('#ushowcaseTrueContainer').scrollTop();
        var eheight = $('#ushowcaseTrueContainer').height();
        if ((scrollTop) > eheight / 2){
            $('.upageToTopBtn').css('visibility', 'visible');
            $('.upageToTopBtn').css('opacity', '1');
        } else {
             $('.upageToTopBtn').css('visibility', 'hidden');
            $('.upageToTopBtn').css('opacity', '0');
        }
        element.stop(false, false).animate({
            top: scrollTop < originalY
                    ? 50
                    : scrollTop - originalY + topMargin
        }, 400);
    });
})(jQuery);
            
            $('.upageToTopBtn').on('click', function(event) {

    var target = $('#ushowcaseTrueContainer');

    if( target.length ) {
        event.preventDefault();
        $('#ushowcaseTrueContainer').stop().animate({
            scrollTop: 0
        }, 200);
    }

});

});