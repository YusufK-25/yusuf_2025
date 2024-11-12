---
layout: base
title: RPG
permalink: /rpg/
---

<canvas id='gameCanvas'></canvas>

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

<div id="custom-alert" class="custom-alert">
    <button onclick="closeCustomAlert()" id="custom-alert-message"></button>
</div>

<script type="module">
    import GameControl from '{{site.baseurl}}/assets/js/rpg2x/GameControl.js';
    const path = "{{site.baseurl}}";
    // Start game engine
    GameControl.start(path);
    import GameControl from '{{site.baseurl}}/assets/js/rpg2x/GameControl.js';
    // Background data
    const image_src = "{{site.baseurl}}/images/rpg/water.png";
    const image_data = {
        pixels: {height: 580, width: 1038}
    };
    const image = {src: image_src, data: image_data};
    // Sprite data
    const sprite_src = "{{site.baseurl}}/images/rpg/harry.png";
    const sprite_data = {
        SCALE_FACTOR: 10,
        STEP_FACTOR: 500,
        ANIMATION_RATE: 50,
        pixels: {height: 128, width: 190},
        orientation: {rows: 4, columns: 6 },
        down: {row: 4, start: 0, columns: 6 },
        left: {row: 5, start: 0, columns: 6 },
        right: {row: 6, start: 0, columns: 6 },
        up: {row: 7, start: 0, columns: 6 },
    };
    const sprite = {src: sprite_src, data: sprite_data};
    // Assets for game
    //const assets = {}
    //const assets = {image: image}
    //const assets = {sprite: sprite}
    const assets = {image: image, sprite: sprite}
    // Start game engine
    GameControl.start(assets);
</script>