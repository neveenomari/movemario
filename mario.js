var mR=0;
var elem =document.querySelector('#img1');

function moveright() {
    mR++;
    elem.style.marginLeft= mR +'px';
    elem.src='right.png';
    console.log(elem.style.marginLeft)

}
var button=document.querySelector("#right");
button.addEventListener('click',moveright);

function moveleft() {
    mR--;
    elem.style.marginLeft= mR +'px';
    elem.src='left.png';
    console.log(elem.style.marginLeft)
}
var button=document.querySelector("#left");
button.addEventListener('click',moveleft);

function stop() {
    elem.src='stop.png';    
}

var button=document.querySelector("#stop");
button.addEventListener('click',stop);

/*function movearound() {

}

var button=document.querySelector("#around");
button.addEventListener('click',movearound);*/