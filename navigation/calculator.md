---
layout: page
title: Calculator
description: A full-featured calculator with enhanced styling and functionality
permalink: /calculator/
courses: { week: {week: 8} }
---
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Enhanced Calculator</title>

<style>
  /* General page styling */
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    text-align: center;
    margin: 0;
    padding: 0;
  }
  /* Calculator container styling */
  #calculator {
    width: 1000px; /* Ultra-wide width */
    margin: 50px auto;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    padding: 30px;
  }
  /* Display screen styling */
  #display {
    width: 100%;
    height: 100px; /* Taller display for better readability */
    font-size: 36px; /* Larger font */
    text-align: right;
    padding: 20px;
    margin-bottom: 30px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  }
  /* Button styling */
  button {
    width: 180px; /* Significantly wider buttons */
    height: 100px; /* Increased height */
    font-size: 30px; /* Larger font size */
    margin: 10px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.1s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  button:hover {
    background-color: #ddd;
  }
  button:active {
    transform: scale(0.98);
  }
  /* Specialized button styles */
  .operation-button {
    background-color: #ff9933;
    color: #fff;
  }
  .clear-button {
    background-color: #cc0000;
    color: #fff;
  }
  .theme-toggle {
    margin-top: 20px;
    padding: 14px 30px; /* Reduced padding for better fit */
    font-size: 24px; /* Adjusted font size */
    background-color: #333;
    color: #fff;
    border-radius: 8px;
    width: 250px; /* Increased width to fit the text */
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  /* Dark mode styling */
  .dark-mode {
    background-color: #333;
    color: #fff;
  }
  .dark-mode #calculator {
    background-color: #444;
  }
  .dark-mode button {
    background-color: #666;
    color: #fff;
  }
</style>

<div id="calculator">
  <!-- Display -->
  <input type="text" id="display" disabled>

  <!-- Memory and operation buttons -->
  <div>
    <button onclick="clearMemory()" class="clear-button">MC</button>
    <button onclick="recallMemory()">MR</button>
    <button onclick="addToMemory()">M+</button>
    <button onclick="subtractFromMemory()">M-</button>
  </div>

  <!-- Number and basic operation buttons -->
  <div>
    <button onclick="appendToDisplay('1')">1</button>
    <button onclick="appendToDisplay('2')">2</button>
    <button onclick="appendToDisplay('3')">3</button>
    <button onclick="appendToDisplay('+')" class="operation-button">+</button>
  </div>
  <div>
    <button onclick="appendToDisplay('4')">4</button>
    <button onclick="appendToDisplay('5')">5</button>
    <button onclick="appendToDisplay('6')">6</button>
    <button onclick="appendToDisplay('-')" class="operation-button">-</button>
  </div>
  <div>
    <button onclick="appendToDisplay('7')">7</button>
    <button onclick="appendToDisplay('8')">8</button>
    <button onclick="appendToDisplay('9')">9</button>
    <button onclick="appendToDisplay('*')" class="operation-button">*</button>
  </div>
  <div>
    <button onclick="appendToDisplay('0')">0</button>
    <button onclick="appendToDisplay('%')">%</button>
    <button onclick="clearDisplay()" class="clear-button">C</button>
    <button onclick="appendToDisplay('/')" class="operation-button">/</button>
  </div>
  <div>
    <button onclick="calculateResult()" class="operation-button">=</button>
  </div>
</div>

<!-- Theme toggle button -->
<button class="theme-toggle" onclick="toggleTheme()">Toggle Dark Mode</button>

<script>
  const display = document.getElementById('display');
  let memory = 0;

  function appendToDisplay(value) {
    display.value += value;
  }

  function clearDisplay() {
    display.value = '';
  }

  function calculateResult() {
    try {
      display.value = eval(display.value.replace('^', '**'));
    } catch {
      display.value = 'Error';
    }
  }

  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.theme-toggle').innerText = 
      document.body.classList.contains('dark-mode') ? "Light Mode" : "Dark Mode";
  }

  function clearMemory() {
    memory = 0;
  }

  function recallMemory() {
    display.value += memory;
  }

  function addToMemory() {
    memory += parseFloat(display.value) || 0;
    clearDisplay();
  }

  function subtractFromMemory() {
    memory -= parseFloat(display.value) || 0;
    clearDisplay();
  }

  /* Keyboard support */
  document.addEventListener('keydown', (event) => {
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