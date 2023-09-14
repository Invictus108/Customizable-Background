
document.getElementById("rules").addEventListener("click", function() {
    alert("This is the Matchstick Game, a two player game\nTo play first pick a intial amount of matches and a maximum number of matches that can be drawn per round\nNote that the maximum number of matches per round must be less than half the total matches\nThen the players will take turns drawing 1 to the maxium per draw number of matches\nWhoever draws the last match wins\nGood luck!");
})


//establish intial parameters of game
document.getElementById("submitbounds").addEventListener("click", function() {

    //get values
    totalMatches = document.getElementById("startingMatches").value;
    maxDecrease = document.getElementById("removeMatches").value;

    //check if valid and start game if valid
    if(totalMatches > 0 && (maxDecrease > 0 && maxDecrease < totalMatches/2)){
        document.getElementById("startingInfo").remove();
        document.getElementById("numMatches").innerHTML = totalMatches;
        document.getElementById("player").innerHTML = "Player One Please Input A Number of Matches to Remove from 1 to " + maxDecrease;
        drawMatches(totalMatches);
    } else {
        alert("Please only input positive numbers. \n Max matches to be removed per turn must be less than half of the starting matches.")
    }
})

//draw the matches
var sticks = [];
function drawMatches(x){  
    sticks.length = 0; 
    for(let i = 0; i < x; i++){
        sticks.push("|  ")
    }
    document.getElementById("visual1").innerHTML = sticks.join('');
}

var player = 1;
//update game when submit button is clicked
document.getElementById("submit").addEventListener("click", function() {

    //get value and chack if valid
    var value = document.getElementById("input").value;
    if(value >= 1 && value <= maxDecrease && totalMatches - value >=0){

        //set new number of matches
        document.getElementById('input').value = '';
        totalMatches -= value;
        document.getElementById("numMatches").innerHTML = totalMatches;

        //check if somebody won
        if(totalMatches == 0){
            drawMatches(totalMatches);
            if(player == 1){
                document.getElementById("player").innerHTML = "Congratulation Player One! You Won!";
                
            } else {
                document.getElementById("player").innerHTML = "Congratulations Player Two! You Won!";
            }

        } else {
            //else change trun to next player
            if(player == 1){
                document.getElementById("player").innerHTML = "Player Two Please Input A Number of Matches to Remove from 1 to " + maxDecrease;
                player = 2;
            } else {
                document.getElementById("player").innerHTML = "Player One Please Input A Number of Matches to Remove from 1 to " + maxDecrease;
                player = 1;
            }
            drawMatches(totalMatches);

                
        }
} else {
    document.getElementById('input').value = '';
    alert("Invalid Input \n Please Only Use Values From 1 to " + maxDecrease + ".\n Or Make Sure You Are Not Going Below 0.");
} 

})

























