---
layout: base
title: Student Home 
description: Home Page
image: /images/mario_animation.png
hide: true
---

{% include nav/home.html %}
{% assign sprite_file = site.baseurl | append: page.image %}
{% assign hash = site.data.mario_metadata %}
{% assign pixels = 256 %}

<p id="mario" class="sprite"></p>

<style>
  /* Sprite and Mario styles */
  .sprite {
    height: {{pixels}}px;
    width: {{pixels}}px;
    background-image: url('{{sprite_file}}');
    background-repeat: no-repeat;
  }

  #mario {
    background-position: calc({{animations[0].col}} * {{pixels}} * -1px) calc({{animations[0].row}} * {{pixels}} * -1px);
  }

  /* Button Styles */
  .styled-button {
    padding: 15px 30px;
    border-radius: 8px;
    font-weight: bold;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    color: white;
    background-size: 200% 200%;
    cursor: pointer;
  }

  .styled-button:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }

  /* Unique gradient and hover effect for each button */
  .button-snake {
    background: linear-gradient(45deg, #32a852, #1abc9c);
  }

  .button-snake:hover {
    background: linear-gradient(45deg, #27ae60, #2ecc71);
  }

  .button-turtle-v0 {
    background: linear-gradient(45deg, #e74c3c, #ff6b6b);
  }

  .button-turtle-v0:hover {
    background: linear-gradient(45deg, #c0392b, #e74c3c);
  }

  .button-turtle-v1 {
    background: linear-gradient(45deg, #f39c12, #f1c40f);
  }

  .button-turtle-v1:hover {
    background: linear-gradient(45deg, #d35400, #e67e22);
  }

  .button-turtle-v2 {
    background: linear-gradient(45deg, #9b59b6, #8e44ad);
  }

  .button-turtle-v2:hover {
    background: linear-gradient(45deg, #8e44ad, #9b59b6);
  }

  .button-variables {
    background: linear-gradient(45deg, #3498db, #2980b9);
  }

  .button-variables:hover {
    background: linear-gradient(45deg, #2980b9, #3498db);
  }

  .button-data-types {
    background: linear-gradient(45deg, #2ecc71, #27ae60);
  }

  .button-data-types:hover {
    background: linear-gradient(45deg, #1abc9c, #2ecc71);
  }

  .button-for-loops {
    background: linear-gradient(45deg, #e67e22, #d35400);
  }

  .button-for-loops:hover {
    background: linear-gradient(45deg, #e74c3c, #f39c12);
  }

  /* Glow effect for Home heading */
  .glow {
  text-shadow: 
    0 0 10px #fff, 
    0 0 20px #fff, 
    0 0 30px #ff0099, 
    0 0 40px #ff0099, 
    0 0 50px #ff0099, 
    0 0 60px #ff0099, 
    0 0 70px #ff0099;
  color: white;
  font-family: 'Cursive', 'Monospace'; /* Use cursive font */
  text-align: center; /* Center the text */
  display: block; /* Ensure it behaves as a block element for centering */
  margin: 0 auto; /* Center the element in the block */
}

</style>

<script>
  var mario_metadata = {}; 
  {% for key in hash %}
  var key = "{{key | first}}";
  var values = {};
  values["row"] = {{key.row}};
  values["col"] = {{key.col}};
  values["frames"] = {{key.frames}};
  mario_metadata[key] = values;
  {% endfor %}

  class Mario {
    constructor(meta_data) {
      this.tID = null;
      this.positionX = 0;
      this.currentSpeed = 0;
      this.marioElement = document.getElementById("mario");
      this.pixels = {{pixels}};
      this.interval = 100;
      this.obj = meta_data;
      this.marioElement.style.position = "absolute";
    }

    animate(obj, speed) {
      let frame = 0;
      const row = obj.row * this.pixels;
      this.currentSpeed = speed;

      this.tID = setInterval(() => {
        const col = (frame + obj.col) * this.pixels;
        this.marioElement.style.backgroundPosition = `-${col}px -${row}px`;
        this.marioElement.style.left = `${this.positionX}px`;

        this.positionX += speed;
        frame = (frame + 1) % obj.frames;

        const viewportWidth = window.innerWidth;
        if (this.positionX > viewportWidth - this.pixels) {
          document.documentElement.scrollLeft = this.positionX - viewportWidth + this.pixels;
        }
      }, this.interval);
    }

    startWalking() {
      this.stopAnimate();
      this.animate(this.obj["Walk"], 3);
    }

    startRunning() {
      this.stopAnimate();
      this.animate(this.obj["Run1"], 6);
    }

    startPuffing() {
      this.stopAnimate();
      this.animate(this.obj["Puff"], 0);
    }

    startCheering() {
      this.stopAnimate();
      this.animate(this.obj["Cheer"], 0);
    }

    startFlipping() {
      this.stopAnimate();
      this.animate(this.obj["Flip"], 0);
    }

    startResting() {
      this.stopAnimate();
      this.animate(this.obj["Rest"], 0);
    }

    stopAnimate() {
      clearInterval(this.tID);
    }
  }

  const mario = new Mario(mario_metadata);

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      if (event.repeat) {
        mario.startCheering();
      } else {
        if (mario.currentSpeed === 0) {
          mario.startWalking();
        } else if (mario.currentSpeed === 3) {
          mario.startRunning();
        }
      }
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (event.repeat) {
        mario.stopAnimate();
      } else {
        mario.startPuffing();
      }
    }
  });

  window.addEventListener("touchstart", (event) => {
    event.preventDefault();
    if (event.touches[0].clientX > window.innerWidth / 2) {
      if (mario.currentSpeed === 0) {
        mario.startWalking();
      } else if (mario.currentSpeed === 3) {
        mario.startRunning();
      }
    } else {
      mario.startPuffing();
    }
  });

  window.addEventListener("blur", () => {
    mario.stopAnimate();
  });

  window.addEventListener("focus", () => {
    mario.startFlipping();
  });

  document.addEventListener("DOMContentLoaded", () => {
    const scale = window.devicePixelRatio;
    const sprite = document.querySelector(".sprite");
    sprite.style.transform = `scale(${0.2 * scale})`;
    mario.startResting();
  });

</script>

---
<!-- Apply glow effect to "Home" heading -->
<h1 class="glow">Home</h1>

<p>This blog contains my journey into Coding.</p>

### Development Environment

> Coding starts with tools, explore these tools and procedures with a click.

<br>

<style>
/* General styling for sections */
section {
    margin-bottom: 40px;
}

/* General button styling */
.styled-button {
    padding: 15px 20px;
    border-radius: 8px;
    font-size: 1rem;
    color: white;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Button hover effect */
.styled-button:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    text-decoration: none;
}

/* Unique colors for each button */
.button-snake { background-color: #FF5733; } /* Vibrant Orange */
.button-turtle-v0 { background-color: #33A1FF; } /* Sky Blue */
.button-turtle-v1 { background-color: #8E44AD; } /* Purple */
.button-turtle-v2 { background-color: #28B463; } /* Green */

/* College Articulation Buttons */
.button-variables { background-color: #E74C3C; } /* Red */
.button-data-types { background-color: #3498DB; } /* Blue */
.button-for-loops { background-color: #F1C40F; } /* Yellow */

/* Homework Buttons */
.button-homework { background-color: #7D3C98; } /* Dark Purple */
.button-conditional-p1 { background-color: #3498DB; } /* Blue */
.button-conditional-p2 { background-color: #1ABC9C; } /* Turquoise */
.button-conditional-p3 { background-color: #E67E22; } /* Orange */
.button-nested-conditionals { background-color: #D35400; } /* Dark Orange */

/* Section title styling */
section h2 {
    font-size: 1.5rem;
    color: #333;
    border-bottom: 2px solid #ddd;
    padding-bottom: 5px;
    margin-bottom: 15px;
}

/* Section description styling */
.section-description {
    font-style: italic;
    color: #666;
    margin-bottom: 20px;
}
</style>

<section>
    <h2>Game Progress</h2>
    <p class="section-description">Here is my progress through game coding, click to see these online.</p>

    <div style="display: flex; flex-wrap: wrap; gap: 15px;">
        <a href="{{site.baseurl}}/snake" style="text-decoration: none;">
            <div class="styled-button button-snake">
                Snake Game
            </div>
        </a>
        <a href="{{site.baseurl}}/rpg0x" style="text-decoration: none;">
            <div class="styled-button button-turtle-v0">
                Turtle v0.0
            </div>
        </a>
        <a href="{{site.baseurl}}/rpg1x" style="text-decoration: none;">
            <div class="styled-button button-turtle-v1">
                Turtle v0.1
            </div>
        </a>
        <a href="{{site.baseurl}}/rpg" style="text-decoration: none;">
            <div class="styled-button button-turtle-v2">
                Turtle v0.2
            </div>
        </a>
        <a href="{{site.baseurl}}/rpg3x" style="text-decoration: none;">
            <div class="styled-button button-turtle-v2">
                Turtle v0.3
            </div>
        </a>
    </div>
</section>

<section>
    <h2>College Articulation</h2>
    <p class="section-description">Here is my preparation for college topics, click to review my blogs.</p>

    <div style="display: flex; flex-wrap: wrap; gap: 15px;">
        <a href="{{site.baseurl}}/csse/javascript/fundamentals/variables" style="text-decoration: none;">
            <div class="styled-button button-variables">
                Variables I/O
            </div>
        </a>
        <a href="{{site.baseurl}}/csse/javascript/fundamentals/data-types/" style="text-decoration: none;">
            <div class="styled-button button-data-types">
                Data Types
            </div>
        </a>
        <a href="{{site.baseurl}}/csse/javascript/fundamentals/variables" style="text-decoration: none;">
            <div class="styled-button button-for-loops">
                Variables
            </div>
        </a>
        <a href="{{site.baseurl}}/csse/javascript/fundamentals/for-loops" style="text-decoration: none;">
            <div class="styled-button button-for-loops">
                For loops and sprites
            </div>
        </a>
    </div>
</section>

<section>
    <h2>Homework Assignments</h2>
    <p class="section-description">Below are the links to homework assignments, click to view each one.</p>

    <div style="display: flex; flex-wrap: wrap; gap: 15px;">
        <a href="https://yusufk-25.github.io/yusuf_2025/csse/javascript/fundamentals/data-abstraction-homework" style="text-decoration: none;">
            <div class="styled-button button-homework">
                Data Abstraction Homework
            </div>
        </a>
        <a href="https://yusufk-25.github.io/yusuf_2025/csse/javascript/fundamentals/classes/hw/" style="text-decoration: none;">
            <div class="styled-button button-homework">
                Classes Homework
            </div>
        </a>
        <a href="https://yusufk-25.github.io/yusuf_2025/javascript/2024/10/31/mathhomework_IPYNB_2_.html" style="text-decoration: none;">
            <div class="styled-button button-homework">
                Math Homework
            </div>
        </a>
        <a href="https://yusufk-25.github.io/yusuf_2025/2024/10/26/nested_conditionals_IPYNB_2_.html" style="text-decoration: none;">
            <div class="styled-button button-nested-conditionals">
                Nested Conditionals Homework
            </div>
        </a>
        <a href="https://yusufk-25.github.io/yusuf_2025/csse/javascript/fundamentals/conditional-statements/p1/" style="text-decoration: none;">
            <div class="styled-button button-conditional-p1">
                Conditionals Homework - Part 1
            </div>
        </a>
        <a href="https://yusufk-25.github.io/yusuf_2025/csse/javascript/fundamentals/conditionals_part2/" style="text-decoration: none;">
            <div class="styled-button button-conditional-p2">
                Conditionals Homework - Part 2
            </div>
        </a>
        <a href="https://yusufk-25.github.io/yusuf_2025/csse/javascript/fundamentals/conditionals/p3/" style="text-decoration: none;">
            <div class="styled-button button-conditional-p3">
                Conditionals Homework - Part 3
            </div>
        </a>
    </div>
</section>


<script src="https://utteranc.es/client.js"
        repo="YusufK-25/yusuf_2025"
        issue-term="title"
        label="blogpost-comment"
        theme="github-dark"
        crossorigin="anonymous"
        async>
</script>
