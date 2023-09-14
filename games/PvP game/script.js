//intialize variables
const canvas = document.getElementById("battlefield")
const ctx = canvas.getContext("2d")
const ch = canvas.height
const cw = canvas.width

var up
var down
var right
var left
var w
var a
var s
var d

//create red ball
let red = {
    x: cw-100,
    y: 100,
    radius: 10,
    dx: 10,
    dy: 10
}

//create blue
const blue = {
    x: 100,
    y: 100,
    radius: 10,
    dx: 10,
    dy: 10
}

//add event listeners 
document.addEventListener('keydown', keyDownBlue)
document.addEventListener('keyup', keyDownBlue)
document.addEventListener('keydown', keyDownRed)
document.addEventListener('keyup', keyDownRed)
document.addEventListener('keydown', keyDown)
document.addEventListener('keyup', keyup)

//booleans for allowing holding down buttons
function keyDown(e){
    if (e.key == 'ArrowUp') {
        up = true
    }
    if (e.key == 'ArrowDown') {
        down = true
    }
    if (e.key == 'ArrowRight') {
        right = true
    }
    if (e.key == 'ArrowLeft') {
        left = true
    }
    if (e.key == 'w') {
        w = true
        }
    if (e.key == 'a') {
        a = true
    }
    if (e.key == 's') {
        s = true
    }
    if (e.key == 'd') {
        d = true
    }
}

//false if key is let go of
function keyup(e){
    if (e.key == 'ArrowUp') {
        up = false
    }
    if (e.key == 'ArrowDown') {
        down = false
    }
    if (e.key == 'ArrowRight') {
        right = false
    }
    if (e.key == 'ArrowLeft') {
        left = false
    }
    if (e.key == 'w') {
        w = false
        }
    if (e.key == 'a') {
        a = false
    }
    if (e.key == 's') {
        s = false
    }
    if (e.key == 'd') {
        d = false
    }
}

//update canvas
function update(){
    ctx.clearRect(0, 0, cw, ch)
    draw()
    
}

//movement for red
function keyDownRed() {
    
    if (up) {
        if(red.y > 0){
            red.y -= red.dy
            update()
        }
    }
    if (down) {
        if(red.y < ch){
            red.y += red.dy
            update()
        }
    }
    if (right) {
        if(red.x < cw){
            red.x += red.dx
            update()
        }
    }
    if (left) {
        if(red.x > 0){
            red.x -= red.dx
            update()
        }
    }
   
}

//movement for blue
function keyDownBlue(){
    if (w) {
        if(blue.y > 0){
            blue.y -= blue.dy
            update()
        }
    }
    if (s) {
        if(blue.y < ch){
            blue.y += blue.dy
            update()
        }
    }
    if (d) {
        if(blue.x < cw){
            blue.x += blue.dx
            update()
        }
    }
    if (a) {
        if(blue.x > 0){
            blue.x -= blue.dx
            update()
        }
    }
}

//draws both balls
function draw() {
    ctx.beginPath();
    ctx.arc(blue.x, blue.y, blue.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'blue'
    ctx.fill()

    ctx.beginPath();
    ctx.arc(red.x, red.y, red.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'red'
    ctx.fill()
}

//inital drawing
draw()

//update 
function update(){
    ctx.clearRect(0, 0, cw, ch)
    draw()
    
}

//call the collision detection function everytime someone moves
document.addEventListener('keydown', collisionDetection)
document.addEventListener('keyUP', collisionDetection)

//initalize variable 
let timerLength = 30;
let time = timerLength
let count = 0;

//gives user rules upon clicking rules button
document.getElementById("rules").addEventListener("click", function() {
    alert("This is bumper balls, a two player game\nThe words above the center canvas will tell you whose turn it is and the timer below how much time let in the turn\nIf it is your turn you must chase down and coliide with the other ball\nThe more you collide the more points you will get\nIf it is not your turn run away to live another day\nPlay for as long as you want and whoever has more points wins\nHave fun!");
})
   

//set time for each players turn. They each get 30 seconds.
function timer2() {
    //minutes * 60 se
    
   let refreshIntervalId = setInterval(updateCountdown, 1000); //update every 1 second

   function updateCountdown() {
           const minutes = Math.floor(time / 60); // rounds a number DOWN to the nearest integer
           let seconds = time % 60;

           seconds = seconds < 10 ? '0' + seconds : seconds; 
           const contdownEl = document.getElementById("time"); 
           contdownEl.innerHTML = `${minutes}:${seconds}`;
           isrun = true

          
       time--;

       if (time < 0) { //stop the setInterval whe time = 0 for avoid negative time
        clearInterval(refreshIntervalId);
        time = timerLength
        count += 1
        console.log(count)
        timer2()
        if(count % 2 == 0){
            document.getElementById("turn").innerHTML = "Blue's Turn"
        }
        else{
            document.getElementById("turn").innerHTML = "Red's Turn"
        }
       }

   }}

timer2()

//detect collison and call upadte scores funtion dependant on who's turn it is
function collisionDetection(){
    console.log(blue.x, blue.y, red.x, red.y)
    for(let i = blue.x - blue.radius; i < blue.x + blue.radius; i++){
        for(let j = blue.y - blue.radius; j < blue.y + blue.radius; j++){
            for(let h = red.x - red.radius; h < red.x + red.radius; h++){
                for(let w = red.y - red.radius; w < red.y + red.radius; w++){
                    if(i == h && j ==w){
                        if(count % 2 == 0){
                            collideBlue()
                        }
                        else{
                            collideRed()
                        }
                    }
                }
            }
        }
    }
        
        
    
   
}

collisionDetection()


//update scores for blue
let x = 0
function collideRed(){
    console.log("Blue Collison!")
    document.getElementById('redHits').innerHTML = x + 1
    x += 1

}

//update scores for red
let y = 0
function collideBlue(){
    console.log("Red Collison!")
    document.getElementById('blueHits').innerHTML = y + 1
    y += 1

}












