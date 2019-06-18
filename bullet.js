class Bullet {
	constructor() {
		this.y = game.character1.y;
		this.x = game.character1.x + 128 / 6 - 2;
	}

	setup() {
		this.bulletImg = loadImage("assets/bullet.png");
	}

	draw() {
		image(
			this.bulletImg,
			this.x,
			this.y,
			this.bulletImg.width * 2,
			this.bulletImg.height * 2
		);
    this.y -= 5;
    
      this.bulletRect = {
        left: game.character1.x + 128 / 6 - 2,
        right: (game.character1.x + 128 / 6 - 2) + (this.bulletImg.width * 2),
        top: (game.character1.y) - (this.bulletImg.height * 2),
        bottom: game.character1.y
      };

      // this.checkCollision();
	}

	// checkCollision(){

	// if (
	//       this.intersectRect(steelRect, game.obstaclesArr.characterRect)
	//     ) {
	//       console.log(steelRect, game.character1.characterRect)
	//       // game.over();
	//     }
	//   }

	// intersectRect(rectA, rectB) {
	//   return !(
	//     rectA.left > rectB.right ||
	//     rectA.right < rectB.left ||
	//     rectA.top > rectB.bottom ||
	//     rectA.bottom < rectB.top
	//   );
	// }
}
