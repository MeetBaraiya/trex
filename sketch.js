
var monkey , monkey_running,ground,invisibleGorund;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score;
var survivalTime = 0; 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
 
  //it our ground
  ground = createSprite (200,350,430,50);
  ground.x = ground.width /2;
  ground.shapeColor = 	rgb(124,252,0);
  
  //it our monkey.
  monkey = createSprite (50,315,50,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  //it our invisible ground
  invisibleGround = createSprite(200,350,400,10);
  invisibleGround.visible = false;
  
  //its our groups
   obstaclesGroup = createGroup();
  FoodGroup = createGroup();

}


function draw() {
  background("white");
  
  //its our score
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score, 500,50);
  
  //its our surivival time
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:  "+ survivalTime, 100, 50);
    
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
   //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
        
    }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 1
  
  //call function obstacles and food
   Obstacle();
   Food();
  
  //monkey run upon invisible ground
  monkey.collide(invisibleGround);

  drawSprites();
}

//its our obstacle function.
function Obstacle(){
  
  if (World.frameCount%80===0 ) {
     obstacle = createSprite(420,320,20,20);
    obstacle.velocityX = -6;
    obstacle.scale = 0.2;
    obstacle.addImage(obstacleImage); 
    obstacle.lifetime =300;
    obstaclesGroup.add(obstacle);
     }
 
  
  
}


//its our food function.   
function Food (){
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(420,190,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 300;
    FoodGroup.add(banana);
monkey.depth = banana.depth + 1
  }

}



