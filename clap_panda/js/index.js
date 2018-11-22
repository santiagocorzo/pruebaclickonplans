const msg = document.querySelector('.message');
let body = document.querySelector('body');
let contenido = document.createElement('h1');
contenido.classList.add('msg');
function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}var scene = document.querySelector('.scene');
var actions = document.querySelector('.panda__actions');
var paws = {
  left: document.querySelector('.panda__paw--left'),
  right: document.querySelector('.panda__paw--right'),
  downLeft: document.querySelector('.panda__paw--left-down'),
  downRight: document.querySelector('.panda__paw--right-down') };

var b1 = new Audio(
'https://freesound.org/data/previews/99/99751_29308-lq.mp3');

var b2 = new Audio(
'https://freesound.org/data/previews/99/99752_29308-lq.mp3');


var movePaws = function movePaws(movements) {
  for (var i = 0; i < movements.length; i++) {
    if (movements[i]) {
      Object.entries(paws)[i][1].classList.remove('panda__paw--hidden');
    } else {
      Object.entries(paws)[i][1].classList.add('panda__paw--hidden');
    }
  }
};

var tap = function tap(e) {
  e.stopPropagation();
  var clicked = [].concat(_toConsumableArray(actions.children)).indexOf(e.target);
  var actionIndex = clicked !== -1 ? clicked : e.keyCode;
  switch (actionIndex) {
    case 0:
    case 37:
    case 65:
      // Tap left paw
      movePaws([false, true, true, false]);
      b1.play();
      //Mostrar mensaje
      showMessage('CLAP!!','#FF3700');
      break;
    case 1:
      // Tap both paws
      movePaws([false, false, true, true]);
      b1.play();
      b2.play();
      //Mostrar mensaje
      showMessage('BOOM-CLAP!!','#E89C0C');
      break;
    case 2:
    case 39:
    case 68:
      // Tap right paw
      movePaws([true, false, false, true]);
      b2.play();
      //Mostrar mensaje
      showMessage('BOOM!!','#52FF2B');
      break;
    default:
      // Tap both paws
      movePaws([false, false, true, true]);
      b1.play();
      b2.play();
      //Mostrar mensaje
      showMessage('BOOM-CLAP!!','#E89C0C')
    }

};

var unTap = function unTap(e) {
  e.stopPropagation();
  movePaws([true, true, false, false]);
  b1.pause();
  b1.currentTime = 0;
  b2.pause();
  b2.currentTime = 0;
  setTimeout(function(){
    contenido.classList.add('hide');
    body.style.backgroundColor="#4A71FF";
  },50);
};

var click = function click(e) {
  if (!e.button) {
    movePaws([false, false, true, true]);
    b1.play();
    b2.play();
  }
  if (e.button === 0) {
    movePaws([false, true, true, false]);
    b1.play();
  }
  if (e.button === 2) {
    movePaws([true, false, false, true]);
    b2.play();
  }
};
var unClick = function unClick(e) {
  movePaws([true, true, false, false]);
  b1.pause();
  b1.currentTime = 0;
  b2.pause();
  b2.currentTime = 0;
};

actions.addEventListener('mousedown', tap);
actions.addEventListener('mouseup', unTap);
actions.addEventListener('touchstart', tap);
actions.addEventListener('touchend', unTap);
scene.addEventListener('mousedown', click);
scene.addEventListener('mouseup', unClick);
scene.addEventListener('touchstart', click);
scene.addEventListener('touchend', unClick);
document.body.addEventListener('keydown', tap);
document.body.addEventListener('keyup', unTap);
scene.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  return false;
});

//Mostrar mensaje
function showMessage(text,color) {
  contenido.classList.remove("hide");
  contenido.innerText=text;
  msg.appendChild(contenido);
  body.style.backgroundColor=color;
}