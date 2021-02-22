var background, backgroundImg;




function preload() {
    //load the images here
   backgroundImg = loadImage("garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background = createSprite(300,100);
  background.velocityY = 1;
  background.addImage(backgroundImg);
  background.scale= 0.4;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
