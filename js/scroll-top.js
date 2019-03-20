$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".scroll-top").css({"opacity" : "1"})
        } else {
            $(".scroll-top").css({"opacity" : "0"})
        }
    })
})