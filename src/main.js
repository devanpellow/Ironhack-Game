const game = new Game();
let bulletSound;
let explosionSound;
let gameOverSound;
let thudSound;
let ufoPassesSound;
// let rocketSound;


function setup() {
	let canvas = createCanvas(WIDTH, HEIGHT);
	// angleMode(DEGREES);
	canvas.parent("sketch-div");
	game.setup();
	bulletSound = loadSound("assets/sounds/bullet_shot.mp3");
	explosionSound = loadSound("assets/sounds/explosion.mp3");
	gameOverSound = loadSound("assets/sounds/game_over_descend.mp3");
	thudSound = loadSound("assets/sounds/thud.mp3");
	ufoPassesSound = loadSound("assets/sounds/ufo_pass.mp3")
	// // rocketSound = loadSound("assets/sounds/rocket_move.mp3")
}

function draw() {
	game.draw();
}
function keyPressed() {
	game.character1.keyPressed();
}
