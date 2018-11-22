//Variables
var keys = document.querySelectorAll('.key');
var eyeR = document.querySelector('.righteye');
var eyeL = document.querySelector('.lefteye');
const face = document.querySelector('.head');
const body = document.querySelector('.chest');

function cambiarColor() {
    change = keys.forEach(function(key){
        key.addEventListener('mouseover',function(){
            if(key.id === "k-1"){
                face.setAttribute('fill','#40a4d8');
                eyeR.setAttribute('fill','#40a4d8');
                eyeL.setAttribute('fill','#40a4d8');
                body.style.background="#40a4d8";
            }
            if(key.id === "k-2"){
                face.setAttribute('fill','#b2c225');
                eyeR.setAttribute('fill','#b2c225');
                eyeL.setAttribute('fill','#b2c225');
                body.style.background="#b2c225";
            }
            if(key.id === "k-3"){
                face.setAttribute('fill','#fecc2f');
                eyeR.setAttribute('fill','#fecc2f');
                eyeL.setAttribute('fill','#fecc2f');
                body.style.background="#fecc2f";
            }
            if(key.id === "k-4"){
                face.setAttribute('fill','#f9a228');
                eyeR.setAttribute('fill','#f9a228');
                eyeL.setAttribute('fill','#f9a228');
                body.style.background="#f9a228";
            }
            if(key.id === "k-5"){
                face.setAttribute('fill','#f6621f');
                eyeR.setAttribute('fill','#f6621f');
                eyeL.setAttribute('fill','#f6621f');
                body.style.background="#f6621f";
            }
            if(key.id === "k-6"){
                face.setAttribute('fill','#db3838');
                eyeR.setAttribute('fill','#db3838');
                eyeL.setAttribute('fill','#db3838');
                body.style.background="#db3838";
            }
            if(key.id === "k-7"){
                face.setAttribute('fill','#ee657a');
                eyeR.setAttribute('fill','#ee657a');
                eyeL.setAttribute('fill','#ee657a');
                body.style.background="#ee657a";
            }
            if(key.id === "k-8"){
                face.setAttribute('fill','#a363d9');
                eyeR.setAttribute('fill','#a363d9');
                eyeL.setAttribute('fill','#a363d9');
                body.style.background="#a363d9";
            }

            //face.setAttribute('fill','red')
        });
    });
    restore = keys.forEach(function(key){
        key.addEventListener('mouseleave',function(){
            face.setAttribute('fill','#fff')
            eyeR.setAttribute('fill','#000');
            eyeL.setAttribute('fill','#000');
            body.style.background="#fff";
        });
    });
}

cambiarColor();