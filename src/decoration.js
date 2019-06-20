class Decoration {
	constructor() {
		this.y = -50;
	}

	setup() {
		const rand = random(0, WIDTH - decorationImg.width / 2);
		this.x = rand;
	}

	draw() {
		this.y += 5;
		image(
			decorationImg,
			this.x,
			this.y,
			decorationImg.width / 7,
			decorationImg.height / 7
		);
	}
}
