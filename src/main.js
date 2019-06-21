const game = new Game();
let bulletSound;
let explosionSound;
let gameOverSound;
let thudSound;
let ufoPassesSound;


function setup() {
	let canvas = createCanvas(WIDTH, HEIGHT);
	canvas.parent("sketch-div");
	game.setup();
	bulletSound = loadSound("assets/sounds/bullet_shot.mp3");
	explosionSound = loadSound("assets/sounds/explosion.mp3");
	gameOverSound = loadSound("assets/sounds/game_over_descend.mp3");
	thudSound = loadSound("assets/sounds/thud.mp3");
	ufoPassesSound = loadSound("assets/sounds/ufo_pass.mp3")
}	



function draw() {

	if (game.startScreen === 0) {
		clear();
		image(enterImg, 50, HEIGHT / 3, enterImg.width/ 3, enterImg.height / 1.2 )
	}
	if (game.startScreen === 1){
		clear();
		game.draw();
	}
	// game.draw();
}

function keyReleased() {
	if (keyCode === 13){
		game.startScreen = 1;
	}
}

function keyPressed() {
	game.character1.keyPressed();
}

