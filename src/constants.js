const HEIGHT = 1000;
const WIDTH = 600;
let ufo;
let obstacleImg;
let gameOverImg;
let explosionImg;
let powerBoostImg;


function preload() {
  ufo = loadImage("assets/ufo_green.png");
  obstacleImg = loadImage("assets/steelstrip.png");
  gameOverImg = loadImage("assets/game_over.png");
  explosionImg = loadImage("assets/explosion.png");
  powerBoostImg = loadImage("assets/power.png")
}
