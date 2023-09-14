//initalize variables
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ch = canvas.height;
cw = canvas.width;

var up = false;
var down = false;
var w = false;
var s = false;
var leftScore = 0;
var rightScore = 0;
var timer = 0;

//alert user of rules upon pushing rules button
document.getElementById("rules").addEventListener("click", function() {
    alert("This is scuffed pong, a two player game\n To play use the up and down arrow keys to move the left paddle, and the w and s keys to move the right paddle\n The ball will bounce back and forth, randomly changing its speed with each hit\n The more you hit the ball the more points you get\n play for as long as you like \n But remember, this is SCUFFED pong. \n There are some tricks...");
})


//draw dividing line
function drawLine() {
    ctx.beginPath();
    ctx.moveTo(cw/2, 0);
    ctx.lineTo(cw/2, ch);
    ctx.lineWidth = 5;
    ctx.stroke();
};

//create first paddle
let rect1 = {
    h: 60,
    w: 15,
    dy: 30,
    yc: ch/2,
    xc: 20 
}

//draw first paddle
function draw1() {
    ctx.rect(rect1.xc, rect1.yc, rect1.w, rect1.h);
    ctx.fillStyle = 'black';
    ctx.fill();
}

//create second paddle
let rect2 = {
    h: 60,
    w: 15,
    dy: 30,
    yc: ch/2,
    xc: (cw - 45) 
}

//draw second paddle
function draw2() {
    ctx.rect(rect2.xc, rect2.yc, rect2.w, rect2.h);
    ctx.fillStyle = 'black';
    ctx.fill();
} 

//create ball
let ball = {
    r: 15,
    dy: 5,
    dx: 4,
    yc: ch/2,
    xc: cw/2
}

//draw ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.xc, ball.yc, ball.r, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
}

//intial drawings
update()

//upadate position
function update() {
    ctx.clearRect(0, 0, cw, ch);
    draw1();
    draw2();
    drawBall();
    drawLine();
    scores();
}

//draw scolres
function scores() {
    document.getElementById("leftScore").innerHTML = leftScore;
    document.getElementById("rightScore").innerHTML = rightScore;
}

//animate ball and update other varables
function ballMove() {
    ball.xc += ball.dx;
    ball.yc += ball.dy;
    update();
    requestAnimationFrame(ballMove);
    console.log(ball.dy, ball.dx);
    
    
}
requestAnimationFrame(ballMove);


//detect collision and update score
function collisionDetection() {
    timer += 1;
    if(ball.xc > cw || ball.xc < 0){
        ball.dx *= -1;
    }
    if(ball.yc > ch || ball.yc < 0){
        ball.dy *= -1;
    }

    //detect collition for first paddle and update score and balls trajectory and speed by random amount
    for(let i = rect1.xc; i < rect1.xc + rect1.w; i++){
        for(let j = rect1.yc; j < rect1.yc + rect1.h; j++){
            if(i == ball.xc && j == ball.yc && timer > 10){
                timer = 0;
                if(Math.abs(ball.dx) <= 10){
                    ball.dx += rand();
                } else {
                    if(ball.dx > 0){
                        ball.dx -= Math.abs(rand());
                    } else {
                        ball.dx += Math.abs(rand());
                    }
                }
                if(Math.abs(ball.dy) <= 10){
                    ball.dy += rand();
                } else {
                    if(ball.dy > 0){
                        ball.dy -= Math.abs(rand());
                    } else {
                        ball.dy += Math.abs(rand());
                    }
                }
                ball.dy *= -1;
                ball.dx *= -1;
                leftScore += 1;
                
            }
        }
       

    }

    //detect collition for second paddle and update score and balls trajectory and speed by random amount
    for(let i = rect2.xc; i < rect2.xc + rect2.w; i++){
        for(let j = rect2.yc; j < rect2.yc + rect2.h; j++){
            if(i == ball.xc && j == ball.yc && timer > 10){
                timer = 0;
                if(Math.abs(ball.dx) <= 10){
                    ball.dx += rand();
                } else {
                    if(ball.dx > 0){
                        ball.dx -= Math.abs(rand());
                    } else {
                        ball.dx += Math.abs(rand());
                    }
                }
                if(Math.abs(ball.dy) <= 10){
                    ball.dy += rand();
                } else {
                    if(ball.dy > 0){
                        ball.dy -= Math.abs(rand());
                    } else {
                        ball.dy += Math.abs(rand());
                    }
                }
                ball.dy *= -1;
                ball.dx *= -1;
                rightScore += 1;
                
            }
        }
           
    
    }
    
   requestAnimationFrame(collisionDetection);
}
requestAnimationFrame(collisionDetection);

//function returns random number between 1 and 4
function rand() {
    return Math.floor(((Math.random() * 4))) + 1;
}

//add event listers to control paddles
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
document.addEventListener('keydown', Rect1);
document.addEventListener('keyup', Rect1);
document.addEventListener('keydown', Rect2);
document.addEventListener('keyup', Rect2);

//add booleans to allow holding keys
function keyDown(e){
    if (e.key == 'ArrowUp'){
        up = true;
    }
    if (e.key == 'ArrowDown'){
        down = true;
    }
    if (e.key == 'w'){
        w = true;
    }
    if (e.key == 's'){
        s = true;
    }
}

function keyUp(e){
    if (e.key == 'ArrowUp'){
        up = false;
    }
    if (e.key == 'ArrowDown'){
        down = false;
    }
    if (e.key == 'w'){
        w = false;
    }
    if (e.key == 's'){
        s = false;
    }

}

//move first paddle with w and s keys and update location
function Rect1() {
    if (w) {
        if (rect1.yc > 0){
            rect1.yc -= rect1.dy;
            update();
        }
    }
    if (s) {
        if (rect1.yc < ch - rect1.h) {
            rect1.yc += rect1.dy;
            update();
        }
    }

}

//move seocnd paddle with up and down arrow keys and update lcoation
function Rect2() {
    if (up) {
        if (rect2.yc > 0){
            rect2.yc -= rect2.dy;
            update();
        }
    }
    if (down) {
        if (rect2.yc < ch - rect2.h) {
            rect2.yc += rect2.dy;
            update();
        }
    }

}