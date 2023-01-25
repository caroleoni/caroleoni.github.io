$(function() {
    $('.filter').click(function(){
        $(this).addClass('active').siblings().removeClass('active'); /*siblings: hermanas */
        let valor = $(this).attr('data-nombre');
        if(valor == 'all'){
            $('.card__father').show('1000');
        } else {
            $('.card__father').not('.' + valor).hide('1000'); /*hide: esconder*/
            $('.card__father').filter('.' + valor).show('1000');
        }
    });

    
    let company = $('#company').offset().top;
    let customer = $('#customer').offset().top;
    let partner = $('#partner').offset().top;
    let portfolio = $('#portfolio').offset().top;
            // blog = $('#enlace-blog').offset().top,
    let job = $('#job').offset().top;
    let contact = $('#contact').offset().top;

        //esta parte es para responsive
        window.addEventListener('resize', function() {
            
            let company = $('#company').offset().top;
            let customer = $('#customer').offset().top;
            let partner = $('#partner').offset().top;
            let portfolio = $('#portfolio').offset().top;
                    // blog = $('#enlace-blog').offset().top,
            let job = $('#job').offset().top;
            let contact = $('#contact').offset().top;

            $('#enlace-home').on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: 0
                }, 600);
            });
    
            $('#enlace-company').on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: company - 100
                }, 600);
            });

            $('#enlace-customer').on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: customer - 100
                }, 600);
            });
    
            $('#enlace-partners').on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: partner - 100
                }, 600);
            });
    
            $('#enlace-portfolio').on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: portfolio - 100
                }, 600);
            });

            $('#enlace-job').on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: job - 100
                }, 600);
            });
    
            $('#enlace-contact').on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: contact - 100
                }, 600);
            });
        });

        $('#enlace-home').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 600);
        });

        $('#enlace-company').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: company - 100
            }, 600);
        });

        $('#enlace-customer').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: customer - 100
            }, 600);
        });

        $('#enlace-partners').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: partner - 100
            }, 600);
        });

        $('#enlace-portfolio').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: portfolio - 100
            }, 600);
        });

        $('#enlace-job').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: job - 100
            }, 600);
        });

        $('#enlace-contact').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: contact - 100
            }, 600);
        });
});