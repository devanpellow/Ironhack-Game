// let bgImg;
// let obstacleImg;
// let characterImg;

class Game {
	constructor() {
		this.background1 = new Background();
		this.character1 = new Character();
		this.obstaclesArr = [];
		this.ufoArr = [];
    this.bulletArr = [];
    this.powerBoostArr = [];
		this.score = 0;
	}
	setup() {
		this.background1.setup();
		this.character1.setup();
	}

	draw() {
		this.background1.draw();
		this.character1.draw();
		this.character1.keyIsDown();
		this.character1.edgeReached();

		textSize(32);
		text("Score: " + Math.floor(frameCount / 10 + this.score), 430, 990);
    fill(255, 255, 255);

    /* Power Boost / Invincible */
    if (frameCount % 100 === 0) {
      this.powerBoostArr.push(new Powerboost());
			this.powerBoostArr[this.powerBoostArr.length - 1].setup();
    } 
    this.powerBoostArr.forEach((powerBoost, i) => {
			powerBoost.draw();
			if (powerBoostImg.y > HEIGHT) {
				this.powerBoostArr.splice(i, 1);
      }
    });

    /* steel beam falling */
		if (frameCount % 80 === 0) {
			this.obstaclesArr.push(new Obstacles());
			this.obstaclesArr[this.obstaclesArr.length - 1].setup();
		}
		this.obstaclesArr.forEach((obstacle, i) => {
			obstacle.draw();
			if (obstacle.y > HEIGHT) {
				this.obstaclesArr.splice(i, 1);
			}
    });
    
    /* UFO falling */
		if (frameCount % 110 === 0) {
			this.ufoArr.push(new Ufo());
			this.ufoArr[this.ufoArr.length - 1].setup();
    } 
     
		this.ufoArr.forEach((ufo, i) => {
			ufo.draw();
			if (ufo.y > HEIGHT) {
				this.ufoArr.splice(i, 1);
			}
    });
  

		this.bulletArr.forEach((bullet, i) => {
			bullet.draw();
			if (bullet.y < 0) {
				bullet.hit = true;
			}
			if (bullet.hit) {
				this.bulletArr.splice(i, 1);
			}
		});
	}

	over() {
    console.log("GAME OVER");
    image(gameOverImg, WIDTH / 4 + 20, HEIGHT / 2 - 100, gameOverImg.width / 3, gameOverImg.height / 3)
		// textSize(50);
		// text("Game Over", WIDTH / 2 - 125, HEIGHT / 2);
		// fill(255, 255, 255);
		noLoop();
	}
}
