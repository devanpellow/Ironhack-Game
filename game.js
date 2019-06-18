// let bgImg;
// let obstacleImg;
// let characterImg;

class Game {
	constructor() {
		this.background1 = new Background();
		this.character1 = new Character();
		// this.obstacles1 = new Obstacles();
    this.obstaclesArr = [];
    this.ufoArr = [];
    this.bulletArr = [];
	}
	setup() {
		this.background1.setup();
		this.character1.setup();
		// this.obstacles1.setup();
	}

	draw() {
    
		this.background1.draw();
		this.character1.draw();
    this.character1.keyIsDown();
		this.character1.edgeReached();

		if (frameCount % 80 === 0) {
			this.obstaclesArr.push(new Obstacles());
			this.obstaclesArr[this.obstaclesArr.length - 1].setup();
		}
      this.obstaclesArr.forEach(obstacle => {
        obstacle.draw();
      });
    
    if (frameCount % 110 === 0) {
			this.ufoArr.push(new Ufo());
      this.ufoArr[this.ufoArr.length - 1].setup();
		}
      this.ufoArr.forEach(ufo => {
        ufo.draw();
      });
    
    this.bulletArr.forEach(bullet => {
      bullet.draw();
  });

  }

  over() {
    console.log("GAME OVER");
    noLoop();
  }


}
