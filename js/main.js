window.addEventListener('load', function loadImg(){
    var allimages= document.getElementsByTagName('img');
    for (var i=0; i<allimages.length; i++) {
        if (allimages[i].getAttribute('data-src')) {
            allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
        }
    }
}, false)

setTimeout(function loadImg() {

}, 50)


$(document).ready(function() {
    $(".page_1_btn").clicked(function() {
        $(".page_2").css("display" , "none")
        $(".page_1").css("display" , "grid")
    })
})
