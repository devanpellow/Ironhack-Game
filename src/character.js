class Character {
	constructor() {
		this.x = WIDTH / 2;
		this.y = HEIGHT * .75;
		this.speed = 5;
		this.angle = 0.0;
	}

	setup() {
		this.characterImg = loadImage("assets/images/rocket.png");
	
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
			this.characterImg.width / 5,
			this.characterImg.height / 5
		);
		// rect(this.x, this.y, this.characterImg.width / 3, this.characterImg.height / 3 );

		this.characterRect = {
			left: this.x,
			right: this.x + this.characterImg.width / 7,
			top: this.y,
			bottom: this.y + this.characterImg.height / 7
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
			// rocketSound.setVolume(0.1)
			// rocketSound.play()
			// rocketSound.stop(0.2)
		}
		if (keyIsDown(RIGHT_ARROW)) {
			push();
			this.x += this.speed;
			// rocketSound.setVolume(0.1)
			// rocketSound.play()
			// rocketSound.stop(0.2)
		}
		if (keyIsDown(UP_ARROW)) {
			this.y -= this.speed;
			// rocketSound.setVolume(0.1)
			// rocketSound.play()
			// rocketSound.stop(0.2)
		}
		if (keyIsDown(DOWN_ARROW)) {
			this.y += this.speed;
			// rocketSound.setVolume(0.1)
			// rocketSound.play()
			// rocketSound.stop(0.2)
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
			bulletSound.setVolume(0.2);
			bulletSound.play();
			
		}
	}
}
