var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var obstaculo ;
var cloud, cloudsGroup, cloudImage;
var obs1;
var obs2;
var obs3;
var obs4;
var obs5;
var obs6;
var newImage;
var pontuazao=0;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  obs1=loadImage('obstacle1.png');
  obs2=loadImage('obstacle2.png');
  obs3=loadImage('obstacle3.png');
  obs4=loadImage('obstacle4.png');
  obs5=loadImage('obstacle5.png');
  obs6=loadImage('obstacle6.png');
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  text("score: "+pontuazao,500,50);
  pontuazao=pontuazao+Math.round(frameCount/60);
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //gerar as nuvens
  spawnClouds();
  spawncactus();
  drawSprites();
}

function spawnClouds() {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //atribua tempo de vida à variável
    cloud.lifetime = 200;
    
    //ajuste a profundidade
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}


function spawncactus(){
  if (frameCount % 60 === 0) {
obstaculo=createSprite(600,165,10,40);
obstaculo.velocityX=-4;
var aleatorio=Math.round(random(1,6));
switch(aleatorio){
case 1: obstaculo.addImage(obs1);
break;
case 2: obstaculo.addImage(obs2);
break;
case 3: obstaculo.addImage(obs3);
break;
case 4: obstaculo.addImage(obs4);
break;
case 5: obstaculo.addImage(obs5);
break;
case 6: obstaculo.addImage(obs6);
break;
default:break;

}
obstaculo.scale=0.5;
obstaculo.lifetime=150;
  }

}

