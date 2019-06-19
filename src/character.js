class Character {
	constructor() {
		this.x = WIDTH / 2;
		this.y = 700;
		this.speed = 8;
		this.angle = 0.0;
	}

	setup() {
		this.characterImg = loadImage("assets/rocket.png");
	}

	draw() {
		// push();
		// translate(this.x, this.y);
		// angleMode(DEGREES);
		// rotate(this.angle);
		image(
			this.characterImg,
			this.x,
			this.y,
			this.characterImg.width / 3,
			this.characterImg.height / 3
			);
			// rect(this.x, this.y, this.characterImg.width / 3, this.characterImg.height / 3 );

		this.characterRect = {
			left: this.x,
			right: this.x + this.characterImg.width / 4,
			top: this.y,
			bottom: this.y + this.characterImg.height / 4
		};
		if (keyIsPressed === 32) {
      // console.log(game.bulletArr);
		}
    // pop();
	}

	keyIsDown() {
		if (keyIsDown(LEFT_ARROW)) {
			push();
			this.x -= this.speed;
			this.angle = -20;
      pop();
		}
		if (keyIsDown(RIGHT_ARROW)) {
      push();
      this.x += this.speed;
			this.angle = 20;
			pop();
		}
		if (keyIsDown(UP_ARROW)) {
			this.y -= this.speed;
		}
		if (keyIsDown(DOWN_ARROW)) {
			this.y += this.speed;
		}
	}

	edgeReached() {
		if (this.x > WIDTH) {
			this.x = 0;
		} else if (this.x < 0) {
			this.x = WIDTH;
		} else if (this.y < 0) {
			this.y = HEIGHT;
		} else if (this.y > HEIGHT) {
			this.y = 0;
		}
	}

	keyPressed() {
		if (keyCode === 32) {
			game.bulletArr.push(new Bullet());
			game.bulletArr[game.bulletArr.length - 1].setup();
		}
	}
}
