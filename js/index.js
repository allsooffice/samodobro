//-------------------------------------FUNKCJE--------------------------------------------	
$(document).ready(function(){
    $( "#home" ).addClass("nav-active");
    $(window).scroll( function(){

        //WEJSCIE WYPUNKTOWANYCH IKON
        $('.points-content').each( function(i){
        var top_of_object = $(this).offset().top;
        var top_of_window = $(window).scrollTop()+300;
        /* przyklejanie */
        if( top_of_window > top_of_object ){
             $(" .point i ").addClass("i-fade", 1000, "linear");
             $(" .point p ").addClass("p-fade", 1000, "linear");
        }
    });

    });
});
//Przy scrollowaniu
//ZMIANA JAKAŚ 2
//-------------------------------------WYWOŁANIE-------------------------------------------

