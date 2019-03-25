// window.addEventListener('load', function loadImg(){
//     var allimages= document.getElementsByTagName('img');
//     for (var i=0; i<allimages.length; i++) {
//         if (allimages[i].getAttribute('data-src')) {
//             allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
//         }
//     }
// }, false)

// setTimeout(function loadImg() {

// }, 50)

// smooth scrolling 
window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
});



function scrollAppear() {
    let figLeft = document.querySelector(".figure-left");
        figCent = document.querySelector(".figure-center");
        figRight = document.querySelector(".figure-right");

    let figPositionL = figLeft.getBoundingClientRect().top;
    let figPositionC = figCent.getBoundingClientRect().top;
    let figPositionR = figRight.getBoundingClientRect().top;


    let screenPosition = window.innerHeight / 1.3;

        if(figPositionL < screenPosition) {
            figLeft.classList.add('figures-shown');
        }
        if(figPositionC < screenPosition) {
            figCent.classList.add('figures-shown');
        }
        if(figPositionR < screenPosition) {
            figRight.classList.add('figures-shown');
        }
}


window.addEventListener('scroll', scrollAppear);