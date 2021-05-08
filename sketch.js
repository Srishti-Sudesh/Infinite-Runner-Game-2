var bg, bg2;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var c1, c2, c3;
var cycles;

function preload(){
  bg = loadImage("bg.png");
  bg2 = loadImage("bg2.jpg");
  bg3 = loadImage("bg3.jpg");
  ground = loadImage("ground.jpg")
  c1Img = loadImage("cycle1.png");
  c2Img = loadImage("cycle2.png");
  c3Img = loadImage("cycle3.png");
  col = color(random(255),random(255),random(255))

}

function setup(){
    createCanvas(1200, 600);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
  
  
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState===2){
    game.end();
  }
  

}