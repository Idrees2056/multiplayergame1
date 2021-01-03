var Canvas, backgroundImage;
var gameState=0;
var playerCount, database;
var form, game, player

function setup() {
  createCanvas(400,400)
  database=firebase.database();
  game=new Game();   // game object is calling Game class
  game.getState();   // game object is calling the getState function from game class
  game.start();
}

function draw(){

}