
var road, roadImg;
var mysound;
var obstacle1, obstacle2, o1Img, o2Img, obstacle1Group, obstacle2Group;
var car, carImg;
var gameState = "play";


function preload(){
    roadImg = loadImage("Road.png");
    carImg = loadImage("car.png");
    o1Img = loadImage("obstacle1.png");
    o2Img = loadImage("obstacle2.jpg");
    mySound = loadSound("BMW+DRIVEBY.mp3");
  }
  ///////////////////////////

  function setup() {
    createCanvas(1000, 1000);
    mySound.loop()
    road = createSprite(300,300, 600, 600);
    road.addImage("road",roadImg);
    road.velocityY = 1;
  
    car = createSprite(200, 200, 50, 50);
    car.addImage(carImg);
    car.scale = 0.5;
  
  
    obstacle1Group = new Group();
    obstacle2Group = new Group();

  }
  
  /////////////////////////////

  function draw() {
    background(200);
    
    if (gameState === "play") {
  
    
    if(road.y > 400){
        road.y = 300
      }
  
    if (keyDown("left_arrow")) {
      car.x = car.x -3;
    }
  
    if (keyDown("right_arrow")) {
      car.x = car.x +3;
    }
  
    if (keyDown("space")) {
      car.velocityY = -5;
    }
  
    car.velocityY += 0.8;
    
    if (obstacle1Group.isTouching(car)) {
      gameState = "end";
    }
  
  
      spawnObstacle1()
      spawnObstacle2()
    
  
      drawSprites();
  }
  
  if (gameState === "end") {
    stroke("lime");
    fill("blue");
    textSize(50);
    text("GAME OVER!!", 230, 230, 250);
  
  
  }
  }
  ///////////////////////////////////////////
  function spawnObstacle1() {
    if (frameCount % 250 === 0) {
      obstacle1 = createSprite(200, -50);
      obstacle1.addImage(o1Img);
        
      obstacle1.x = Math.round(random(120, 400));
      obstacle1.velocityY = 1;


  

  
  
      car.depth = obstacle1.depth;

      car.depth += 1;
      
  
      obstacle1Group.add(obstacle1);


  
    }


  }
//////////////////////////////////////////////////////////////////////////////
  function spawnObstacle2() {
    obstacle2 = createSprite(200, -100);
    obstacle2.addImage(o2Img);

    obstacle2Group.add(obstacle2)

    obstacle2.x = Math.round(random(120, 400));
    obstacle2.velocityY = 1;
    car.depth = obstacle2.depth;
  }