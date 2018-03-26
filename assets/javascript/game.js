// JS file for crystal collector game
// Objective: use jquery

// (Option A) Create variable to generate 'get to number' (static)
//var randomNumber = 53;

console.log(randomNumber);

// (Option B) Create variable to generate 'get to number' (random number under 100)
var randomNumber = (Math.floor(Math.random() * 100))

// Display var randomNumber in the #get-this-score ID
$("#get-this-score").text(randomNumber);


// Varible used for adding to total score
var counter = 0;

// When you click on gem stone, this function will run
$( ".gemStone" ).click(function myFunc() {

// Getting the value from the ID
var point = ($(this).attr('value'));

// Turning a string into an integer
point = parseInt(point);

// x = x + y
// point = point + counter
// allows adding additional points to total score
counter += point

// Push point to display in the #your-score ID
$("#your-score").text(counter);
console.log(counter);

// Variables for Wins and Losses
var wins = 1;
var losses = 1;
var reset = 0;

// If statement for Wins or Losses
if (counter === randomNumber) {
    $("#scoreWins").text("Wins: " + wins++);
    $("#your-score").text(reset);
    $("#get-this-score").text(randomNumber);
    // againFunc();
    // alert("You Win!"); 
    }

else if (counter >= randomNumber) {
    $("#scoreLosses").text("Losses: " + losses++); 
    $("#your-score").text(reset);
    $("#get-this-score").text(randomNumber);
    // againFunc();
    // alert("You Lose!!");
    }
})
// Reset game  