


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

// init AOS plugin
AOS.init();


// function scrollAppear() {
//     let blogTxt = document.querySelector(".blog-text");
//     let txtPosition = blogTxt.getBoundingClientRect().top;
//     let screenPosition = window.innerHeight / 1.6;

//         if(txtPosition < screenPosition) {
//             blogTxt.classList.add('blog-text-shown');
//         }
// }


// window.addEventListener('scroll', scrollAppear);