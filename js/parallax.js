/* 
Efecto Parallax, realizando un evento.
.........................................
Para calcular la posicion de la pantalla:
$(window).scrollTop();
.........................................

*/

$(document).ready(function () {

    $(window).scroll(function () {
        var windowWidth = $(window).width();

        if (windowWidth > 900) {
            var scroll = $(window).scrollTop();

            $('header .textos').css({
                'transform': 'translate(0px,' + scroll / 2 + '%)'
            });

            $('.acerca-de article').css({
                'transform': 'translate(0px, -' + scroll / 5 + '%)'
            });
        }
    });

    $(window).resize(function () {
        var windowWidth = $(Window).width();

        if (windowWidth < 800) {
            $('.acerca-de article').css({
                'transform': 'translate(0px, 0px)'
            });
        }
    });

});