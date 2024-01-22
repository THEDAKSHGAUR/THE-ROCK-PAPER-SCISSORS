let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userscore = document.querySelector("#userscore");
const compscore = document.querySelector("#compscore");
const message= document.querySelector("#msg");
const reload=document.querySelectorAll(".reload")


const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playgame = (userChoice) => {
    console.log("your choice is", userChoice);
    const compchoices = gencompchoice();
    console.log("computers choice is", compchoices);
    comparematch(userChoice, compchoices);
    changeinscore(compScore, userScore);
    whoiswinner(userChoice,compchoices);

}

const comparematch = (userChoice, compchoices) => {
    if (userChoice == compchoices) {
        message.innerText="It's a tie"
        message.style.backgroundColor="blue";
    } else if (
        (userChoice == "scissors" && compchoices == "paper") ||
        (userChoice == "rock" && compchoices == "scissors") ||
        (userChoice == "paper" && compchoices == "rock")
    ) {
        message.innerText="you won";
        message.style.backgroundColor="green"
        userScore++;
    } else {
        message.innerText="computer won";
        message.style.backgroundColor="red"
        compScore++;
    }
    console.log("comp score=", compScore);
    console.log("user score=", userScore);
}
const whoiswinner=(userChoice,compchoices)=>{
    if((userChoice == "scissors" && compchoices == "paper") ||
    (userChoice == "rock" && compchoices == "scissors") ||
    (userChoice == "paper" && compchoices == "rock")){
        console.log("you won");
    }else if(userChoice == compchoices){
        console.log("its a tie");
    }else{
        console.log("you lost");
    }
}

const changeinscore = (compScore, userScore) => {
    userscore.innerText = userScore;
    compscore.innerText = compScore;
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});

reload.addEventListener("click",reloadpage());
const reloadpage=()=>{
    location.reload();

}
