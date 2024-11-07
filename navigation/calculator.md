---
layout: page
title: Advanced Calculator
description: A full-featured calculator with enhanced styling and functionality
permalink: /calculator/
courses: { week: {week: 8} }
---

<!--Advanced Calculator Code with Enhanced UI and Memory Functions-->
<!-- I made some of the original code with some of the ideas we had, from the lessons, and then asked chatGPT to improve it. -->
<html>
<head>
  <style>
    /* Base styling for the body */
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      text-align: center;
      transition: background-color 0.3s;
    }

    /* Optional background image */
    /* Uncomment below to add an image background */
    /* body {
        background-image: url('your-image-url.jpg'); 
        background-size: cover;
        background-position: center;
    } */

    /* Calculator container styling */
    #calculator {
      width: 320px;
      margin: 20px auto;
      background-color: #fff;
      border: 1px solid #ccc;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      border-radius: 15px;
      padding: 20px;
    }

    /* Display styling */
    #display {
      width: 100%;
      height: 50px;
      font-size: 26px;
      text-align: right;
      padding: 10px;
      margin-bottom: 15px;
      border-radius: 10px;
      border: 1px solid #ddd;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    }

    /* Button styling for calculator keys */
    button {
      width: 65px;
      height: 65px;
      font-size: 20px;
      margin: 5px;
      border: none;
      border-radius: 10px;
      background-color: #eee;
      cursor: pointer;
      transition: background-color 0.2s, transform 0.1s;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    /* Hover and active effects for buttons */
    button:hover {
      background-color: #ddd;
    }
    button:active {
      transform: scale(0.98);
    }

    /* Special button colors */
    #equal-button {
      background-color: #ff9933;
      color: #fff;
    }

    #clear-button, #memory-clear {
      background-color: #cc0000;
      color: #fff;
    }

    /* Theme toggle button styling */
    #theme-toggle {
      background-color: #333;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
      padding: 10px 20px;
      margin-top: 15px;
    }

    /* Dark mode styling */
    .dark-mode {
      background-color: #333;
      color: #fff;
    }

    .dark-mode #calculator {
      background-color: #444;
      border-color: #666;
    }

    .dark-mode button {
      background-color: #666;
      color: #fff;
    }

    .dark-mode #equal-button {
      background-color: #ff5722;
    }

    .dark-mode #clear-button, .dark-mode #memory-clear {
      background-color: #e53935;
    }
  </style>
</head>
<body>
  <div id="calculator">
    <!-- Display screen for calculator output -->
    <input type="text" id="display" disabled>

    <!-- Memory function buttons -->
    <button onclick="clearMemory()" id="memory-clear">MC</button>
    <button onclick="recallMemory()">MR</button>
    <button onclick="addToMemory()">M+</button>
    <button onclick="subtractFromMemory()">M-</button>

    <!-- Calculator number and operation buttons -->
    <br>
    <button onclick="appendToDisplay('1')">1</button>
    <button onclick="appendToDisplay('2')">2</button>
    <button onclick="appendToDisplay('3')">3</button>
    <button onclick="appendToDisplay('+')">+</button>
    <br>
    <button onclick="appendToDisplay('4')">4</button>
    <button onclick="appendToDisplay('5')">5</button>
    <button onclick="appendToDisplay('6')">6</button>
    <button onclick="appendToDisplay('-')">-</button>
    <br>
    <button onclick="appendToDisplay('7')">7</button>
    <button onclick="appendToDisplay('8')">8</button>
    <button onclick="appendToDisplay('9')">9</button>
    <button onclick="appendToDisplay('*')">*</button>
    <br>
    <button onclick="appendToDisplay('0')">0</button>
    <button onclick="appendToDisplay('%')">%</button>
    <button id="clear-button" onclick="clearDisplay()">C</button>
    <button onclick="appendToDisplay('/')">/</button>
    <br>
    <button id="equal-button" onclick="calculateResult()">=</button>
  </div>

  <!-- Theme toggle button for dark mode -->
  <button id="theme-toggle" onclick="toggleTheme()">Toggle Dark Mode</button>

  <script>
    const display = document.getElementById('display');
    let memory = 0; // Memory variable to store calculations
    let darkMode = false; // Dark mode toggle state

    /* Append a value to the display */
    function appendToDisplay(value) {
      display.value += value;
    }

    /* Clear the display screen */
    function clearDisplay() {
      display.value = '';
    }

    /* Calculate and display the result */
    function calculateResult() {
      try {
        display.value = eval(display.value.replace('^', '**'));
      } catch (error) {
        display.value = 'Error'; // Display error for invalid input
      }
    }

    /* Toggle between light and dark themes */
    function toggleTheme() {
      document.body.classList.toggle('dark-mode');
      darkMode = !darkMode;
      document.getElementById('theme-toggle').innerText = darkMode ? "Switch to Light Mode" : "Switch to Dark Mode";
    }

    /* Memory Functions */

    /* Clear memory */
    function clearMemory() {
      memory = 0;
    }

    /* Recall memory */
    function recallMemory() {
      display.value += memory;
    }

    /* Add current display value to memory */
    function addToMemory() {
      memory += parseFloat(display.value) || 0; // Adds current display value to memory
      clearDisplay();
    }

    /* Subtract current display value from memory */
    function subtractFromMemory() {
      memory -= parseFloat(display.value) || 0; // Subtracts current display value from memory
      clearDisplay();
    }

    /* Keyboard support */
    document.addEventListener('keydown', function(event) {
      const key = event.key;
      if (!isNaN(key) || "+-*/%^".includes(key)) {
        appendToDisplay(key);
      } else if (key === 'Enter') {
        calculateResult();
      } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
      } else if (key.toLowerCase() === 'c') {
        clearDisplay();
      }
    });
  </script>
</body>
</html>
