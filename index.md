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

### Game Progress

> Here is my progress through game coding, click to see these online.

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
  <a href="{{site.baseurl}}/3x" style="text-decoration: none;">
      <div class="styled-button button-turtle-v2">
          Turtle v0.3
      </div>
  </a>
</div>

<br>

### College Articulation

> Here is my preparation for college topics, click to review my blogs.

<div style="display: flex; flex-wrap: wrap; gap: 15px; margin-top: 20px;">
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

<script src="https://utteranc.es/client.js"
        repo="YusufK-25/yusuf_2025"
        issue-term="title"
        label="blogpost-comment"
        theme="github-dark"
        crossorigin="anonymous"
        async>
</script>
