$(document).ready(function() {

	var windowHeight = $(window).height();
	var windowWidth = $(window).width();

	$('#menu-icon').click( function(){
		$('#navigation').toggle(0, function(){
			if($('#navigation').is(':visible'))
			{
				$('#navigation').css('display','inline-block');
				$('#menu-bar #menu-icon').css({color:"grey"});
			}
			else
				$('#menu-bar #menu-icon').css({color:"white"});
		});
	});

	$('.dropdown').hover(function() {
		if( $(window).width() > 800 )
			$(this).find('.sub_navigation').toggle(0); 
	});
	
	$('.dropdown').click( function(){
		if( $(window).width() <= 800 )
			$(this).children('.sub_navigation').show(0);
	});
	
	$('#navigation li').click( function(){
		if( $(window).width() <= 800 )
		{
			var index = $(this).index();
			$( ".dropdown" ).each(function(){
				if( $(this).index() != index && $(this).children('.sub_navigation').is(':visible') )
					$(this).children('.sub_navigation').hide(0);
			});
		}
	});
	
	$(document).on('click', function(event) {
		if ( $(window).width() <= 800 && !$(event.target).closest('#menu-bar').length && $('#navigation').is(':visible') )
		{
			$('#navigation').css({display:"none"});
			$('#menu-bar #menu-icon').css({color:"white"});
			menuOpened = false;
		}
	});
	
	$( window ).resize(function() {
		if( $(window).width() <= 800 && windowWidth > 800 )
		{
			$('#navigation').hide(0);			
		}
		else if( $(window).width() > 800 && windowWidth <= 800 )
		{
			$('#navigation').css({display:"inline-block"});	
			$('#menu-bar #menu-icon').css({color:"white"});
			$( ".dropdown" ).each(function(){ $(this).children('.sub_navigation').hide(0); });
		}
		
		windowHeight = $(window).height();
		windowWidth = $(window).width();
	})
});