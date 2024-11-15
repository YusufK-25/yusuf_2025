import Player from './Player.js';
import GameEnv from './GameEnv.js';

let width = GameEnv.innerWidth;
let height = GameEnv.innerHeight;

    const TURTLE_SCALE_FACTOR = 10;
    const sprite_src_turtle = "../../images/rpg/harry.png";
    const sprite_data_turtle = {
      name: 'harry',
      src: sprite_src_turtle,
      SCALE_FACTOR: TURTLE_SCALE_FACTOR,
      STEP_FACTOR: 1000,
      ANIMATION_RATE: 50,
      INIT_POSITION: { x: 0, y: height - (height / TURTLE_SCALE_FACTOR) },
      pixels: { height: 128, width: 190 }, // Bottom half: 128 height, keeping full width
      orientation: { rows: 4, columns: 6 }, // Adjusted to represent only 4 rows in the bottom half
      down: { row: 0, start: 0, columns: 6 },   // Row 4 (now row 0 of cropped bottom half)
      left: { row: 1, start: 0, columns: 6 },   // Row 5 (now row 1)
      right: { row: 2, start: 0, columns: 6 },  // Row 6 (now row 2)
      up: { row: 3, start: 0, columns: 6 },     // Row 7 (now row 3)
      offsetY: 128 // NEW: Offset the Y-position to start at the bottom half
    };

    const sprite_data_harry_black = {
      name: 'harry',
      src: sprite_src_turtle,
      SCALE_FACTOR: TURTLE_SCALE_FACTOR,
      STEP_FACTOR: 1000,
      ANIMATION_RATE: 50,
      INIT_POSITION: { x: 0, y: height - (height / TURTLE_SCALE_FACTOR) },
      pixels: { height: 128, width: 190 }, // Bottom half: 128 height, keeping full width
      orientation: { rows: 4, columns: 6 }, // Adjusted to represent only 4 rows in the bottom half
      down: { row: 4, start: 0, columns: 6 },   // Row 4 (now row 0 of cropped bottom half)
      left: { row: 5, start: 0, columns: 6 },   // Row 5 (now row 1)
      right: { row: 6, start: 0, columns: 6 },  // Row 6 (now row 2)
      up: { row: 7, start: 0, columns: 6 },     // Row 7 (now row 3)
      offsetY: 128 // NEW: Offset the Y-position to start at the bottom half
    };
class PlayerOne extends Player {
    
    constructor(data = null) {
        super(data);
    }

    handleKeyDown({ keyCode }) {
        switch (keyCode) {
            case 87: // 'W' key
                this.velocity.y -= this.yVelocity;
                this.direction = 'up';
                break;
            case 65: // 'A' key
                this.velocity.x -= this.xVelocity;
                this.direction = 'left';
                break;
            case 83: // 'S' key
                this.velocity.y += this.yVelocity;
                this.direction = 'down';
                break;
            case 68: // 'D' key
                this.velocity.x += this.xVelocity;
                this.direction = 'right';
                break;
            case 79: // 'O' key
                if (this.spriteData === sprite_data_turtle) {
                    this.spriteData = sprite_data_harry_black;
                } else {
                    this.spriteData = sprite_data_turtle;
                }
                break;
        }
    }

    /**
     * Handles key up events to stop the player's velocity.
     * 
     * This method stops the player's velocity based on the key released.
     * 
     * @param {Object} event - The keyup event object.
     */
    handleKeyUp({ keyCode }) {
        switch (keyCode) {
            case 87: // 'W' key
                this.velocity.y = 0;
                break;
            case 65: // 'A' key
                this.velocity.x = 0;
                break;
            case 83: // 'S' key
                this.velocity.y = 0;
                break;
            case 68: // 'D' key
                this.velocity.x = 0;
                break;
        }
    }

}

export default PlayerOne;