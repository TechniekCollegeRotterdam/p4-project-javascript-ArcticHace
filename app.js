//de id uit de html file opnemen in dit document
const computerChoice = document.getElementById("computer-choice");
const playerChoice = document.getElementById("player-choice");
const resultOutput = document.getElementById("result");

const possibleChoices = document.querySelectorAll('button');

let computer;
let player;
let result;

//de button een click event laten worden
possibleChoices.forEach(button => button,addEventListener('click', (e) => {
    player = e.target.id;
    playerChoice.innerHTML = player;
    generateComputerChoice();
    getResult();
}));


//De computer kiest hier één van de opties
const generateComputerChoice = () =>{
    const randomNumber = Math.floor(Math.random() * 5) + 1;

    if (randomNumber == 1) {
        computer= "Rock";
    }

    if (randomNumber == 2) {
        computer= "Paper";
    }

    if (randomNumber == 3) {
       computer= "Scissors";
    }

    if (randomNumber == 4) {
        computer= "Lizard";
     }

     if (randomNumber == 5) {
        computer= "Hobbit";
     }
    computerChoice.innerHTML = computer;
}

//alle mogelijke opties van verliezen, winnen en gelijkspel
const getResult = () => {
    if (computer == player){
        result = "Gelijkspel"
    };
    
    if (computer == "Rock" && player == "Paper"){
        result = "Je hebt gewonnen!"
    };
        
    if (computer == "Rock" && player == "Scissors"){
        result = "Je hebt verloren"
    };

    if (computer == "Rock" && player == "Hobbit"){
        result = "Je hebt gewonnen!"
    };
        
    if (computer == "Rock" && player == "Lizard"){
        result = "Je hebt verloren"
    };
        
    if (computer == "Paper" && player == "Scissors"){
        result = "Je hebt gewonnen!"
    };
        
    if (computer == "Paper" && player == "Rock"){
        result = "Je hebt verloren"
    };

    if (computer == "Paper" && player == "Lizard"){
        result = "Je hebt gewonnen!"
    };
        
    if (computer == "Paper" && player == "Hobbit"){
        result = "Je hebt verloren"
    };
    
    if (computer == "Scissors" && player == "Rock"){
        result = "Je hebt gewonnen!"
    };
        
    if (computer == "Scissors" && player == "Paper"){
        result = "Je hebt verloren"
    };

    if (computer == "Scissors" && player == "Hobbit"){
        result = "Je hebt gewonnen!"
    };
        
    if (computer == "Scissors" && player == "Lizard"){
        result = "Je hebt verloren"
    };

    if (computer == "Lizard" && player == "Rock"){
        result = "Je hebt gewonnen!"
    };
        
    if (computer == "Lizard" && player == "Hobbit"){
        result = "Je hebt verloren"
    };

    if (computer == "Lizard" && player == "Scissors"){
        result = "Je hebt gewonnen!"
    };
        
    if (computer == "Lizard" && player == "Paper"){
        result = "Je hebt verloren"
    };

    if (computer == "Hobbit" && player == "Lizard"){
        result = "Je hebt gewonnen!"
    };
        
    if (computer == "Hobbit" && player == "Rock"){
        result = "Je hebt verloren"
    };

    if (computer == "Hobbit" && player == "Paper"){
        result = "Je hebt gewonnen!"
    };
        
    if (computer == "Hobbit" && player == "Scissors"){
        result = "Je hebt verloren"
    };

    resultOutput.innerHTML = result;
}