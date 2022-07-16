var player, playerImg;
var triangle, triangleImg;
var bullet, bulletImg;


function preload(){
    playerImg = loadImage("player.png");
    bulletImg = loadImage("bullet.png");
    triangleImg = loadImage("triangle.png");
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    player = createSprite(200,200,50,50)
    player.addImage(playerImg)

 
}

function draw() {
 
}