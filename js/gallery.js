$(document).ready(function() {
	
	function sliderWidth(n){
		var width = 0;
		for ( var i = 0; i <= n; i++ )
			// Sumarli 1 es una guarrada pel tema del arrodoniment. S'hauria d'obtenir el tamany sense arrodonir.
			width += $('#slides li').eq(i).outerWidth(true) + 1;
		return width;
	}
	
	var Nmax = $('#slides ul li').length - 1;
    var N = 0;
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	var sliding = false;

	$(window).load(function() {
		if( $(window).width() > 800 )
			$('#slides ul').css({'width':sliderWidth(Nmax)});
	});
	
	$( window ).resize(function() {
		if( $(window).width() > 800 && (($(window).height() <= 783 && windowHeight > 783) || ($(window).height() > 783 && windowHeight <= 783)
				|| ($(window).height() > 683 && windowHeight <= 683) || ($(window).height() <= 683 && windowHeight > 683)  ) )
		{
 			$('#slides ul').css({'left': 10 - sliderWidth(N-1)}); 
			$('#slides ul').css({'width':sliderWidth(Nmax)});
		}
		
		if( $(window).width() <= 800 && windowWidth > 800 )
			$('#slides ul').css({'width':"100%"});		
		else if( $(window).width() > 800 && windowWidth <= 800 )
			$('#slides ul').css({'width':sliderWidth(Nmax)});
			
		windowHeight = $(window).height();
		windowWidth = $(window).width();
	})
	
	function slideGalleryToPreviousImage(){
		if( !sliding && N > 0 )
		{
			sliding = true;
			N = N - 1;
			var next_width = $('#slides li').eq(N).outerWidth();
			var img_margin = parseInt($('#slides li').eq(N).css("marginRight"))
			
			if( N == 0 )
				$("#prev").fadeOut("slow");
			else if( N == Nmax -1 )
				$("#next").fadeIn("slow");	

			var left_value = parseInt($('#slides ul').css('left')) + next_width + img_margin;
     
			$('#slides ul').animate({'left' : left_value}, 300,function(){    
				sliding = false;
			});
         
		}   
		return false;
	}
	function slideGalleryToNextImage(){
		if( !sliding && N < Nmax )
		{
			sliding = true;
			N = N + 1;
			var prev_width = $('#slides li').eq(N-1).outerWidth();
			var img_margin = parseInt($('#slides li').eq(N).css("marginRight"))
			
			if( N == Nmax )
				$("#next").fadeOut("slow");
			else if ( N == 1 )
				$("#prev").fadeIn("slow");

			var left_value = parseInt($('#slides ul').css('left')) - prev_width - img_margin;

			$('#slides ul').animate({'left' : left_value}, 300, function () {
		 		sliding = false;  
			});
        }        

        return false;   
	}
	
	$(window).bind('mousewheel DOMMouseScroll', function(event){
		if( $(window).width() >= 801 )
		{
			if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0)
				slideGalleryToPreviousImage();
			else
				slideGalleryToNextImage(); 
		}
	});
    $('#prev').click( slideGalleryToPreviousImage );
    $('#next').click( slideGalleryToNextImage );        
    
    $('#carousel').hover( function(){
		if( N != Nmax )
			$('#next').stop(true,true).fadeIn("slow");
		if( N != 0 )
			$('#prev').stop(true,true).fadeIn("slow");
    }, function(){
        $('#next').stop(true,true).fadeOut("slow");
		$('#prev').stop(true,true).fadeOut("slow");
    });
        
});