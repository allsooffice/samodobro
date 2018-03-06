/*Włączenie dokumentu*/
$(document).ready( function(){
	$(" .slide-nav h1 ").addClass("title-intro", 1800, "easeInSine");
    //POBRANIE POZYCJI MENU
    var top_of_nav = $('nav').offset().top;
    /* Przyklejanie i odklejanie menu */
    var stickyNav = function(){
        var top_of_window = $(window).scrollTop();
        /* przyklejanie */
        if( top_of_window > top_of_nav ){
             $( "nav" ).addClass("nav-sticky");
             //$( ".content" ).addClass("content-margin");
        }
        /* odklejanie */
        else{
             $( "nav" ).removeClass("nav-sticky");
             //$( ".content" ).removeClass("content-margin");
        }
    }
    
    //--Pokaż / schowaj menu po kliknięciu buttona
function mobileMenu(){
$(".nav-mobile-link").click(function(){
	var state = $(this).children().attr('class');
	if(state == 'icon-menu'){
		$(".menu").addClass("menu-active");
		$(this).children().removeClass();
		$(this).children().addClass("icon-cancel");
		$( ".menu" ).bind( "touchmove", function( event ){
			event.preventDefault();
		});
	}
	else{
		$(".menu").removeClass("menu-active");
		$(this).children().removeClass();
		$(this).children().addClass("icon-menu");
	}
});
}
    mobileMenu();

/* Every time the window is scrolled ... */
$(window).scroll( function(){

	stickyNav();
	
});
    
});