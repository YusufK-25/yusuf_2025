---
layout: page
title: RPS Game
Description: Rock Paper Scissors Game
permalink: /rps/
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock Paper Scissors</title>
    <style>
        /* General layout styling */
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f3f4f6;
            margin: 0;
        }

        #game-container {
            text-align: center;
            max-width: 350px;
            padding: 20px;
            border-radius: 10px;
            background: #ffffff;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        h2 {
            font-size: 24px;
            color: #333;
            margin-bottom: 20px;
        }

        .choices {
            display: flex;
            justify-content: space-around;
            margin: 20px 0;
        }

        /* Choice button styling */
        .choice {
            padding: 12px 20px;
            font-size: 18px;
            color: #ffffff;
            background-color: #4CAF50;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .choice:hover {
            background-color: #45a049;
        }

        /* Result and Score Styling */
        #result {
            font-size: 18px;
            color: #333;
            margin-top: 20px;
        }

        #score {
            font-size: 18px;
            color: #555;
            margin-top: 10px;
        }
    </style>
</head>
<body>

<div id="game-container">
    <h2>Rock Paper Scissors</h2>
    
    <!-- Choices Section -->
    <div class="choices">
        <button class="choice" onclick="playGame('rock')">Rock</button>
        <button class="choice" onclick="playGame('paper')">Paper</button>
        <button class="choice" onclick="playGame('scissors')">Scissors</button>
    </div>

    <!-- Result and Score Section -->
    <div id="result">Make a choice to start playing!</div>
    <div id="score">Score: You - 0 | Computer - 0</div>
</div>

<script>
    // Initial scores
    let userScore = 0;
    let computerScore = 0;

    function playGame(userChoice) {
        // Define choices and randomly select computer choice
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        // Determine winner and prepare the response
        let roundResult = '';
        if (userChoice === computerChoice) {
            roundResult = "It's a tie!";
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'scissors' && computerChoice === 'paper') ||
            (userChoice === 'paper' && computerChoice === 'rock')
        ) {
            roundResult = "You win!";
            userScore++;
        } else {
            roundResult = "You lose!";
            computerScore++;
        }

        // Display the result message and update the score
        document.getElementById('result').textContent = `The computer picked ${computerChoice}. ${roundResult}`;
        document.getElementById('score').textContent = `Score: You - ${userScore} | Computer - ${computerScore}`;
    }
</script>

</body>
</html>
