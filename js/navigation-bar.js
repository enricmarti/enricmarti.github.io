$(window).load(function() {

	var windowHeight = $(window).height();
	var windowWidth = $(window).width();

	/** MENU DESPLEGABLE **/
	var toggle = document.querySelector(".c-menu");
	if(toggle)
		toggle.addEventListener( "click", function(e) {
	  		toggleMenu(e);
	  	});
	
	$('.menu-label').click( function(e){
		toggleMenu(e);
	});

	function toggleMenu(e)
	{
	    e.preventDefault();
	    var menuIcon = $(".c-menu")[0];
	    (menuIcon.classList.contains("is-active") === true) ? menuIcon.classList.remove("is-active") : menuIcon.classList.add("is-active");
	    $('#navigation').stop(true,true).slideToggle(400);
	    $('.menu-label').stop(true,true).fadeToggle(400);
	}

	function hideMenu(event)
	{
	    event.preventDefault();
	    var menuIcon = $(".c-menu")[0];
		menuIcon.classList.remove("is-active");
	    $('#navigation').slideUp(400);
	    $('.menu-label').fadeIn(400);
	}
	/** ------------------------------- **/

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
		if (!$(event.target).closest('#header-container').length) {
			//Hide menu if it is open
			if($('#navigation').is(':visible'))
				hideMenu(event);
  		}
	});

	$( window ).resize(function() {
		if( $(window).width() <= 800 && windowWidth > 800 )
		{
			//$('#navigation').hide(0);			
		}
		else if( $(window).width() > 800 && windowWidth <= 800 )
		{
			//$('#navigation').css({display:"inline-block"});	
			//$('#menu-bar').css({'background-color':""});
			$( ".dropdown" ).each(function(){ $(this).children('.sub_navigation').hide(0); });
		}
		
		windowHeight = $(window).height();
		windowWidth = $(window).width();
	})
});