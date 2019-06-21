// let bgImg;
// let obstacleImg;
// let characterImg;

class Game {
	constructor() {
		this.background1 = new Background();
		this.character1 = new Character();
		this.startScreen = 0;
		this.obstaclesArr = [];
		this.ufoArr = [];
		this.bulletArr = [];
		this.decorationArr = [];
		this.livesCount = 0;
		this.score = 0;
		this.frameCount = 0;
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

		/* Print Score On Screen */
		textSize(20);
		text("Score: " + Math.floor(frameCount / 10 + this.score), 250, 642);
		fill(255, 255, 255);

		/* Start Game Delay */
		if (this.startScreen) this.frameCount++;

		if (this.frameCount > 0 && this.frameCount <= 180) {
			image(
				practiceImg,
				85,
				HEIGHT / 3,
				practiceImg.width / 5,
				practiceImg.height / 2
			);
		}
		if (this.frameCount > 180 && this.frameCount <= 240) {
			image(threeImg, 155, HEIGHT / 3);
		}

		if (this.frameCount > 240 && this.frameCount <= 300) {
			image(twoImg, 155, HEIGHT / 3);
		}
		if (this.frameCount > 300 && this.frameCount <= 360) {
			image(
				oneImg,
				175,
				HEIGHT / 3 + 3,
				oneImg.width / 1.7,
				oneImg.height / 1.6
			);
		}
		if (this.frameCount > 360 && this.frameCount <= 480) {
			image(
				fightImg,
				95,
				HEIGHT / 3,
				fightImg.width / 2,
				fightImg.height / 1.2
			);
		}

		/* Begin game after 480 frames */
		if (this.frameCount > 480) {
			/* Decoration */
			if (this.frameCount % 95 === 0) {
				this.decorationArr.push(new Decoration());
				this.decorationArr[this.decorationArr.length - 1].setup();
			}
			this.decorationArr.forEach((decoration, i) => {
				decoration.draw();
				if (decorationImg.y > HEIGHT) {
					this.decorationArr.splice(i, 1);
				}
			});

			/* steel beam falling */
			if (this.frameCount % 80 === 0) {
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
			if (this.frameCount % 110 === 0) {
				this.ufoArr.push(new Ufo());
				this.ufoArr[this.ufoArr.length - 1].setup();
			}

			this.ufoArr.forEach((ufo, i) => {
				ufo.draw();
				if (
					ufo.y > HEIGHT &&
					ufo.y < HEIGHT + 40 &&
					this.livesCount <= 1
				) {
					this.ufoArr.splice(i, 1);
					this.livesCount++;
					ufoPassesSound.setVolume(0.5);
					ufoPassesSound.play();
				} else if (ufo.y > HEIGHT && ufo.y < HEIGHT + 40) {
					this.ufoArr.splice(i, 1);
					this.livesCount++;
				}
				console.log(this.livesCount);
			});
		}

		// Aliens count
		if (this.livesCount === 0) {
			image(ufo, 1, 615, ufo.width / 90, ufo.height / 90);

			image(
				ufo,
				1 + ufo.width / 90,
				615,
				ufo.width / 90,
				ufo.height / 90
			);

			image(
				ufo,
				1 + (ufo.width / 90) * 2,
				615,
				ufo.width / 90,
				ufo.height / 90
			);
		} else if (this.livesCount === 1) {
			image(ufo, 1, 615, ufo.width / 90, ufo.height / 90);

			image(
				ufo,
				1 + ufo.width / 90,
				615,
				ufo.width / 90,
				ufo.height / 90
			);
		} else if (this.livesCount === 2) {
			image(ufo, 1, 615, ufo.width / 90, ufo.height / 90);
		} else if (this.livesCount === 3) {
			this.over();
		}

		/* Remove bullets when impact with beam*/
		this.bulletArr.forEach((bullet, i) => {
			bullet.draw();
			if (bullet.y < 0) {
				bullet.hit = true;
			}
			if (bullet.hit) {
				this.bulletArr.splice(i, 1);
				thudSound.setVolume(5);
				thudSound.play();
			}
		});
	}

	/* Game over function */
	over() {
		console.log("GAME OVER");
		image(
			gameOverImg,
			WIDTH / 4 + 5,
			HEIGHT / 2 - 100,
			gameOverImg.width / 4,
			gameOverImg.height / 4
		);
		gameOverSound.setVolume(0.6);
		gameOverSound.play();
		noLoop();
		setInterval(() => location.reload(), 2000);
	}
}
