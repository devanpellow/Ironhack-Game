class Ufo {
	constructor() {
		this.y = -40;
	}

	setup() {
		const rand = random(0, WIDTH);
		// const rand = random(-40, WIDTH - 100);
		this.x = rand;
		this.ufoImg = loadImage("assets/ufo_green.png");
	}

	draw() {
		this.y += 5;
		image(
			this.ufoImg,
			this.x,
			this.y,
			this.ufoImg.height / 30,
			this.ufoImg.width / 35
		);

		this.checkCollision();
	}

	checkCollision() {
		const ufoRect = {
			left: this.x,
			right: this.x + 100,
			top: this.y - 40,
			bottom: this.y
		};

		if (this.intersectRect(ufoRect, game.character1.characterRect)) {
			console.log(ufoRect, game.character1.characterRect);
			game.over();
		}
	}

	intersectRect(rectA, rectB) {
		return !(
			rectA.left > rectB.right ||
			rectA.right < rectB.left ||
			rectA.top > rectB.bottom ||
			rectA.bottom < rectB.top
		);
	}
}
