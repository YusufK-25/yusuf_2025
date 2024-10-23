import Player from "./Player.js";
import GameEnv from "./GameEnv.js";

class NPC extends Player {
    constructor(data = null) {
        super(data);
        this.alertTimeout = null;
    }

    update() {
        this.draw();
    }

    handleKeyDown({ key }) {
        switch (key) {
            case 'e':  // Player 1 
            case 'u':  // Player 2 
                this.checkProximityToNPC();
                break;
        }
    }

    handleKeyUp({ key }) {
        if (key === 'e' || key === 'u') {
            if (this.alertTimeout) {
                clearTimeout(this.alertTimeout);
                this.alertTimeout = null;
                closeCustomAlert();
            }
        }
    }

    handleResponse(message) {
        if (this.alertTimeout) {
            clearTimeout(this.alertTimeout);
        }

        this.alertTimeout = setTimeout(() => {
            showCustomAlert(message);
        }, 0);
    }

    checkProximityToNPC() {
        // Get all Player objects from the game environment
        var players = GameEnv.gameObjects.filter(obj => obj instanceof Player);
        var npc = this;
        var names = [];

        players.forEach(player => {
            // Calculate the distance between the player and the NPC
            var distance = Math.sqrt(
                Math.pow(player.position.x - npc.position.x, 2) + Math.pow(player.position.y - npc.position.y, 2)
            );

            if (player !== npc) {
                // If the player is more than 100 pixels away
                if (distance > 100) {
                    this.handleResponse("Come closer, I can't see you!");
                }
                // If the player is within 100 pixels, greet them with their name
                else if (distance <= 100) {
                    names.push(player.spriteData.name);  // Collect player names within proximity
                }
            }
        });

        // If there are any players close enough, greet them
        if (names.length > 0) {
            this.handleResponse(`Hello, ${names.join(', ')}`);
        }
    }
}

export default NPC;

function showCustomAlert(message) {
    const alertBox = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('custom-alert-message');
    alertMessage.textContent = message;
    alertBox.style.display = 'block';
}

function closeCustomAlert() {
    const alertBox = document.getElementById('custom-alert');
    alertBox.style.display = 'none';
}