var ww = jQuery(window).width();
jQuery(document).ready(function() { 
	jQuery(".sitenav li a").each(function() {
		if (jQuery(this).next().length > 0) {
			jQuery(this).addClass("parent");
		};
	})
	jQuery(".toggleMenu").click(function(e) { 
		e.preventDefault();
		jQuery(this).toggleClass("active");
		jQuery(".sitenav").slideToggle('fast');
	});
	adjustMenu();
})

jQuery(window).bind('resize orientationchange', function() {
	ww = jQuery(window).width();
	adjustMenu();
});

var adjustMenu = function() {
	if (ww < 751) {
		jQuery(".toggleMenu").css("display", "block");
		if (!jQuery(".toggleMenu").hasClass("active")) {
			jQuery(".sitenav").hide();
		} else {
			jQuery(".sitenav").show();
		}
		jQuery(".sitenav li").unbind('mouseenter mouseleave');
	} else {
		jQuery(".toggleMenu").css("display", "none");
		jQuery(".sitenav").show();
		jQuery(".sitenav li").removeClass("hover");
		jQuery(".sitenav li a").unbind('click');
		jQuery(".sitenav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
			jQuery(this).toggleClass('hover');
		});
	}
}

jQuery(document).ready(function() {
        jQuery("#menu-bottom-shape").click(function(){
            if ( jQuery( ".menushowhide" ).is( ":hidden" ) ) {
                jQuery( ".menushowhide" ).slideDown("slow");
            } else {
                jQuery( ".menushowhide" ).slideUp("slow");
            }
            jQuery( this ).toggleClass('showDown');
        });
        jQuery( "#site-nav li:last" ).addClass("noBottomBorder");
        jQuery( "#site-nav li:parent" ).find('ul.sub-menu').parent().addClass("haschild");
    });
