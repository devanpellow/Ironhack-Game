class Powerboost {
	constructor() {
		this.y = -50;
	}

	setup() {
		const rand = random(0, WIDTH - powerBoostImg.width / 2);
		// const rand = random(-40, WIDTH - 100);
		this.x = rand;
		// this.obstaclesImg = loadImage("assets/steelstrip.png");
	}

	draw() {
    this.y += 10;
  
	  image(powerBoostImg, this.x, this.y, powerBoostImg.width / 4, powerBoostImg.height/ 4);
		// this.powerBoostRect = {
		// 	left: this.x,
		// 	right: this.x + powerBoostImg.width,
		// 	top: this.y - powerBoostImg.height,
		// 	bottom: this.y
		// };
		// this.checkCollision();
	}

// 	checkCollision() {
// 		if (this.intersectRect(this.powerBoostRect, game.character1.characterRect)) {
// 			console.log(this.powerBoostRect, game.character1.characterRect);
//       // game.over();
//       console.log("Invincable!")
// 		}
// 	}
// /* Function to test for intersection of game objects */
// 	intersectRect(rectA, rectB) {
// 		return !(
// 			rectA.left > rectB.right ||
// 			rectA.right < rectB.left ||
// 			rectA.top > rectB.bottom ||
// 			rectA.bottom < rectB.top
// 		);
// 	}
}
