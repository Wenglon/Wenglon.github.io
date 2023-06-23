define()
var hurtty=0
function define(){
   hurtty=0
}
function build(element, block) {
	if (block == 'grass') {
		element.scr = '/scr/grass.png';
		alert("place")
	} 
}

function gravity() {

 document.getElementById('y').innerText=Math.floor(playerY) 
document.getElementById('x').innerText=Math.floor(playerX) 
  var time = Date.now();
  frame++;
  if (time - startTime > 1000) {
    fps.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(1);
    startTime = time;
    frame = 0;
  }

  document.getElementById('debug').innerHTML = log

  //nmap +=1 nowa mapa
  if (start === true) {
    

  }
  if (important === "yes") {
    health = NaN
  }
  var nPhrase = phrases[nmap];
  nextmap.textContent = nPhrase;
  log = "Mapa Objs=" + nPhrase;

  if (playerY > 20) {
    health = -30;
  }
  if (playerX > 21) {
    movePlayer(-19, 0)
    playerY = 0
    playerX = 0
    novb = 1
    nextmap += 1;
    nmap += 1

    newmap()
    setTimeout(generate, 200)
  }
if (playerX < -1) {
  movePlayer(22, -3)
  
  novb = 1
  nextmap -= 1;
  nmap -= 1

  newmap()
  setTimeout(generate, 200)
}
  var Px = document.getElementById('player').style.left
  var PxR = parseInt(Px)
  document.getElementById('game-board').style.marginLeft = (PxR * -1) + "px";

  gameBoard.style.left = playerX - 20 + innerWidth / 2 + "px"
  gameBoard.style.top = playerY * -40 + innerHeight / 2 + "px"

  spgrav += gravityy;
  movePlayer(0, spgrav)
  // Ogranicz prędkość do maksymalnej wartości
  if (spgrav > maxVelocity) {
    spgrav = maxVelocity;
  }

  movePlayer(0, 0)
  requestAnimationFrame(gravity)

}