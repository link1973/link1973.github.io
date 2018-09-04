$(document).ready(function() {
	$('#fullpage').fullpage({
        licenseKey:'OPEN-SOURCE-GPLV3-LICENSE',
		autoScrolling:true,
		scrollHorizontally: false,
        scrollBar: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});

$(function () {
    $(window).scroll(function () {
        var top_offset = $(window).scrollTop();
        if (top_offset == 0) {
            $('.siteHeader').removeClass('stickied');
        } else {
            $('.siteHeader').addClass('stickied');
        }
    })
});
