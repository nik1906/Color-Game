var numSquares = 6;
var colors = genrateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('ColorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
	
for(var i = 0 ; i < modeButtons.length ; i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected")
		modeButtons[1].classList.remove("selected")
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	
	});
}

function reset(){
	colors = genrateRandomColors(numSquares);
	
	//pick a new random color from array
	pickedColor = pickColor();

	//change colorDisplay to match  picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	
	//change our message to empty as we click to Play Again button.
	messageDisplay.textContent = "";
	// add intial color to squares
	for(var i = 0 ; i < squares.length ; i++){
		if(colors[i]){
			squares[i].style.display = "block";	
			squares[i].style.background = colors[i];	
		}else{
			squares[i].style.display = "none";
		}
		
	}

	h1.style.background = "steelblue"; 
}

resetButton.addEventListener("click", function(){
	reset();

});	

colorDisplay.textContent = pickedColor;

for(var i = 0 ; i < squares.length ; i++){
	// add intial color to squares
	squares[i].style.background = colors[i];

	// add click Listeners to square 
	 squares[i].addEventListener("click",function () {
	// Grab color of picked square
		 var clickedColor = this.style.background;
	// compare color to pickedColor	
		console.log(clickedColor,pickedColor);
	 	if(clickedColor === pickedColor){
			resetButton.textContent = "Play again ?";
	 		messageDisplay.textContent = "Correct ! " ;
	 		changeColors(clickedColor);
	 		h1.style.background = clickedColor;
	 	}	else{
	 		this.style.background = "#232323"; 
	 		messageDisplay.textContent = " Try again !"; 

	 	}

	 });
}
	
// when you choose the right color option  all the squares matches to the right color. 
function changeColors(color){
	//loop through all squares
	for(var i = 0 ; i < squares.length ; i++){
	// cahnge each color to selected color 
		squares[i].style.background = color;

	};
}

function pickColor() {
	//pick a random number
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function genrateRandomColors(num){
	//make an array
	var arr = []
	// repeat num times
	for(var i = 0 ; i < num ; i++){
		// pick set of random color and push to arr
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//choose Red from range(0,256)
	var r = Math.floor(Math.random() * 256);
	
	//choose GREEN from range(0,256)
	var g = Math.floor(Math.random() * 256);

	//choose BlUE from range(0,256)
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}