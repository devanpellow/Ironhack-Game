class Obstacles {
	constructor() {
		this.y = 0;
	}

	setup() {
		const rand = random(0, WIDTH - obstacleImg.width);
		this.x = rand;
	}

	draw() {
    this.y += 5.5;
		image(obstacleImg, this.x, this.y, obstacleImg.width / 1.5, obstacleImg.height);

		this.steelRect = {
			left: this.x,
			right: this.x + obstacleImg.width / 1.5,
			top: this.y - obstacleImg.height,
			bottom: this.y
		};
		this.checkCollision();
	}

	checkCollision() {
		if (this.intersectRect(this.steelRect, game.character1.characterRect)) {
			console.log(this.steelRect, game.character1.characterRect);
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
