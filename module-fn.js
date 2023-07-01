export function isInViewPortAnime(elementClass, animationClass, animationDelay){
    var elements = document.querySelectorAll(elementClass);
    elements.forEach(element =>{
        var elementTop = element.offsetTop;
        var elementBottom = elementTop + element.offsetHeight;
        var viewportTop = window.pageYOffset || document.documentElement.scrollTop;
        var viewportBottom = viewportTop + window.innerHeight;
        if(elementBottom > viewportTop && elementTop < viewportBottom){
            setTimeout(function(){
                element.classList.add(animationClass);
            }, animationDelay);
        }
    });
}