var canvas, backgroundImage;
var leftArrow,rightArrow,upArrow,downArrow,rando;
var laimg,raimg,uaimg,daimg,yw,ywimg,yw1,yw1img,yl,ylimg,yl1,yl1img;
var x,y,width,height;
var fixedRect, movingRect,bgsound1,bgsound2;
var child, kidnapper,gate, childImage, babyImage, baby, kidnapperImage, kidnap,kidnapImage, play,stc;
var gameState = 1;
var time = 30;
var key,keyImage,code,codeImage;
var edges,ciig;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35;
var form , game;
function preload(){
  keyImage = loadImage("key.png");
  babyImage = loadImage("baby.png");
  kidnapImage = loadImage("kidnap.png");
  backgroundImage = loadImage("bg.jpg");
  ciig = loadImage("babyImgIngame.png");
  kidnapperImage = loadImage("kidnapperImgIngame.jpg");
  bgsound1 = loadSound("voorheez3.mp3");
  bgsound2 = loadSound("hauntedhouse.mp3");
  uaimg = loadImage("uaimg.png");
  daimg = loadImage("daimg.png");
  laimg = loadImage("laimg.png");
  raimg = loadImage("raimg.png");
  ylimg = loadImage("win.PNG");
  ywimg = loadImage("lose.jpg");
}
function setup(){
  canvas = createCanvas(1165,650);
  textSize(30);
  wall1 = createSprite(15,325,30,650);
  wall1.shapeColor = "brown";
  wall1.visible = false;
  wall2 = createSprite(682.5,15,1365,30);
  wall2.shapeColor = "brown";
  wall2.visible = false;
  wall3 = createSprite(1150,108,30,217);
  wall3.shapeColor = "brown";
  wall3.visible = false;
  wall4 = createSprite(1150,540,30,217);
  wall4.shapeColor = "brown";
  wall4.visible = false;
  wall5 = createSprite(675,635,1350,30);
  wall5.shapeColor = "brown";
  wall5.visible = false;
  wall6 = createSprite(170,100,341,20);
  wall6.shapeColor = "brown";
  wall6.visible = false;
  wall7 = createSprite(329,160,20,130);
  wall7.shapeColor = "brown";
  wall7.visible = false;
  wall8 = createSprite(110,350,220,30);
  wall8.shapeColor = "brown";
  wall8.visible = false;
  wall9 = createSprite(230,285,20,150);
  wall9.shapeColor = "brown";
  wall9.visible = false;
  wall10 = createSprite(190,200,100,20);
  wall10.shapeColor = "brown";
  wall10.visible = false;
  wall11 = createSprite(405,225,170,20);
  wall11.shapeColor = "brown";
  wall11.visible = false;
  wall12 = createSprite(477.5,370,20,150);
  wall12.shapeColor = "brown";
  wall12.visible = false;
  wall13 = createSprite(438,450,100,20);
  wall13.shapeColor = "brown";
  wall13.visible = false;
  wall14 = createSprite(600,370,250,20);
  wall14.shapeColor = "brown";
  wall14.visible = false;
  wall15 = createSprite(477.5,225,25,15);
  wall15.shapeColor = "brown";
  wall15.visible = false;
  wall16 = createSprite(110,500,20,100);
  wall16.shapeColor = "brown";
  wall16.visible = false;
  wall17 = createSprite(160,500,100,20);
  wall17.shapeColor = "brown";
  wall17.visible = false;
  wall18 = createSprite(200,590,20,200);
  wall18.shapeColor = "brown";
  wall18.visible = false;
  wall19 = createSprite(600,520,20,100);
  wall19.shapeColor = "brown";
  wall19.visible = false;
  wall20 = createSprite(438,480,20,70);
  wall20.shapeColor = "brown";
  wall20.visible = false;
  wall21 = createSprite(470,510,80,20);
  wall21.shapeColor = "brown";
  wall21.visible = false;
  wall22 = createSprite(500,540,20,50);
  wall22.shapeColor = "brown";
  wall22.visible = false;
  wall23 = createSprite(682.5,190,30,180);
  wall23.shapeColor = "brown";
  wall23.visible = false;
  wall24 = createSprite(520,120,125,25);
  wall24.shapeColor = "brown";
  wall24.visible = false;
  wall25 = createSprite(712,430,25,120);
  wall25.shapeColor = "brown";
  wall25.visible = false;
  wall26 = createSprite(788,500,175,25);
  wall26.shapeColor = "brown";
  wall26.visible = false;
  wall27 = createSprite(715,590,30,30);
  wall27.shapeColor = "brown";
  wall27.visible = false;
  wall28 = createSprite(780,560,165,30);
  wall28.shapeColor = "brown";
  wall28.visible = false;
  wall29 = createSprite(863,430,25,120);
  wall29.shapeColor = "brown";
  wall29.visible = false;
  wall30 = createSprite(973,375,250,20);
  wall30.shapeColor = "brown";
  wall30.visible = false;
  wall31 = createSprite(865,275,25,200);
  wall31.shapeColor = "brown";
  wall31.visible = false;
  wall32 = createSprite(835,205,50,20);
  wall32.shapeColor = "brown";
  wall32.visible = false;
  wall33 = createSprite(795,280,30,300);
  wall33.shapeColor = "brown";
  wall33.visible = false;
  wall34 = createSprite(760,205,50,20);
  wall34.shapeColor = "brown";
  wall34.visible = false;
  gate = createSprite(1155,325,20,217);
  gate.shapeColor = "brown";
  gate.visible = false;
  x=-7.5;
  y=-10;
  width = 15;
  height = 20;
  child = createSprite(50,580,50,20);
  child.shapeColor = "brown";
  child.setCollider("rectangle",20,30,200,350);
  //wall1.visible = false;
  //child.velocityX = 2;
  child.addImage(ciig);
  child.scale = 0.15;
  child.visible = false;
 // child.debug = true;
  kidnapper = createSprite(75,50,50,20);
  kidnapper.shapeColor = "brown";
  kidnapper.setCollider("rectangle",0,0,100,100);
 // kidnapper.debug = true;
  kidnapper.velocityX = random(-2,2);
  kidnapper.velocityY = random(-2,2);
  //wall1.visible = false;
  //kidnapper.velocityX = -2;
  kidnapper.addImage(kidnapperImage);
  kidnapper.scale = 0.3;
  kidnapper.visible = false;
 // rando = Math.round(random(-2,2));
 
  key = createSprite(50,50,10,10)
   key.shapeColor = "blue";
   key.addImage(keyImage);
   key.scale = 0.01;
   key.visible = false;
   time = 30;
 // bgsound1.play();
 // game = new Game();
 // game.play();
 //amplitude = new p5.Amplitude();
  //bgsound1.loop();
  //bgsound1.play();
  form = new Form();
  form.display();
 
 textSize(100);
 textFont('Georgia');
 fill(50);
}


function draw(){
 // createEdgeSprites();
  //background('red'||backgroundImage);
  //text("Save the child",700,250);
 edges = createEdgeSprites();
  if(child.isTouching(key)){
    key.remove();
    gameState = 2;
  }
  if(child.collide(gate) && gameState === 2){
    gate.remove();
  }
  if(child.x>1165){
    yw = createSprite(570,325,100,100);
    yw.addImage(ywimg);
    yw.scale=1.5;
    //yw1 = createSprite(200,800,20,20);
    //yw1img = createSprite();
  }
  if(time<=0 && child.x<1165){
    yl = createSprite(570,325,100,100);
    yl.addImage(ylimg);
    yl.scale=1.5;
    //yl1 = createSprite(200,800,20,20);
   // yl1img = createSprite();
  }
  if(kidnap.x<1160||kidnap.velocityX === 0){
    background('red');
    //amplitude = new p5.Amplitude();
    ///bgsound2.loop();
    //bgsound2.play();
}
if(kidnap.x>1160){
  background(backgroundImage);
  //spawnKidnappers();
 
  
 
  wall1.visible = true;
  wall2.visible = true;
  wall3.visible = true;
  wall4.visible = true;
  wall5.visible = true;
  wall6.visible = true;
  wall7.visible = true;
  wall8.visible = true;
  wall9.visible = true;
  wall10.visible = true;
  wall11.visible = true;
  wall12.visible = true;
  wall13.visible = true;
  wall14.visible = true;
  wall15.visible = true;
  wall16.visible = true;
  wall17.visible = true;
  wall18.visible = true;
  wall19.visible = true;
  wall20.visible = true;
  wall21.visible = true;
  wall22.visible = true;
  wall23.visible = true;
  wall24.visible = true;
  wall25.visible = true;
  wall26.visible = true;
  wall27.visible = true;
  wall28.visible = true;
  wall29.visible = true;
  wall30.visible = true;
  wall31.visible = true;
  wall32.visible = true;
  wall33.visible = true;
  wall34.visible = true;
  //wall35.visible = true;
  child.visible = true;
  //frameRate(0.25);
  //time = time - Math.round(frameCount);
  //text("Time left = "+time,600,50);
  gate.visible = true;
  //kidnapper.visible = true;
  key.visible = true;
  //amplitude = new p5.Amplitude();
 // bgsound2.stop();
 // bgsound1.loop();
  //bgsound1.play();
}

// edges = createEdgeSprites();
 //getFrameCount(60 === 0);
// spawnKidnappers();
child.collide(key);
child.collide(wall1);
child.collide(wall2);
child.collide(wall3);
child.collide(wall4);
child.collide(wall5);
child.collide(wall6);
child.collide(wall7);
child.collide(wall8);
child.collide(wall9);
child.collide(wall10);
child.collide(wall11);
child.collide(wall12);
child.collide(wall13);
child.collide(wall14);
child.collide(wall15);
child.collide(wall16);
child.collide(wall17);
child.collide(wall18);
child.collide(wall19);
child.collide(wall20);
child.collide(wall21);
child.collide(wall22);
child.collide(wall23);
child.collide(wall24);
child.collide(wall25);
child.collide(wall26);
child.collide(wall27);
child.collide(wall28);
child.collide(wall29);
child.collide(wall30);
child.collide(wall31);
child.collide(wall32);
child.collide(wall33);
child.collide(wall34);
child.collide(gate);
//child.collide(kidnapper);
//kidnapper.collide(child);
kidnapper.collide(key);
kidnapper.collide(wall1);
kidnapper.collide(wall2);
kidnapper.collide(wall3);
kidnapper.collide(wall4);
kidnapper.collide(wall5);
kidnapper.collide(wall6);
kidnapper.collide(wall7);
kidnapper.collide(wall8);
kidnapper.collide(wall9);
kidnapper.collide(wall10);
kidnapper.collide(wall11);
kidnapper.collide(wall12);
kidnapper.collide(wall13);
kidnapper.collide(wall14);
kidnapper.collide(wall15);
kidnapper.collide(wall16);
kidnapper.collide(wall17);
kidnapper.collide(wall18);
kidnapper.collide(wall19);
kidnapper.collide(wall20);
kidnapper.collide(wall21);
kidnapper.collide(wall22);
kidnapper.collide(wall23);
kidnapper.collide(wall24);
kidnapper.collide(wall25);
kidnapper.collide(wall26);
kidnapper.collide(wall27);
kidnapper.collide(wall28);
kidnapper.collide(wall29);
kidnapper.collide(wall30);
kidnapper.collide(wall31);
kidnapper.collide(wall32);
kidnapper.collide(wall33);
kidnapper.collide(wall34);
kidnapper.collide(gate);

  drawSprites();
  if (frameCount % 60 === 0 && time > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    time --;
  }
  text(time,600,100);
  
  textSize(30);
// child.collide(wall18);
}
/*function hid(){
  kidna,p.hide();
   baby.hide();
   play.hide();
}*/

/*function spawnKidnappers() {
   //write code here to spawn the clouds
   if (frameCount % 60 === 0) {
     var cloud = createSprite(0,120,40,10);
     cloud.y = Math.round(random(30,630));
     cloud.addImage(kidnapperImage);
     cloud.scale = 0.2;
     cloud.velocityX = 3;
     
      //assign lifetime to the variable
    // cloud.lifetime = 200;
     
     //adjust the depth
    // cloud.depth = trex.depth;
    // trex.depth = trex.depth + 1;
     
     //add each cloud to the group
    // cloudsGroup.add(cloud);
   }*/
  
//function bg(){
