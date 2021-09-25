var canvas;
var backgroundImage, car1_img, car2_img, track,gc,fuel,o1,o2;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];
var cGroup,fuels,obstacleGroup,


function preload(){
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  track = loadImage("./assets/track.jpg");
  gc=loadImage("./assets/goldCoin.png");
  fuelimg=loadImage("./assets/fuel.png");
  o1=loadImage("./assets/obstacle1.png");
  o2=loadImage("./assets/obstacle2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
