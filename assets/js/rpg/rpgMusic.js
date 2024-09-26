(function() {
    const audio = new Audio(window.audioPath); // Reference the global variable
    audio.loop = true;

    const indicator = document.getElementById('indicator');
    let isPlaying = false; // Flag to manage play state

    // Function to toggle music play/pause
    function toggleMusic() {
        if (isPlaying) {
            console.log('Pausing music...');
            audio.pause();
            if (indicator) {
                indicator.style.display = 'none'; // Hide the indicator when music pauses
            }
            isPlaying = false; // Update flag
        } else {
            console.log('Attempting to play music...');
            audio.play()
                .then(() => {
                    console.log('Music started playing.');
                    if (indicator) {
                        indicator.style.display = 'block'; // Show the indicator when music starts
                    }
                    isPlaying = true; // Update flag
                })
                .catch(error => {
                    console.error('Error playing audio:', error);
                });
        }
    }

    // Event listener for keydown event to play music on first input
    document.addEventListener('keydown', function startMusic(event) {
        console.log(`Key pressed: ${event.key}`);
        
        // Play music on the first key press
        if (!isPlaying) {
            toggleMusic();
        }

        // Remove this listener after the first input
        document.removeEventListener('keydown', startMusic);
    });
})();