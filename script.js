const boat = document.getElementById("boat"); 
const obstacle = document.getElementById("obstacle");

let count = 0;

function incrementSeconds() {
    count++;
    document.getElementById("score").innerText="Score: " + count;
}

var cancel = setInterval( incrementSeconds, 1000);
var audio = new Audio('./Music/dinoJump2.mp3');
let gameOn = true;
function jump () {
    audio.play();
    if (boat.classList != "jump") {
        boat.classList.add("jump");
    }
    boat.classList.add("jump");
    setTimeout(function (){ 
        boat.classList.remove("jump"); 
        
    }, 300);
}

const box = document.createElement('div');
let isAlive = setInterval(function () {
    let boatTop = parseInt(window.getComputedStyle(boat).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if (obstacleLeft < 50 && obstacleLeft > 0)
    {
        if(boatTop >= 75){
            if(gameOn){
                if(confirm("Oh no! It looks like you've damaged your (uninsured) boat. Don't you wish you had some boat insurance?")){
                    clearInterval(cancel);
                    console.log("true");
                    document.getElementById("info-page").scrollIntoView();
                    gameOn = false;
                    document.getElementById("obstacle").style.display="none";
                    document.getElementById("info-page").style.display = "revert";
                    document.getElementById("plybtn").style.display = "revert";
                    document.getElementById("info-page").scrollIntoView();
                }
                else{
                    count = -1;
                    var el = document.getElementById("obstacle");
                    el.style.animation = 'none';
                    el.offsetHeight;
                    el.style.animation = null;
                }
            }
        }
    }

}, 10);


document.addEventListener("keydown", function (e) {
    jump();
});

function onClick(){
    jump();
}

function playAgain(){
    gameOn = true;
    count = 0;
    document.getElementById("score").innerText="Score: " + count;
    cancel = setInterval( incrementSeconds, 1000);
    var el = document.getElementById("obstacle");
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = null;
    document.getElementById("obstacle").style.display="revert";
    document.getElementById("plybtn").style.display="none";
    document.getElementById("info-page").style.display = "none";
}
var clicked = 0;

function moreInformation(section, information) {
    if(clicked === 0)
    {
        document.getElementById(section).innerHTML = information;
    } else {
        document.getElementById(section).innerHTML = "";
    }
    clicked = (clicked+1)%2;
}

function sendtoStatefarm(){
    window.location.href='https://www.statefarm.com/insurance/boats';
}