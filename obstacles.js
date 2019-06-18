class Obstacles {
	constructor() {
    this.y = 0;
	}

	setup() {
    const rand = random(0, WIDTH);
    // const rand = random(-40, WIDTH - 100);
		this.x = rand;
		this.obstaclesImg = loadImage("assets/steelstrip.png");
	}

	draw() {
		this.y += 8;
    image(this.obstaclesImg, this.x, this.y);
    
    this.checkCollision();

  }
  
  checkCollision(){
    const steelRect = {
      left: this.x,
      right: this.x + this.obstaclesImg.width,
      top: this.y - this.obstaclesImg.height,
      bottom: this.y
    }

    if (this.intersectRect(steelRect, game.character1.characterRect)) {
        console.log(steelRect, game.character1.characterRect)
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
