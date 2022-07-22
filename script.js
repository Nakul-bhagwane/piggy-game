let ball = document.getElementById("character_ball");  //variable for character
let hurdel = document.getElementById("bar_hurdel");    // variable for hunter hurdle
let screen = document.getElementById("game_screen");   //vairable for gaming screen

let result_card = document.getElementById("result_board");  //variable for result screen

let song = document.getElementById("audio");   //variable for audio


// starters
document.getElementById("strtbtn").addEventListener("click", () => {
    document.getElementById("start_panel").style.display = "none"
    document.getElementById("game_screen").style.display = "block"

    song.play();
});



// it is a function that basically work for the jump of character
jump = () => {
    if (ball.classList != "jumper") {

        ball.classList.add("jumper");

        setTimeout(() => {
            ball.classList.remove("jumper")
        }, 405);
    }
}
// it is keydown function that call jump function whenever we click on any key
window.addEventListener("keydown", () => {
    jump();
});

window.addEventListener("click", () => {
    jump();
});



// decider that tell game over or not ,it will check the result in every 10 mili second 
setInterval(() => {
    let character_bottom = parseInt(window.getComputedStyle(ball).getPropertyValue("bottom"));
    // console.log(character_bottom);

    let hurdel_right = parseInt(window.getComputedStyle(hurdel).getPropertyValue("right"));
    // console.log(hurdel_right );

    if (hurdel_right >= 788 && hurdel_right <= 933 && character_bottom <= 78) {

        setTimeout(() => {

            hurdel.classList.remove("hurdel_mover");
            result_card.style.display = "block";
            document.getElementById("game_screen").style.display = "none";

            document.getElementById("best_score").innerHTML = scores;

            song.pause();
            song.currentTime = 0;

    hurdel.removeAttribute("class");

        }, 1000);
    }
}, 10);



// restart button system 
let restart = document.getElementById("restart_btn").addEventListener("click", () => {
    hurdel.classList.add("hurdel_mover");
    result_card.style.display = "none";
    document.getElementById("game_screen").style.display = "block";

    numbers = 0;
    scores = "";

    song.play();
});



// scoring system
var numbers = 0;
let scores = "";

setInterval(() => {
    numbers++;
    document.getElementById("score").innerHTML = numbers;
    scores = numbers;
}, 500);


// speed system 
speed =()=>{
    setTimeout(() => {
        hurdel.classList.replace("hurdel_mover", "hurdel_mover_1_4sec");
        console.log(".4sec started");
    }, 20000);
    
    setTimeout(() => {
        hurdel.classList.replace("hurdel_mover_1_4sec", "hurdel_mover_1_3sec");
        console.log("1.3sec started");
    }, 40000);
    
    setTimeout(() => {
        hurdel.classList.replace("hurdel_mover_1_3sec", "hurdel_mover_1_2sec");
        console.log("1.2sec started");
    }, 60000);
    
    setTimeout(() => {
        hurdel.classList.replace("hurdel_mover_1_2sec", "hurdel_mover_1_1sec");
        console.log("1.1sec started");
    }, 80000);
    
    setTimeout(() => {
        hurdel.classList.replace("hurdel_mover_1_1sec", "hurdel_mover_1sec");
        console.log("1sec started");
    }, 100000);
    
    setTimeout(() => {
        hurdel.classList.replace("hurdel_mover_1sec", "hurdel_mover_0_9sec");
        console.log(".9sec started");
    }, 120000);
    
    setTimeout(() => {
        hurdel.classList.replace("hurdel_mover_0_9sec", "hurdel_mover_0_8sec");
        console.log(".8sec started");
    }, 140000);
    
    setTimeout(() => {
        hurdel.classList.replace("hurdel_mover_0_8sec", "hurdel_mover_0_7sec");
        console.log(".7sec started");
    }, 160000);
    
    setTimeout(() => {
        hurdel.classList.replace("hurdel_mover_0_7sec", "hurdel_mover_0_6sec");
        console.log(".6sec started");
    }, 180000);
}
