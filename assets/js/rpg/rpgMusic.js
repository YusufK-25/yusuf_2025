// rpgMusic.js

const rpgMusic = {
    audio: new Audio('{{site.baseurl}}/audio/rpg-song.mp3'),
    isPlaying: false,
    play: function() {
        console.log('Playing background music:', this.audio.src);
        this.audio.loop = true;
        this.audio.play().catch(error => {
            console.error('Error playing background music:', error);
        });
        this.isPlaying = true;
    },
    pause: function() {
        this.audio.pause();
        this.isPlaying = false;
    },
    toggleMusic: function() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    },
    setVolume: function(volume) {
        this.audio.volume = volume;
    }
};

export default rpgMusic;

// Start music on first key press
(function() {
    const startMusic = (event) => {
        console.log(`Key pressed: ${event.key}`);
        
        // Play music on the first key press
        if (!rpgMusic.isPlaying) {
            rpgMusic.toggleMusic();
        }

        // Remove this listener after the first input
        document.removeEventListener('keydown', startMusic);
    };

    document.addEventListener('keydown', startMusic);
})();