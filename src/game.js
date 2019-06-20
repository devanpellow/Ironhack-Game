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
		this.decorationArr = [];
		this.livesCount = 0;
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

		textSize(20);
		text("Score: " + Math.floor(frameCount / 10 + this.score), 280, 636);
		fill(255, 255, 255);


		/// Start Delay
		if(frameCount > 0 && frameCount < 120){
		image(practiceImg, 85, HEIGHT / 3, practiceImg.width	/ 5	, practiceImg.height / 2 )
		}
		if(frameCount > 180 && frameCount < 240){
			image(practiceImg, 85, HEIGHT / 3, practiceImg.width	/ 5	, practiceImg.height / 2 )
			}
	
		if(frameCount > 420){
		/* Decoration */
			if (frameCount % 95 === 0) {
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
			// console.log(this.ufoArr)
			this.ufoArr.forEach((ufo, i) => {
				ufo.draw();
				if (ufo.y > HEIGHT && ufo.y < HEIGHT + 40 && this.livesCount <= 1) {
					this.ufoArr.splice(i, 1);
					this.livesCount++;
					ufoPassesSound.setVolume(0.5);
					ufoPassesSound.play();
				} else if (ufo.y > HEIGHT && ufo.y < HEIGHT + 40){
					this.ufoArr.splice(i, 1);
					this.livesCount++;
				}
				console.log(this.livesCount);
			});
	}
		/*Lives and Game over */
		// if (this.livesCount === 0) {
    //   image(heartImg, 290, 955, heartImg.width / 16, heartImg.height/ 16 )
    //   image(heartImg, 290 + heartImg.width / 16 , 955, heartImg.width / 16, heartImg.height/ 16 )
    //   image(heartImg, 290 + (heartImg.width / 16)*2, 955, heartImg.width / 16, heartImg.height/ 16 )
		// } else if (this.livesCount === 1) {
    //   image(heartImg, 290 + heartImg.width / 16 , 955, heartImg.width / 16, heartImg.height/ 16 )
    //   image(heartImg, 290 + (heartImg.width / 16)*2, 955, heartImg.width / 16, heartImg.height/ 16 )
    // } else if (this.livesCount === 2) {
    //   image(heartImg, 290 + (heartImg.width / 16)*2, 955, heartImg.width / 16, heartImg.height/ 16 )
		// } else if (this.livesCount === 3) {
		// 	this.over();
		// }

		// Aliens count
		if (this.livesCount === 0) {
			image(ufo, 140, 610, ufo.width / 90, ufo.height/ 90 )
			
			image(ufo, 140 + ufo.width / 90 , 610, ufo.width / 90, ufo.height/ 90 )
			
			image(ufo, 140 + (ufo.width / 90)*2, 610, ufo.width / 90, ufo.height/ 90 )
			
		} else if (this.livesCount === 1) {

			image(ufo, 140 + ufo.width / 90 , 610, ufo.width / 90, ufo.height/ 90 )
			
			image(ufo, 140 + (ufo.width / 90)*2, 610, ufo.width / 90, ufo.height/ 90 )
			
    } else if (this.livesCount === 2) {

			image(ufo, 140 + (ufo.width / 90)*2, 610, ufo.width / 90, ufo.height/ 90 )
			
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
				thudSound.setVolume(0.6);
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
		// textSize(50);
		// text("Game Over", WIDTH / 2 - 125, HEIGHT / 2);
		// fill(255, 255, 255);
		gameOverSound.setVolume(0.5);
		gameOverSound.play();
		noLoop();
	}

}
