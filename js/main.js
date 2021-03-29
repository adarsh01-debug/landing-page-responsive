$(document).ready(function(){
    activelinks();
});


$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 200);

    var win = $(window).scrollTop();

    if (win >= 200) {
        $(".navbar").addClass("shadow p-3 mb-5 bg-white rounded");
    }else{
        $(".navbar").removeClass("shadow p-3 mb-5 bg-white rounded");
    }
});

function activelinks(){
    $( '.navbar-nav .nav-item a' ).click(function () {
        // $(this).closest('.nav-item').siblings().removeClass('active');
        $( '.nav-item a' ).removeClass( 'active' );
        $(this).closest('.nav-item a').addClass( 'active' );
    });    
}
