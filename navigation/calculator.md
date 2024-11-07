---
layout: page
title: Calculator
description: A full-featured calculator with enhanced styling and functionality
permalink: /calculator/
courses: { week: {week: 8} }
---

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Basic Calculator</title>

<style>
    /* Basic page styling */
    body {
        font-family: Arial, sans-serif;
        text-align: center;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
    }

    /* Calculator container styling */
    #calculator {
        width: 300px;
        margin: 100px auto;
        padding: 20px;
        background-color: white;
        border-radius: 10px;
    }

    /* Display screen styling */
    #display {
        width: 100%;
        height: 50px;
        font-size: 24px;
        text-align: right;
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #ccc;
    }

    /* Button styling */
    button {
        width: 60px;
        height: 60px;
        font-size: 20px;
        margin: 5px;
        cursor: pointer;
    }

    /* Operation button styling */
    .operation {
        background-color: #ff9800;
        color: white;
    }
</style>

<div id="calculator">
    <!-- Display area for the calculator -->
    <input type="text" id="display" disabled>

    <!-- Buttons for the calculator -->
    <div>
        <button onclick="appendToDisplay('1')">1</button>
        <button onclick="appendToDisplay('2')">2</button>
        <button onclick="appendToDisplay('3')">3</button>
        <button onclick="appendToDisplay('+')" class="operation">+</button>
    </div>
    <div>
        <button onclick="appendToDisplay('4')">4</button>
        <button onclick="appendToDisplay('5')">5</button>
        <button onclick="appendToDisplay('6')">6</button>
        <button onclick="appendToDisplay('-')" class="operation">-</button>
    </div>
    <div>
        <button onclick="appendToDisplay('7')">7</button>
        <button onclick="appendToDisplay('8')">8</button>
        <button onclick="appendToDisplay('9')">9</button>
        <button onclick="appendToDisplay('*')" class="operation">*</button>
    </div>
    <div>
        <button onclick="appendToDisplay('0')">0</button>
        <button onclick="clearDisplay()">C</button>
        <button onclick="calculateResult()" class="operation">=</button>
        <button onclick="appendToDisplay('/')" class="operation">/</button>
    </div>
</div>

<!-- JavaScript functionality -->
<script>
    // Function to append numbers or operators to the display
    function appendToDisplay(value) {
        document.getElementById('display').value += value;
    }

    // Function to clear the display
    function clearDisplay() {
        document.getElementById('display').value = '';
    }

    // Function to calculate the result of the expression
    function calculateResult() {
        try {
            // Evaluate the expression and display the result
            document.getElementById('display').value = eval(document.getElementById('display').value);
        } catch {
            // If an error occurs (e.g., invalid expression), show 'Error'
            document.getElementById('display').value = 'Error';
        }
    }
</script>
