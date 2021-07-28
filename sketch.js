var spaceCraft, iss;
var issimg,bg,sc1img,sc2img,sc3img,sc4img;
var hasDocked = false;




function preload(){
  issimg = loadImage("Images/iss.png")
  bg = loadImage("Images/spacebg.jpg");
  sc1img = loadImage("Images/spacecraft1.png");
  sc2img = loadImage("Images/spacecraft2.png");
  sc3img = loadImage("Images/spacecraft3.png");
  sc4img = loadImage("Images/spacecraft4.png");
}


function setup() {
  createCanvas(800,400);
  spaceCraft = createSprite(280, 240, 50, 50);
  spaceCraft.addImage(sc1img);
  spaceCraft.scale = 0.2;

  iss = createSprite(330,130);
  iss.addImage(issimg);
  iss.scale = 0.5;


}

function draw() {
  background(bg);
  spaceCraft.addImage(sc1img);  
  if(!hasDocked){
    spaceCraft.x = spaceCraft.x+random(-1,1);
    if(keyDown("UP_ARROW")){
      spaceCraft.y = spaceCraft.y-2;
    }

    if(keyDown("LEFT_ARROW")){
      spaceCraft.addImage(sc4img);
      spaceCraft.x = spaceCraft.x-1;
    }

    if(keyDown("DOWN_ARROW")){
      spaceCraft.addImage(sc2img);
      //spaceCraft.y = spaceCraft.y-2;
    }

    if(keyDown("RIGHT_ARROW")){
      spaceCraft.addImage(sc3img);
      spaceCraft.x = spaceCraft.x+1;
    }
  }
  if(spaceCraft.y<=(iss.y+70)&&spaceCraft.x<=(iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docked succesfull",200,300);
  }

  drawSprites();
}