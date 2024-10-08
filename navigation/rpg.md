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

<script src="{{site.baseurl}}/assets/js/rpg/rpgMusic.js"></script>

<canvas id='gameCanvas'></canvas>
<div id="prompt" style="display:none; position:absolute; top:50px; left:50px; background-color: white; padding: 10px; border: 1px solid black;">Hello!</div>

<script type="module">
    import GameControl from '{{site.baseurl}}/assets/js/rpg/GameControl.js';

    const path = "{{site.baseurl}}";

    // Start game engine
    GameControl.start(path);
</script>
