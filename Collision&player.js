elem=document.documentElement;
var important = "no";
onload = function(){
  var start=false ;
}
//
    //. °-----------------°
    //  |.                |
    //. ¦.  Important     ¦
    //. ¦.                ¦
    //. ¦.                ¦
    //. °-----------------°
    //
//yes /
var important="no";
var start=false;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
    start=true;
  }
    
  else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  }

  else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

var player = document.querySelector('#player');

var tiles = document.querySelectorAll('.tile');
var hurt = document.querySelectorAll('.Lava');
var spike = document.querySelectorAll('.null2');
var regeneration = document.querySelectorAll('.endblock');
var swicz = document.querySelectorAll('.swither');
var nullbl=0;
var swiczval=0
 function constructn() {
   regeneration = document.querySelectorAll('.endblock');
   
   nullbl = document.querySelectorAll('.null');
   
   
   
   swicz = document.querySelectorAll('.swither');
  tiles = document.querySelectorAll('.tile');
  hurt = document.querySelectorAll('.Lava');
  spike = document.querySelectorAll('.null2');
  
  
}

const gameBoard = document.querySelector('#game-board');
const tileSize = 40;

var playerX = 0;
var playerY = 0;

function movePlayer(dx, dy) {

  playerX += dx;
  playerY += dy;
  checkCollision(dx, dy);
  checkCollision2(dx, dy);
  player.style.left = playerX * tileSize + 'px';
  player.style.top = playerY * tileSize + 'px';
  //sidescrooller
  
}

function checkCollision(dx, dy) {
	
    for (let blok of swicz) {
      const rect1 = player.getBoundingClientRect();
      const rect2 = blok.getBoundingClientRect();
      if (rect1.bottom > rect2.top &&
        rect1.top < rect2.bottom &&
        rect1.right > rect2.left &&
        rect1.left < rect2.right) {
  
        playerY -= dy + 0.009;
        // blokuje poruszanie x
        spgrav = 0
        playerX -= dx;
        player.style.left = playerX * tileSize + 'px';
        player.style.top = playerY * tileSize + 'px';
  
        collide = 1
        return;
      }
  
      if (rect1.bottom + 5 >= rect2.top &&
        rect1.top < rect2.bottom &&
        rect1.right > rect2.left &&
        rect1.left < rect2.right) {
        collide = 1;
        setTimeout(function(){
          document.getElementById('aler').innerHTML="Unlocked =" +swiczval+"back to start to unlock the secret map"
        },4000)
        document.getElementById('aler').innerHTML="you find secret binchilng nya ~"
        swiczval=1
  
        cav = 0
        return;
      } else {
        collide = 0;
  
      }
    } 
  for (let helt of regeneration) {
    const rect1 = player.getBoundingClientRect();
    const rect2 = helt.getBoundingClientRect();
    if (rect1.bottom > rect2.top &&
      rect1.top < rect2.bottom &&
      rect1.right > rect2.left &&
      rect1.left < rect2.right) {

      playerY -= dy + 0.009;
      // blokuje poruszanie x
      spgrav = 0
      playerX -= dx;
      player.style.left = playerX * tileSize + 'px';
      player.style.top = playerY * tileSize + 'px';

      collide = 1
      return;
    }

    if (rect1.bottom + 5 >= rect2.top &&
      rect1.top < rect2.bottom &&
      rect1.right > rect2.left &&
      rect1.left < rect2.right) {
      collide = 1;
      if (health <100) {
        health+=0.3
      }
      
      cav = 0
      return;
    } else {
      collide = 0;

    }


  }
  /*const wallThickness = 4; // Grubość ścianki

// Kolizja z lewą ścianką
if (rect1.left < rect2.right + wallThickness && rect1.right > rect2.right && rect1.bottom > rect2.top + wallThickness && rect1.top < rect2.bottom - wallThickness) {
    rect2.x = rect1.left - rect2.width;
}

// Kolizja z prawą ścianką
if (rect1.right > rect2.left - wallThickness && rect1.left < rect2.left && rect1.bottom > rect2.top + wallThickness && rect1.top < rect2.bottom - wallThickness) {
    rect2.x = rect1.right;
}

// Kolizja z górną ścianką
if (rect1.top < rect2.bottom + wallThickness && rect1.bottom > rect2.bottom && rect1.right > rect2.left + wallThickness && rect1.left < rect2.right - wallThickness) {
    rect2.y = rect1.top - rect2.height;
}

// Kolizja z dolną ścianką
if (rect1.bottom > rect2.top - wallThickness && rect1.top < rect2.top && rect1.right > rect2.left + wallThickness && rect1.left < rect2.right - wallThickness) {
    rect2.y = rect1.bottom;
}
*/
var topside=0
  for (let tile of tiles) {
    const rect1 = player.getBoundingClientRect();
    const rect2 = tile.getBoundingClientRect();
    const wallThickness =2;
    
if (rect1.bottom > rect2.top + 5 &&
      rect1.top < rect2.bottom - 10 &&
      rect1.right > rect2.left + 5 &&
      rect1.left < rect2.right - 5) {
        console.log("oh")
topside=1;
playerY -=0.5;

}

    if (rect1.left < rect2.right + wallThickness && rect1.right > rect2.right && rect1.bottom > rect2.top + wallThickness && rect1.top < rect2.bottom - wallThickness) {
    
    
      // blokuje poruszanie x
      spgrav = 0
      playerX += dx + 0.1;
      if (topside == 0) {
        playerY += 0.06;
      }
      player.style.left = playerX * tileSize + 'px';
      player.style.top = playerY * tileSize + 'px';
    
      collide = 1
      return;
    } else if (rect1.right > rect2.left - wallThickness && rect1.left < rect2.left && rect1.bottom > rect2.top + wallThickness && rect1.top < rect2.bottom - wallThickness) {
    
      
      // blokuje poruszanie x
      spgrav = 0
      playerX -= dx + 0.1;
      if (topside==0) {
        playerY += 0.06 ;
      }
      
      player.style.left = playerX * tileSize + 'px';
      player.style.top = playerY * tileSize + 'px';
    
      collide = 1
      return;
    }
    
    if (rect1.top < rect2.bottom + wallThickness && rect1.bottom > rect2.bottom && rect1.right > rect2.left + wallThickness && rect1.left < rect2.right - wallThickness) {
    
      playerY += dy + 0.009;
      // blokuje poruszanie x
      spgrav = 0
     
      player.style.left = playerX * tileSize + 'px';
      player.style.top = playerY * tileSize + 'px';
    
      collide = 1
      return;
    }if (rect1.bottom > rect2.top - wallThickness && rect1.top < rect2.top && rect1.right > rect2.left + wallThickness && rect1.left < rect2.right - wallThickness) {
      
          playerY -= dy + 0.009;
          console.log("ok")
          // blokuje poruszanie x
          spgrav = 0
          
          player.style.left = playerX * tileSize + 'px';
          player.style.top = playerY * tileSize + 'px';
      topside=1
          collide = 1
          return;
        }else{
          
        }
        
      if (player.x < rect2.x && player.y + 55 > rect2.y && player.y < rect2.y + 55) {
        rect2.x = player.x - 50;
      }
        if (rect1.bottom + 5 >= rect2.top &&
          rect1.top < rect2.bottom &&
          rect1.right > rect2.left &&
          rect1.left < rect2.right) {
          collide = 1;
      
          cav = 0
          return;
        } else {
          collide = 0;
      
        }
  
  }
  for (let hurtl of hurt) {
    const rect1 = player.getBoundingClientRect();
    const rect2 = hurtl.getBoundingClientRect();
    if (rect1.bottom > rect2.top &&
      rect1.top < rect2.bottom &&
      rect1.right > rect2.left &&
      rect1.left < rect2.right) {

      playerY -= dy / 1.5 + 0.002;
      // blokuje poruszanie x
      playerX -= dx;
      player.style.left = playerX * tileSize + 'px';
      player.style.top = playerY * tileSize + 'px';
      hurtty = 1;
      collide = 1
      ffghc = 1;
      return;
    } else {
      hurtty = 0;
      ffghc = 0;
    }

  }
}
var ffghc = 0;

function checkCollision2(dx, dy) {
    for (let hurtspk of spike) {
      const rect1 = player.getBoundingClientRect();
      const rect2 = hurtspk.getBoundingClientRect();
      if (rect1.bottom > rect2.top &&
        rect1.top < rect2.bottom &&
        rect1.right > rect2.left &&
        rect1.left < rect2.right) {
  
        playerY -= dy / 1.8;
        // blokuje poruszanie x
        playerX -= dx / 1.8;
        player.style.left = playerX * tileSize + 'px';
        player.style.top = playerY * tileSize + 'px';
        health-=0.2;
  
        return;
      } else {
        
  
  
      }
  
    }
}
var collide = 0
document.addEventListener('keydown', event => {
  switch (event.key) {
    case 'ArrowLeft':
      movePlayer(-1, 0);
      break;
    case 'ArrowRight':
      movePlayer(1, 0);
      break;
    case 'ArrowUp':
      movePlayer(0, -1);
      break;
    case 'ArrowDown':
      movePlayer(0, 1);
      break;
  }
});

function movleft() {
  movePlayer(0.08, 0)
  if (important === "yes") {
    movePlayer(0.1, 0)
  }
}

function movright() {
  movePlayer(-0.08, 0)
  if (important === "yes") {
    movePlayer(-0.1, 0)
  }
}
var cav = 0

function jump() {
  if (collide === 1) {
    movup()
  }else if (important==="yes") {
    movup()
  }
}
var speedv = 0;

function movup() {
  speedv += 0.13
  if (important === "yes") {
    movePlayer(0, -0.3  / Math.abs(Math.atan(speedv)-spgrav))
  }else {

  movePlayer(0, -0.1 / Math.abs(Math.atan(speedv)))
  } 
  //movePlayer(0, -0.1/Math.abs(Math.tan(speedv)) )

  cav += 3;

  if (cav < 60) {
    requestAnimationFrame(movup)

  } else {
    speedv = 0
  }
}

var gravityy = 0.001
var firstgravity = gravityy
var maxVelocity = 0.09
var spgrav = 0;
gravity()



 var button1 =document.getElementById('buttona')
 var button2 =document.getElementById('leftarr')
 var button3 =document.getElementById('rightarr')
 var right=0;
 var left=0;
button1.addEventListener("ontouchstart" in document ? "touchstart" : "mousedown", e => {

  document.getElementById('buttona').classList.add('click');
document.getElementById('buttona').classList.remove('noclick');
  jump()

});
button1.addEventListener("ontouchstart" in document ? "touchend" : "mouseup", e => {
document.getElementById('buttona').classList.add('noclick');
document.getElementById('buttona').classList.remove('click');


    });
    
   
button2.addEventListener("ontouchstart" in document ? "touchstart" : "mousedown", e => {
  left=1;
});
button2.addEventListener("ontouchstart" in document ? "touchend" : "mouseup", e => {
  left=0;
    });
button3.addEventListener("ontouchstart" in document ? "touchstart" : "mousedown", e => {
  right = 1;
});
button3.addEventListener("ontouchstart" in document ? "touchend" : "mouseup", e => {
  right = 0;
});
setTimeout(loopwithdelay, 200)
function loopwithdelay(){
  if (left==1) {
    movright()
    document.getElementById('player').src = '/playerright.png'
  }
  if (right == 1) {
    movleft()
    document.getElementById('player').src = '/playerleft.png'
  }
  requestAnimationFrame(loopwithdelay)
}

