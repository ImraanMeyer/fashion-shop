// Scroll to top div
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".scroll-top").css({"opacity" : "1"})
        } else {
            $(".scroll-top").css({"opacity" : "0"})
        }
    })
});

// smooth scrolling 
window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
});

// init AOS plugin
AOS.init();

