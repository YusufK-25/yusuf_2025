---
layout: base
title: RPG
permalink: /rpg/
---


<div id="indicator" style="display: none;">Music is Playing!</div>

<script>
    // Set the audio path using Liquid and define it globally
    window.audioPath = '{{site.baseurl}}/assets/sounds/rpgSong.mp3';
</script>

<script src="{{site.baseurl}}/assets/js/rpg2x/rpgMusic.js"></script> 

<style>
.custom-alert {
    display: none;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
}

.custom-alert button {
    background-color: transparent; /* Fully transparent background */
    display: flex; /* Use flexbox for layout */
    align-items: center; /* Center items vertically */
    justify-content: center; /* Center items horizontally */
    width: 100%; /* Adjust width to fit content */
    height: 100%; /* Adjust height to fit content */
    position: absolute; /* Position the button relative to the alert box */
}

</style>
<canvas id='gameCanvas'></canvas>
<div id="custom-alert" class="custom-alert">
    <button onclick="closeCustomAlert()" id="custom-alert-message"></button>
</div>

<script type="module">
    import GameControl from '{{site.baseurl}}/assets/js/rpg2x/GameControl.js';
    const path = "{{site.baseurl}}";
    // Start game engine
    GameControl.start(path);
</script>