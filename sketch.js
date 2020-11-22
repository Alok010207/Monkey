var gamestate="play";



var score =0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,500);

  monkey = createSprite(100,400);
  monkey.addAnimation("m",monkey_running);
  monkey.scale = 0.2;
  
  ground = createSprite(600,480,1200,40);
  ground.velocityX = -6;
 
  Gbanana = createGroup();
  Gobstacle =createGroup();
  
}

function draw() {
 background("skyblue");
  
 if(gamestate==="play"){
    
  Fbanana();
  Nobstacle();
  
  fill("black");  
  text("score:"+score,50,50);
 
  if( keyDown("space")){
    monkey.velocityY=-16; 
  }
   monkey.velocityY=monkey.velocityY+1;
  
   score = Math.round(frameCount/frameRate());
  
  
   monkey.collide(ground);
  
  if(ground.x<0){
    ground.x =600;  
  }
  
 if(monkey.isTouching(Gbanana)){
   Gbanana.destroyEach();   
 } 
  
 if(monkey.isTouching(Gobstacle)) {
   
   gamestate="End";
   
 }
}
 if(gamestate==="End"){
    
  monkey.destroy();
  Gbanana.destroyEach();
  Gobstacle.destroyEach();
  ground.destroy();
  text("game over",300,250);
     
    
} 
  
  drawSprites();
}

function Fbanana(){
 if (frameCount%200===0){
  banana = createSprite(600,300);
  banana.addImage(bananaImage);
  banana.scale =0.2;
  banana.velocityX=-2;
  banana.y =random(200,300);
  banana.lifetime=300;
  Gbanana.add(banana);
 } 
}

function Nobstacle(){
if(frameCount%200===0){ 
  obstacle = createSprite(590,440);
  obstacle.addImage(obstaceImage);
  obstacle.scale =0.2;
  obstacle.velocityX=-8;  
  Gobstacle.add(obstacle);
  
  
 }
}


