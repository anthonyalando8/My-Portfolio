// function isInViewPortAnime(elementClass, animationName){
//     const elements = document.querySelectorAll(elementClass);

//     for(var i = 0; i < elements.length; i++){
//         var element = elements[i];
//         var elementTop = element.offsetTop;
//         var elementBottom = elementTop + element.offsetHeight;
//         var viewportTop = window.pageYOffset || document.documentElement.scrollTop;
//         var viewportBottom = viewportTop + window.innerHeight;

//         if(elementBottom > viewportTop && elementTop < viewportBottom){
//             element.classList.add(animationName);
//         }
//     }
// }

// window.addEventListener('scroll', function(){
//     isInViewPortAnime('slide-left', 'slide-left-anime');
// });