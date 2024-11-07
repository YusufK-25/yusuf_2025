---
layout: page
title: RPS
description: A fully functioning Rock Paper Scissors Game
permalink: /rps/
courses: { week: {week: 8} }
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock Paper Scissors</title>
    <style>
        /* General styling for body */
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(135deg, #a2d9ff, #0078d7);
            margin: 0;
        }

        #game-container {
            text-align: center;
            width: 400px; /* Increased width */
            padding: 30px; /* Increased padding */
            border-radius: 12px;
            background: #ffffff;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        h2 {
            font-size: 28px;
            color: #005bb5; /* New color for better contrast */
            margin-bottom: 25px;
        }

        .choices {
            display: flex;
            justify-content: space-around;
            margin-bottom: 25px;
        }

        /* Button styling */
        .choice {
            width: 100px; /* Increased width for images */
            padding: 15px;
            font-size: 18px;
            color: #ffffff;
            background-color: #0078d7;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .choice:hover {
            background-color: #005bb5;
        }

        .choice img {
            width: 28px; /* Increased icon size */
            height: 28px;
            margin-right: 8px;
        }

        /* Result and score display */
        #result {
            font-size: 20px;
            color: #333;
            margin-top: 15px;
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
    
    <!-- Choices Section with Image Placeholders -->
    <div class="choices">
        <button class="choice" onclick="playGame('rock')">
            <!-- Rock Icon Placeholder -->
            <img src="https://img.icons8.com/color/48/000000/rock.png" alt="Rock"> Rock
        </button>
        <button class="choice" onclick="playGame('paper')">
            <!-- Paper Icon Placeholder -->
            <img src="https://img.icons8.com/color/48/000000/paper.png" alt="Paper"> Paper
        </button>
        <button class="choice" onclick="playGame('scissors')">
            <!-- Scissors Icon Placeholder -->
            <img src="https://img.icons8.com/color/48/000000/scissors.png" alt="Scissors"> Scissors
        </button>
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
        // Choices and winning combinations
        const choices = ['rock', 'paper', 'scissors'];
        
        // Determine computer's choice with a bias towards winning
        let computerChoice;
        const randomChance = Math.random();

        if (randomChance < 0.6) {
            // 60% chance computer picks a winning move
            if (userChoice === 'rock') computerChoice = 'paper';
            else if (userChoice === 'paper') computerChoice = 'scissors';
            else if (userChoice === 'scissors') computerChoice = 'rock';
        } else {
            // 40% chance computer picks randomly
            computerChoice = choices[Math.floor(Math.random() * choices.length)];
        }

        // Determine the result
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