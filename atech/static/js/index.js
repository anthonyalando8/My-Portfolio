var modal = document.createElement('div');
modal.classList.add('modal');

modal.classList.add('fade');
modal.setAttribute('id','staticBackdrop');
modal.setAttribute('data-bs-backdrop','static');
modal.setAttribute('data-bs-keyboard','false');
modal.setAttribute('tabindex','-1');
modal.setAttribute('aria-labelledby','modal');
modal.setAttribute('aria-hidden','true');
var loadingAlert = document.createElement('div');
loadingAlert.classList.add('modal-dialog');
loadingAlert.classList.add('modal-sm');
loadingAlert.classList.add('modal-dialog-centered');
modal.appendChild(loadingAlert)
var modalContent = document.createElement('div');
modalContent.classList.add('modal-content')
loadingAlert.appendChild(modalContent);
var modalBody = document.createElement('div');
modalBody.classList.add('modal-body')
modalContent.appendChild(modalBody);
var animeContainer = document.createElement('div');
animeContainer.style.minHeight = "85px"
animeContainer.classList.add('d-flex');
animeContainer.classList.add('justify-content-center');
animeContainer.classList.add('align-items-center');

modalBody.appendChild(animeContainer);
$('#modal-container').append(modal);

for(let i = 0; i < 5; i++){
    var bar = document.createElement('div');
    bar.classList.add('m-1');
    bar.style.width = '8px';
    bar.classList.add('bg-warning');
    bar.classList.add('bar');
    bar.classList.add('border');
    bar.classList.add('border-primary');
    bar.classList.add('rounded-pill');
    
    animeContainer.appendChild(bar);
    var randomNumber = Math.floor(Math.random() * (1001 - 200)) + 200;
    animateBarWithDelay(bar, i * 200, randomNumber);
}
function animateBarWithDelay(bar, delay, duration) {
    setTimeout(function() {
        setInterval(function() {
            bar.animate(
                { height: ['0', '80px'] }, // From 0 to 80px
                { duration: 1000, fill: 'forwards' } // Animation duration and fill mode
            );
        }, duration); // Adjust interval duration if needed
    }, delay);
}
var col = document.querySelectorAll(".bar");
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
document.onreadystatechange = function(){
    if(document.readyState == "complete"){
        $('#staticBackdrop').modal('show');
    }
    else{
        $('#staticBackdrop').modal('hide');
    }
};
