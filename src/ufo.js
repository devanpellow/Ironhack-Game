class Ufo {
	constructor() {
		this.y = -20;
	}

	setup() {
		const rand = random(0, WIDTH - ufo.width / 35);
		// const rand = random(-40, WIDTH - 100);
		this.x = rand;
	}

	draw() {
	// 	if (game.score % 500 0)  {
	// 		this.y += 1			
	// }
		this.y += 3;
		image(ufo, this.x, this.y, ufo.height / 60, ufo.width / 70);
		// rect(this.x + 20, this.y, ufo.width / 40 - 20, ufo.height / 30);

		this.ufoRect = {
			left: this.x - 10,
			right: this.x + ufo.width / 80,
			top: this.y,
			bottom: this.y + ufo.height / 60
		};
		this.checkCollision();
	}

	checkCollision() {
		if (this.intersectRect(this.ufoRect, game.character1.characterRect)) {
			console.log(this.ufoRect, game.character1.characterRect);
			game.over();
		}
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
