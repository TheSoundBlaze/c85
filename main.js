canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car_height = 100;
car_width = 75;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

position_x = 5;
position_y = 225;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	car_imgTag = new Image();
	car_imgTag.onload = uploadgreencar;
	car_imgTag.src = greencar_image;
}

function uploadBackground() {

	ctx.drawImage(background_image, 0, 0, cnavas.width, canvas.height);
}

function uploadgreencar() {

	ctx.drawImage(greencar_image, position_x, position_y, car_width, car_height);

}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	if (position_y >= 10) {
		position_y = position_y - 10;
		console.log("car_up");
		uploadBackground();
		uploadgreencar();
	}
}

function down() {
	if (position_y >= 500) {
		position_y = position_y + 10;
		console.log("car_down");
		uploadBackground();
		uploadgreencar();
	}
}

function left() {
	if (position_y <= 0) {
		position_x = position_x - 10;
		console.log("car_left");
		uploadBackground();
		uploadgreencar();
	}
}

function right() {
	if (position_y <= 700) {
		position_x = position_x + 10;
		console.log("car_right");
		uploadBackground();
		uploadgreencar();
	}
}
