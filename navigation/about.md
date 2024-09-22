---
layout: post
title: About Me
description: Hi! I'm Yusuf
permalink: /about/
---
<!-- Add Google Fonts link for fancier text styles -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Dancing+Script:wght@700&display=swap">

<style>
    /* Style the page titles */
    h1, h2, h3 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        text-align: center; /* Center the titles */
        color: white; /* Change title color to white */
        margin-bottom: 20px;
    }
    
    h1 {
        font-size: 36px; /* Large title */
    }

    h2, h3 {
        font-size: 28px; /* Smaller section titles */
    }

    /* Style the grid container and items */
    .grid-container {
        display: flex;
        flex-wrap: wrap; /* Allow the items to wrap */
        gap: 10px;
        padding: 20px;
        justify-content: center; /* Center the grid items horizontally */
        margin: 0 auto; /* Center the entire grid on the page */
        max-width: 800px; /* Limit the width of the grid container */
    }

    .grid-item {
        text-align: center;
        padding: 20px;
        background-color: lightblue; /* Light blue bubble background */
        border-radius: 15px; /* Create rounded corners for bubble effect */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add slight shadow for depth */
        font-family: 'Poppins', sans-serif; /* Fancy font for the general text */
        width: 200px; /* Set a fixed width for the bubble */
    }

    .grid-item img {
        width: 140%; /* Larger flags */
        height: 180px; /* Increase height for larger size */
        object-fit: contain; /* Ensure the image fits within the fixed height */
        display: block;
        margin: 0 auto;
    }

    /* Change text color to black */
    .grid-item p {
        margin: 5px 0; /* Add some margin for spacing */
        color: black; /* Change text color to black */
    }

    .grid-item p:first-of-type {
        font-family: 'Dancing Script', cursive; /* Fancy cursive font for greetings */
        font-size: 24px; /* Larger font size for greetings */
        color: black; /* Change greeting text color to black */
    }
    
    /* Style the descriptive text sections */
    p {
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        line-height: 1.6;
        text-align: center; /* Center the paragraph text */
        color: #333;
    }
</style>

<h2>Who I am</h2>
<p>Hi! I’m Yusuf Khan, part of the class of 2027 enrolled in DNHS. I was born in San Diego, but my heritage is from Pakistan. You’ll find me reading, playing games, ~~or crying in the corner~~ when I'm not working or studying. <em>I love staying active and inspired.</em> I have no experience in coding, but that's why I'm here.</p>

<h2>What schools I came from</h2>
<p>I went to elementary school in Monterey Ridge, where I stayed until I graduated. I then went to OVMS for middle school, where I graduated in 2023.</p>

<h2>Where I've lived in the World</h2>

<!-- This grid_container class is for the CSS styling, the id is for JavaScript connection -->
<div class="grid-container" id="grid_container">
    <!-- content will be added here by JavaScript -->
</div>

<script>
    var container = document.getElementById("grid_container"); 

    var http_source = "https://upload.wikimedia.org/wikipedia/commons/";
    var living_in_the_world = [
        {"flag": "0/01/Flag_of_California.svg", "greeting": "Hey", "description": "California - Lived here my whole life"},
        {"flag": "3/32/Flag_of_Pakistan.svg", "greeting": "Salaam", "description": "Pakistan - I occasionally visit"},
    ]; 
    
    for (const location of living_in_the_world) {
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";  
        var img = document.createElement("img");
        img.src = http_source + location.flag; 
        img.alt = location.flag + " Flag"; 

        var description = document.createElement("p");
        description.textContent = location.description; 

        var greeting = document.createElement("p");
        greeting.textContent = location.greeting;  

        gridItem.appendChild(img);
        gridItem.appendChild(description);
        gridItem.appendChild(greeting);

        container.appendChild(gridItem);
    }
</script>

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <img src="{{site.baseurl}}/images/about.md_images/Family.jpg" alt="Image 1" style="width: 150px; height: auto; object-fit: cover;">
  <img src="{{site.baseurl}}/images/about.md_images/Food.jpg" alt="Image 2" style="width: 150px; height: auto; object-fit: cover;">
</div>

<script src="https://utteranc.es/client.js"
        repo="YusufK-25/yusuf_2025"
        issue-term="title"
        label="blogpost-comment"
        theme="github-dark"
        crossorigin="anonymous"
        async>
</script>