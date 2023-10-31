 let userChoice;
        let pcChoice;
        let body = document.querySelector("body");
        let resultParagraph = document.getElementById("result");
        let rockButton = document.getElementById("rock");
        let paperButton = document.getElementById("paper");
        let scissorsButton = document.getElementById("scissors");

        rockButton.addEventListener("click", function () {
            userChoice = "Rock";
            localStorage.setItem("userChoice", userChoice);
            playGame();
        });
        
        paperButton.addEventListener("click", function () {
            userChoice = "Paper";
            localStorage.setItem("userChoice", userChoice);
            playGame();
        });
        
        scissorsButton.addEventListener("click", function () {
            userChoice = "Scissors";
            localStorage.setItem("userChoice", userChoice);
            playGame();
        });

        function playGame() {
            pcChoice = generateRandomChoice();

            let result = compare(localStorage.getItem("userChoice"), pcChoice);

            resultParagraph.textContent = `You choosed ${localStorage.getItem("userChoice")}, PC chosed ${pcChoice}. Result: ${result}`;
        }

        function generateRandomChoice() {
            let randomNum = Math.random();

            if (randomNum <= 0.33) {
                return "Rock";
            } else if (randomNum <= 0.66) {
                return "Paper";
            } else {
                return "Scissors";
            }
        }

        function compare(choice1, choice2) {
            
            if (choice1 === choice2) {
                return "Tie";
            }
            if (choice1 === "Rock") {
                return choice2 === "Scissors" ? "You Win" : "PC Wins";
            }
            if (choice1 === "Paper") {
                return choice2 === "Rock" ? "You Win" : "PC Wins";
            }
            if (choice1 === "Scissors") {
                return choice2 === "Paper" ? "You Win" : "PC Wins";
            }
        }
        
        
        

