class Bullet {
	constructor() {
		this.y = game.character1.y;
		this.x = game.character1.x + 128 / 6 - 10;
		this.hit = false;
	}

	setup() {
		this.bulletImg = loadImage("assets/images/bullet.png");
	}

	draw() {
		image(
			this.bulletImg,
			this.x,
			this.y,
			this.bulletImg.width * 1.5,
			this.bulletImg.height * 1.5
		);
		this.y -= 4.5;
		this.checkCollision();
	}

	checkCollision() {
		this.bulletRect = {
			left: this.x,
			right: this.x + this.bulletImg.width * 2,
			top: this.y,
			bottom: this.y + this.bulletImg.height * 2
		};

		/* bullet intersect with UFO */
		game.ufoArr.forEach((ufo, i) => {
			if (this.intersectRect(ufo.ufoRect, this.bulletRect)) {
				game.ufoArr.splice(i, 1);
				console.log("hit");
				this.hit = true;
				game.score += 100;
				image(
					explosionImg,
					ufo.x - 15,
					ufo.y - 30,
					explosionImg.height / 20,
					explosionImg.width / 20
				);
				explosionSound.setVolume(1.5);
				explosionSound.play();
			}
		});

		/* Bullet intersect with obstacle */
		game.obstaclesArr.forEach((obstacle, i) => {
			if (this.intersectRect(obstacle.steelRect, this.bulletRect)) {
				this.hit = true;
			}
		});
	}
	/* Function to test for intersection of game objects */
	intersectRect(rectA, rectB) {
		return !(
			rectA.left > rectB.right ||
			rectA.right < rectB.left ||
			rectA.top > rectB.bottom ||
			rectA.bottom < rectB.top
		);
	}
}
