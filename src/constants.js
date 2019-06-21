const HEIGHT = 650;
const WIDTH = 400;
let enterImg;
let ufo;
let obstacleImg;
let gameOverImg;
let explosionImg;
let decorationImg;
let heartImg;
let practiceImg;
let oneImg
let twoImg
let threeImg
let fightImg


function preload() {
  enterImg = loadImage("assets/images/press_enter.png")
	ufo = loadImage("assets/images/ufo_green.png");
	obstacleImg = loadImage("assets/images/steelstrip.png");
	gameOverImg = loadImage("assets/images/game_over.png");
	explosionImg = loadImage("assets/images/explosion.png");
	decorationImg = loadImage("assets/images/power.png");
	heartImg = loadImage("assets/images/heart.png");
  practiceImg = loadImage("assets/images/practice_text.png");
  oneImg = loadImage("assets/images/1.png");
  twoImg = loadImage("assets/images/2.png");
  threeImg = loadImage("assets/images/3.png");
  fightImg = loadImage("assets/images/fight.png");
}
