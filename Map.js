var Objs = [ //matryc
//1linia

// first line
/*right cor*/
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, /*left cor*/

//next line 
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//3
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//4
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//5
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//6
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//7
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//8
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//9
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,






]
var aud2=0;

function newmap(){
  var aud2 = document.getElementById('fatal')
document.querySelector('#tles').replaceChildren();
setTimeout(constructn, 300)
if (nextmap == 1) {
  if(swiczval===1){
    audio.src = "./Bite.wav" ;
    document.getElementById('aler').innerHTML="playing secret... "
    setTimeout(function(){
      document.getElementById('aler').innerHTML="go to left you find next secret ! "
    },6000)
    audio.currentTime = 0;
    audio.play();
    
  Objs = [ //matryc
    //1linia
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //2
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //3
    0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
    //4
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    //5
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    //6
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4,
    //6.5
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4,
    //7
    0, 0, 0, 0, 0, 0, 0, 0, 4, 1, 1,
    //8
    0, 0, 1, 0, 0, 0, 0, 0, 4, 1, 1,
    //9
    1, 1, 4, 0, 0, 0, 0, 0, 1, 1, 1,
    //10
    1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1,
    //11
    1, 1, 1, 4, 4, 0, 0, 0, 1, 1, 1,
    //12
    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1,

    1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1,

    1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1,

    1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1,

    1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 1,

    1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1,
    ]
    aud2.loop = false;
    aud2.pause();
    aud2.currentTime = 0;
    
  }else{
    setTimeout(function() {
      playerY = 5
      
    }, 200)
     Objs = [ //matryc
    //1linia
    
    // first line
    /*right cor*/
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, /*left cor*/
    
    //next line 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //3
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //4
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //5
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //6
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //7
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //8
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    //9
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    
    
    
    
    
    
    ]
    aud2.loop = false;
    aud2.pause();
    aud2.currentTime = 0;
  }
}
if(nextmap===2){
 setTimeout(function(){
   playerY = 5
   playerX = 2
 }, 200)
Objs = [ //matryc
//1linia

// first line
/*right cor*/
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, /*left cor*/

//next line 
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
//3
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
//4
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
//5
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
//6
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
//7
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
//8
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
//9
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,






]
}
if(nextmap==3){
Objs=
[
0,0,0,0,0,0,0,0,0,0,0,
//2
0,0,0,0,0,0,0,0,0,0,0,
//0
0,0,0,0,0,0,0,0,0,0,0,
//0
0,0,0,0,0,0,0,0,0,0,0,
//5
0,0,0,0,0,0,0,0,0,0,0,
//6
0,0,0,0,0,0,0,0,0,0,0,
//6.5
0,0,0,4,0,0,4,0,0,0,0,
//7
0,0,0,0,0,0,0,0,0,0,0,
//8
0,1,1,1,0,0,1,1,0,0,0,
//9
0,0,0,1,0,1,0,1,0,0,0,
//00
0,0,0,0,0,0,0,0,0,0,0,
//00
0,0,0,0,0,0,0,0,0,0,0,
//02
0,0,0,0,0,0,0,0,0,0,0,

0,0,0,0,0,0,0,0,0,0,0,

0,0,0,0,0,0,0,0,0,0,0,

0,0,0,0,0,0,0,0,0,0,0,

0,0,0,0,0,0,0,0,0,0,0,

0,0,0,0,0,0,0,0,0,0,0,
]
}
if(nextmap==4){
Objs=
[
0,0,0,0,0,0,0,0,0,0,0,
//2
0,0,0,0,0,0,0,0,0,0,0,
//0
0,0,0,0,0,0,0,0,0,0,0,
//0
0,0,0,0,0,0,0,0,0,0,0,
//5
0,0,0,0,0,0,0,0,0,0,0,
//6
0,0,0,0,0,0,0,0,0,0,0,
//6.5
0,0,0,0,0,0,0,0,0,0,0,
//7
0,0,0,0,0,0,0,0,0,0,0,
//8
0,1,0,0,0,0,0,1,0,0,0,
//9
0,0,0,1,0,0,0,0,0,0,0,
//00
0,0,0,0,0,0,0,0,0,0,0,
//00
0,0,0,0,0,0,0,1, 1,1,0,
//02
0,0,0,0,0,0,0,0,0,0,0,

0,0,0,0,0,0,0,0,0,0,0,

0,0,0,0,0,0,0,0,0,0,0,

0,0,0,0,0,0,0,0,0,0,0,

0,0,0,0,0,0,0,0,0,0,0,

0,0,0,0,0,0,0,0,0,0,0,
]
}
if(nextmap==5){
  audio.src = "/shop_in_cave_wat.wav";
  audio.currentTime = 0;
  audio.play();
  aud.pause();
Objs=
[
0,0,0,0,0,0,0,0,0,0,0,
//2
0,0,0,0,0,0,0,0,0,0,0,
//0
0,0,0,0,0,0,0,0,0,0,0,
//0
0,0,0,0,0,0,0,0,0,0,0,
//5
0,0,0,0,0,0,0,0,0,0,0,
//6
0,0,0,0,0,0,0,0,0,0,0,
//6.5
0,0,0,0,0,0,0,0,0,0,0,
//7
0,0,0,0,0,0,0,0,0,0,0,
//8
0,1,5,0,0,0,0,0,1,0,0,
//9
0,0,0,4,0,0,0,0,0,0,0,
//00
0,0,0,0,0,1,0,0,0,0,0,
//00
0,0,4,1,0,0,0,0,1,0,0,
//02
0,0,0,0,0,0,0,0,0,0,0,

0,1,1,0,0,0,0,0,0,0,0,

0,0,0,0,0,0,0,0,0,0,0,

0,0,0,0,0,0,0,0,0,0,0,

3,3,3,3,3,3,3,3,3,3,3,

3,3,3,3,3,3,3,3,3,3,3,
]
}
if(nextmap==6){
Objs=
[
0,0,0,0,0,0,0,0,0,0,0,
//2
0,0,0,0,0,0,0,0,0,0,0,
//0
0,0,0,0,0,0,0,0,0,0,0,
//0
0,0,0,0,0,0,0,0,0,0,0,
//5
0,0,0,0,0,0,0,0,0,0,0,
//6
0,0,0,0,0,0,0,0,0,0,0,
//6.5
0,0,0,0,0,0,0,0,0,0,0,
//7
0,0,0,0,0,0,0,0,0,0,0,
//8
1,0,0,0,0,0,0,0,1,0,0,
//9
0,0,0,0,0,0,0,0,0,0,0,
//00
0,0,0,0,0,0,0,0,0,0,0,
//00
0,0,1,0,0,0,0,0,0,0,1,
//02
0,0,0,0,0,0,0,0,0,0,0,

0,0,0,0,0,5,0,0,0,0,0,

0,0,0,0,0,0,0,0,0,0,0,

0,0,0,0,0,0,0,0,0,0,0,

3,3,3,3,3,3,3,3,3,3,3,

3,3,3,3,3,3,3,3,3,3,3,
]
}
if(nextmap==7){
Objs=
[
0,0,0,0,0,0,0,0,0,0,0,
//2
0,0,0,0,0,0,0,0,0,0,0,
//0
0,0,0,0,0,0,0,0,0,0,0,
//0
0,0,0,0,0,0,0,0,0,0,0,
//5
0,0,0,0,0,0,0,0,0,0,0,
//6
0,0,0,0,0,0,0,0,0,0,0,
//6.5
0,0,0,0,0,0,0,0,0,0,0,
//7
0,0,0,0,0,0,0,0,0,0,0,
//8
1,0,0,0,0,0,0,0,1,0,0,
//9
0,0,0,0,0,0,0,0,0,0,0,
//00
0,0,0,0,0,0,0,0,0,0,0,
//00
1,1,1,0,0,0,0,0,0,0,1,
//02
0,0,0,0,0,0,0,0,0,0,0,

0,0,1,6,6,6,6,6,6,6,1,

0,0,0,0,0,0,0,0,0,0,0,

0,0,0,0,0,0,0,0,0,0,0,

3,3,3,3,3,3,3,3,3,3,3,

3,3,3,3,3,3,3,3,3,3,3,
]
}
if (nextmap===9) {
  audio.src = "/BeepBox-Song (1).wav";
  audio.currentTime = 0;
  audio.play();
   setTimeout(function() {
     playerY = 5
     playerX = 2
   }, 200)
  Objs = [ //matryc
  //1linia
  
  // first line
  /*right cor*/
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, /*left cor*/
  
  //next line 
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //3
  0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //4
  0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //5
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //6
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  //7
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0,
  //8
  1, 1, 1, 1, 6, 5, 6, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1,
  //9
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  
  
  
  
  
  
  ]
}

if (nextmap === 10) {
  //spawn boss
  mo() 
  setTimeout(function() {
    playerY = 7
    playerX = 4
    
    document.getElementById('monster').src='./Boss.gif'
  }, 200)
  setTimeout(function (){
    document.getElementById('sky').src='/darksky.png'
  },1000)
  setTimeout( function (){
    aud.pause();
var  aud2 = document.getElementById('fatal')
  aud2.play()
  aud2.loop = true;
  aud2.currentTime = 0;
  },4000)
Objs = [ //matryc
//1linia

//firstline
/*rightcor*/
0,9,9,9,0,0,0,0,0,0,0,
0,0,0,0,9,9,9,0,0,0,0,
//nextline
0,0,0,0,0,0,0,0,9,9,9,
0,0,0,0,0,0,0,0,0,0,0,
//3
0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,
//4
0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,

0,9,9,9,0,0,0,0,0,0,0,
0,0,0,0,9,9,9,0,0,0,0,
//6
0,0,0,0,0,0,0,0,9,9,9,
0,0,0,0,0,0,0,0,0,0,0,
//7
0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,
//8
0,0,0,0,0,0,0,4,0,0,0,
0,0,0,0,0,4,0,0,0,0,4,
//9
1,1,1,1,1,1,1,1,3,3,1,
1,1,1,1,1,1,1,1,1,1,1,






]
}
if (nextmap === 11) {
 document.querySelector('.Bossbar').style.display ="none"
  setTimeout(function() {
    playerY = 7
    playerX = 5
    document.getElementById('sky').src = './darksky.png'
  }, 200)
  setTimeout(function() {
    aud.pause();
    aud2.pause();
  }, 4000)
 Objs = [ //matryc
//9linia

// first line
/*right cor*/
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, /*left cor*/

//next line 
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//3
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//4
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//5
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//6
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//7
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//8
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//9
9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9







]
}
if (nextmap === 12) {
  
  setTimeout(function() {
    aud.pause();
    aud2.pause();
  }, 4000)
  Objs = [ //matryc
//9linia

// first line
/*right cor*/
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, /*left cor*/

//next line 
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//3
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//4
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//5
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//6
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//7
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//8
0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0,
0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0,
//9
9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9







]
}
}
function reset(){
  
    
    
    nextmap=1
  
  newmap()
  
  setTimeout(generate, 200)
    setTimeout(constructn, 300)
  playerY = 0;
  playerX = 0;
  
  
  
}
// 4-kolce
// 0-nic
// 9-gleba cmentarna 
// 1-blok trawy
// 6-deski drewniane
// 3-lava