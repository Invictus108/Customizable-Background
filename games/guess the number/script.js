//initalize varables
number = Math.floor(((Math.random() * 1000000))) + 1;
console.log(number);
let count = 0;
let best;


//get the best score and display it
function getBest() {
    chrome.storage.local.get(["guess_number"], (result) => {
        best = result["guess_number"];
        if(best != undefined){
            document.getElementById("record").innerHTML = "Current Record: " + best;
        }
        
    });
};

getBest();


//update the best if currnet game set record or if record dosent exist yer
function upadateBest(best, count) {
    if(best > count || best == undefined) {
        chrome.storage.local.set( { "guess_number" : count }, function() {
            alert("New High Score!")
        })
    }
}


//alert the user to the rules when they press the button
document.getElementById("rules").addEventListener("click", function() {
    alert("This is the number guessing game!\nGuess a number between 1 and 1,000,000\nHit submit to submit the guess\nYou will be told to go higher or lower\nTry to get the number in the least guesses\nGood luck!");
})

//call submit function when submit button is pressed
document.getElementById("submit").addEventListener("click", submit);

let second = undefined;
let third = undefined;

//recieve input from user and check if they got it right, were to high, or were too low
function submit(){

    //get input
    x = document.getElementById("input").value;

    //check if valid
    if(x > 0 && x <= 1000000){

        //display last guesses to user
        document.getElementById("guess").innerHTML = "Last Guess: " + x;
        if(third != undefined){
            document.getElementById("guess3").innerHTML = "3rd to Last Guess: " + third;
        }
        third = second;
        if(second != undefined){
            document.getElementById("guess2").innerHTML = "2nd to Last Guess: " + second;
        }
        second = x;
        
        
        //check if too high, too low, or correct
        if(x > number){
            document.getElementById("instructions").innerHTML = "Go lower";
            document.getElementById('input').value = '';
            count += 1;
        } else if(x < number){
            document.getElementById("instructions").innerHTML = "Go Higher";
            document.getElementById('input').value = '';
            count += 1;
        } else {
            document.getElementById("instructions").innerHTML = "Correct! It only took you " + count + " guesses!";
            document.getElementById("guess").innerHTML = "New Game Starting in 5 Seconds"
            document.getElementById("guess2").innerHTML = ""
            document.getElementById("guess3").innerHTML = ""
            upadateBest(best, count);
            setTimeout(restart, 5000);
            
        }
    } else {
        document.getElementById("instructions").innerHTML = "Invalid Number. please Input a Number from 1 to 1000000";
        document.getElementById('input').value = '';
    }
    document.getElementById("curGuess").innerHTML = "Current Number of Guesses: " + count;
}

//restart game
function restart(){
    document.getElementById("instructions").innerHTML = "Enter a Number";
    number = Math.round(((Math.random() * 1000000)));
    document.getElementById("guess").innerHTML = "Last Guess:"
    getBest();
    count = 0;
    document.getElementById("curGuess").innerHTML = "";
    second = undefined;
    third = undefined;
}


