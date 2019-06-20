class Background {
	constructor() {
		// this.x = WIDTH;
		this.y1 = 0;
		this.y = -HEIGHT;
	}

	setup() {
		this.bgImg = loadImage("assets/images/star_bg.jpg");
	}

	draw() {
		image(this.bgImg, 0, this.y, WIDTH, HEIGHT);

		image(this.bgImg, 0, this.y1, WIDTH, HEIGHT);

		if (this.y >= HEIGHT) {
			this.y = -HEIGHT;
		}
		if (this.y1 >= HEIGHT) {
			this.y1 = -HEIGHT;
		}

		this.y += 4.5;
		this.y1 += 4.5;

		
	}
}
