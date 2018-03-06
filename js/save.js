$(document).ready(function(){
    $( "#zapisy" ).addClass("nav-active");
    $( "#start" ).prev().addClass("label-active");
    //clear input in refresh
    $("input").val('');
    $("#phone").mask("999-999-999");
});
    var windowWidth = $("body").width();

$("input").focusin(function(){
    $(this).prev().addClass("label-active");
    $(".errors").hide(800);
    if(windowWidth < 600)
        {
            $( "nav" ).removeClass("nav-sticky");
        }
});

$("textarea").focusin(function(){
    $(this).prev().addClass("label-active");
    $(".errors").hide(800);
    if(windowWidth < 600)
        {
            $( "nav" ).removeClass("nav-sticky");
        }
});

$("input").focusout(function(){
    let notEmpty = $(this).val();
    let inputDestiny = $(this).attr("type");
    $( "nav" ).addClass("nav-sticky");
    if(inputDestiny != 'date')
        {
        if(notEmpty.length < 1)
            {
                $(this).prev().removeClass("label-active");
            }
        }
});

$("textarea").focusout(function(){
    let notEmpty = $(this).val();
    let inputDestiny = $(this).attr("type");
    if(inputDestiny != 'date')
        {
        if(notEmpty.length < 1)
            {
                $(this).prev().removeClass("label-active");
            }
        }
});


$("#send").click(function(){
    //Pobranie wartości  z inputów
    var name = $("#name").val(),
        forname = $("#forname").val(),
        age = $("#age").val(),
        start = $("#start").val(),
        information = $("#information").val(),
        email = $("#email").val(),
        phone = $("#phone").val(),
        checked = $('#rulez').prop("checked");
    var correct = true;
    //funnkcja walidacji adresu email
    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test( $email );
    }
        //Walidacja wiek dziecka od 1 msc do 36
    if(age < 1 || age > 36)
        {
            correct = false;
            $(".errors").text("Dziecko powinno mieć od 1 do 36 miesięcy").show(500);
        }
    if(start.length < 1)
        {
            correct = false;
            $(".errors").text("Wprowadź datę od której chces zapisac dziecko").show(500);
        }
;    //sprawdzanie checkboxa
    if(checked == false)
        {
            correct = false;
            $(".errors").text("Musisz potwierdzić znajomość regulaminu").show(500);
        }
    //Sprawdzanie wprowadzenia numeru telefonu
    if(phone < 11)
        {
            correct = false;
            $(".errors").text("Numer telefonu jest niepoprawny").show(500);
        }
    //sprawdzenie adresu email
    if( !validateEmail(email) || email.length < 1) 
    {
        correct = false;
        $(".errors").text("Email jest niepoprawny").show(500);
    }
    //walidacja - sprawdzanie czy wymagane inputy są uzupełnione
    if(name.length < 2 || forname.length < 2 || age.length < 1 || phone.length < 2)
        {
            correct = false;
            $(".errors").text("Pola z gwiazdką nie moga być puste").show(500);
        }

    if(correct == true)
        {
            $.post( "functions/send_notofication.php", { name: name, forname: forname, age: age, start: start, information: information, email: email, phone: phone })
                .done(function( data ) {
                if(data == 'verify')
                    {
                        $(".content").html('<h1 class="master-title">Zgłoszenie zostało wysłane</h1><p class="thanks">Dziękujemy - skontaktujemy się najszybciej jak to mozliwe.</p>');
                    }
                else
                    {
                        correct = false;
                        $(".errors").text("Sprawdź poprawność formularza").show(500);
                    }
            });
            
        }
    
        
        
});
