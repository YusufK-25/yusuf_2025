---
layout: base
title: Ideation Hacks
description: A blog describing the popcorn and ideation hacks
permalink: /ideas/
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ideation Hacks</title>
    <meta name="description" content="A blog describing the popcorn and ideation hacks">
</head>
<body>
    <h1>Popcorn Hacks</h1>
    <h2>Turtle RPG Game Setup</h2>
    <blockquote>
        <p>Begin With Setting Up Game Files</p>
        <ul>
            <li>Open both your project directory as well as the portfolio_2025 repository</li>
            <li>Navigate into the virtual environment for both of them and run <code>code .</code></li>
            <li>If venv is not installed in one or both directories, there are two options</li>
            <li>1. Give up and cry a little</li>
            <li>2. Run <code>./activate/venv.sh</code></li>
            <li>Navigate to <code>config.yml</code> and copy the "navigation/rpg.md" command into yours</li>
            <li>Navigate into images on both repositories and drag and drop the rpg folder</li>
            <li>Exit images, and create a new folder under assets named js, standing for javascript</li>
            <li>Drag and drop his entire rpg folder.</li>
        </ul>
    </blockquote>
    <h2>Popcorn Hack For JSON Object</h2>
    <table>
        <thead>
            <tr>
                <th>File</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>rpg.md</code></td>
                <td>Sets up the necessary elements and data for a web-based RPG, including the layout, music, background image, sprite assets, and animations. It starts the game engine.</td>
            </tr>
            <tr>
                <td><code>gamecontrol.js</code></td>
                <td>Manages the game loop, rendering, canvas creation, game environment, and interactions.</td>
            </tr>
            <tr>
                <td><code>gameenv.js</code></td>
                <td>Handles background size and sets up the background.</td>
            </tr>
            <tr>
                <td><code>player.js</code></td>
                <td>Controls player movement, loads the player sprite sheet, and manages animations.</td>
            </tr>
        </tbody>
    </table>

<h1>Updated Ideation Hacks</h1>
    <blockquote>
        <p>Possible ideas for the RPG game</p>
    </blockquote>

<h2>Ideas</h2>
<table>
        <thead>
            <tr>
                <th>Ideas</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>NPC</td>
                <td>As the NPC has already been added, it would be possible to add additional features to the NPC. For example, the NPC currently only says one thing, but one thing that could be implemented is a dialouge system in which the NPC says something different every time.</td>
            </tr>
            <tr>
                <td>Pause Screen with quests.</td>
                <td>Add quests that the player can complete for rewards and progression. This can be viewed in the pause screen, which could hypothetically be implemented through an on-keydown command.</td>
            </tr>
            <tr>
                <td>Items</td>
                <td>Include items that the player can collect, use, or trade. There could be random objects scattered throughout the page, and the character could try to collect them, with something being in its way.</td>
            </tr>
            <tr>
                <td>2 Player System</td>
                <td>Implement a system where multiple players can play together at the same time.</td>
            </tr>
        </tbody>
    </table>
<h2>Example JavaScript Code</h2>
    <pre><code>
// Define a JSON object
const person = {
    "name": "Yusuf",
    "age": 15,
    "isStudent": true
};

// Access values from the JSON object
console.log("Name:", person.name);       // Output: Name: Yusuf
console.log("Age:", person.age);         // Output: Age: 15
console.log("Is a student:", person.isStudent);  // Output: Is a student: true

// Update a value in the JSON object
person.isStudent = false;

console.log("Updated student status:", person.isStudent);  // Output: Updated student status: false

// Add a new key-value pair
person.course = "Computer Science";

console.log("Course:", person.course);   // Output: Course: Computer Science
    </code></pre>
</body>
</html>