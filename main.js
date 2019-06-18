const game = new Game();

function setup() {
	let canvas = createCanvas(WIDTH, HEIGHT);
	// angleMode(DEGREES);
	canvas.parent("sketch-div");

	game.setup();
}

function draw() {
	game.draw();
}
function keyPressed() {
	game.character1.keyPressed();
}
