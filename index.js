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
var loadingAlert;
var overLay;
document.onreadystatechange = function(){
    if(document.readyState !== "complete"){
        createLoadingAnime();
        manageScroll(0);
    }
    else{
        setTimeout(function(){
           removeLoadingDialog();
      manageScroll(1); 
        },1500);
      
    }
};
function createLoadingAnime(){
    createOverlay();
    loadingAlert = document.createElement('div');
    loadingAlert.classList.add('Loading-container');
    loadingAlert.classList.add('center-container');
    loadingAlert.classList.add('center-content');
    loadingAlert.style.flexDirection = "row";
    loadingAlert.setAttribute('id', 'loading');

    for(let i = 0; i < 5; i++){
        var bar = document.createElement('div');
        bar.classList.add('column');
        loadingAlert.appendChild(bar);
    }
    document.body.appendChild(loadingAlert);

    var col = document.querySelectorAll(".column");
    var a = 0,b=255,loop=0;
    var red = 0, green = 50, blue = 100;

    setInterval(function(){
        red++;
        green++;
        blue++;
        if(loop != col.length){
            col[loop].style.background = "linear-gradient(to top, rgb("+Math.floor(Math.random() *  red) + 1+","+(green+50)+","+(blue+50)+"), rgb("+red+","+(green-50)+","+Math.floor(Math.random() * blue) + 1+"))";
            loop++;
        }
        else{
            loop = 0;
        }
        if(red >= 255 ){
            red = 0;
        }
        if(green >= 255){
            green = 50;
        }
        if(blue >= 255){
            blue = 50;
        }
    
    },20);
}

//close the progress dialog
function removeLoadingDialog() {
    if (loadingAlert) {
        loadingAlert.parentNode.removeChild(loadingAlert);
        manageScroll(1);
    }
    removeOverlay();
}

function createOverlay(){
    overLay = document.createElement('div');
    overLay.classList.add('overlay');

    document.body.appendChild(overLay);
    manageScroll(0);
}
function removeOverlay(){
    if(overLay){
        overLay.parentNode.removeChild(overLay);
    }
}
function manageScroll(VALUE){
    if(VALUE === 0){
        document.querySelector('body').classList.add('stop-scrolling');
    }else{
        document.querySelector('body').classList.remove('stop-scrolling');
    }
}