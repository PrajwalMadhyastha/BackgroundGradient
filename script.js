var body = document.querySelector("body");
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var button = document.querySelector("button");

//Update the baclground colors based on the user selection.
function colorGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
} 
//Update the background colour randonmly.
function randomBackground() {
	color1.value='#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
	color2.value='#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
	colorGradient();
}

button.addEventListener("click", randomBackground);

body.onload = randomBackground(); 
body.onload = colorGradient(); 

color1.addEventListener("input", colorGradient);

color2.addEventListener("input", colorGradient);