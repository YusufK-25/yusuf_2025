<!-- Add Google Fonts link for fancier text styles -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Dancing+Script:wght@700&display=swap">

<style>
    /* Style the page titles */
    h1, h2, h3 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        text-align: center; /* Center the titles */
        color: #2a4d69; /* Custom title color */
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
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Dynamic columns */
        gap: 10px;
        padding: 20px; /* Add padding around the grid */
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
    }
    .grid-item img {
        width: 140%; /* Larger flags */
        height: 180px; /* Increase height for larger size */
        object-fit: contain; /* Ensure the image fits within the fixed height */
        display: block; /* Make sure image is block-level for proper centering */
        margin: 0 auto; /* Center the image horizontally */
    }
    .grid-item p {
        margin: 5px 0; /* Add some margin for spacing */
    }
    .grid-item p:first-of-type {
        font-family: 'Dancing Script', cursive; /* Fancy cursive font for greetings */
        font-size: 24px; /* Larger font size for greetings */
        color: #2a4d69; /* Custom color for the text */
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

<!-- Titles of the sections -->
<h1>About Me</h1>

<h2>Who I am</h2>
<p>Hi! I’m Yusuf Khan, part of the class of 2027 enrolled in DNHS. I was born in San Diego, but my heritage is from Pakistan. You’ll find me reading, playing games, ~~or crying in the corner~~ when I'm not working or studying. <em>I love staying active and inspired.</em> I have no experience in coding, but that's why I'm here.</p>

<h2>What schools I came from</h2>
<p>I went to elementary school in Monterey Ridge, where I stayed until I graduated. I then went to OVMS for middle school, where I took a coding class, but I was locked out of the account, and no longer remember anything.</p>

<h2>Living in the World</h2>

<!-- This grid_container class is for the CSS styling, the id is for JavaScript connection -->
<div class="grid-container" id="grid_container">
    <!-- content will be added here by JavaScript -->
</div>

<script>
    // 1. Make a connection to the HTML container defined in the HTML div
    var container = document.getElementById("grid_container"); // This container connects to the HTML div

    // 2. Define a JavaScript object for our http source and our data rows for the Living in the World grid
    var http_source = "https://upload.wikimedia.org/wikipedia/commons/";
    var living_in_the_world = [
        {"flag": "0/01/Flag_of_California.svg", "greeting": "Hey", "description": "California - Lived here my whole life"},
        {"flag": "3/32/Flag_of_Pakistan.svg", "greeting": "Salaam", "description": "Pakistan - I occasionally visit"},
    ]; 
    
    // 3a. Build grid items inside of our container for each row of data
    for (const location of living_in_the_world) {
        // Create a "div" with "class grid-item" for each row
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";  // This class name connects the gridItem to the CSS style elements
        // Add "img" HTML tag for the flag
        var img = document.createElement("img");
        img.src = http_source + location.flag; // concatenate the source and flag
        img.alt = location.flag + " Flag"; // add alt text for accessibility

        // Add "p" HTML tag for the description
        var description = document.createElement("p");
        description.textContent = location.description; // extract the description

        // Add "p" HTML tag for the greeting
        var greeting = document.createElement("p");
        greeting.textContent = location.greeting;  // extract the greeting

        // Append img and p HTML tags to the grid item DIV
        gridItem.appendChild(img);
        gridItem.appendChild(description);
        gridItem.appendChild(greeting);

        // Append the grid item DIV to the container DIV
        container.appendChild(gridItem);
    }
</script>
