
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  
  obstaclesGroup = createGroup();
  monkey = createSprite(300,300,1,1);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.5;
  
  ground = createSprite(200,580,1200,20);
  ground.velocityX = -4;
  ground.x = ground.width /2;
  
  
  
  
  
  
  

  
}

function spawnBananas(){
  if (frameCount % 100 === 0){
  var banana = createSprite(600,500,10,40);
  banana.y = Math.round(random(120,200));
  banana.velocityX = -3;
  banana.addImage(bananaImage);
    
    
    banana.scale = 0.2;
    banana.lifetime = 200;
    }
    
}

function spawnObstacles(){
  if (frameCount % 300 === 0){
    var obstacle = createSprite(600,550,10,10);
    obstacle.velocityX = -4
    obstacle.addImage(obstaceImage);
    
    obstacle.scale = 0.2;
    obstacle.lifetime = 200;
    
  }
}
  
  
  


function draw() {
  background(255);
  spawnBananas();
  spawnObstacles();
 stroke("black");
    textSize(20);
    fill("black");
    survivalTime=Math.ceil(frameCount/frameRate())
    text("Survival Time: " + survivalTime, 100,50);
  
   
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
    
  if (keyDown("space")){
     monkey.velocityY = -12
    
      }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
   
drawSprites();
}
  







