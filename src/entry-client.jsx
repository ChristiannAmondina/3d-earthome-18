import { h, render } from 'preact';
import './assets/styles.css';

function App() {
  return (
    <div>
      {/* Galaxy Theme Section */}
      <section id="home">
        <canvas class="webgl"></canvas> {/* 3D canvas for Three.js or other 3D content */}

        {/* Technology GIFs */}
        <div class="tech1">
          <img src="./images/GIF/tech1.gif" alt="Technology Animation 1" />
        </div>
        <div class="tech2">
          <img src="./images/GIF/tech2.gif" alt="Technology Animation 2" />
        </div>

        {/* Info Section */}
        <div class="info1">
          <h1>Earth: Our Blue Planet</h1>
          <p>Earth, the third planet from the Sun, is a remarkable and vibrant world that supports a vast diversity of life...</p>
        </div>
      </section>

      {/* Daily News Section */}
      <div className="notice">
        <h1>DAILY NEWS!</h1>
      </div>

      {/* News Slider */}
      <div class="sliders">
        <div class="slider-item">
          <img src="./images/news/asteroid.png" alt="Asteroid in Earth orbit" class="slider-image" />
          <h1>Asteroid Approaching Earth's Orbit</h1>
        </div>
        <div class="slider-item">
          <img src="./images/news/Firstman.png" alt="First man on the moon" class="slider-image" />
          <h1>First Man to Walk on the Moon</h1>
        </div>
        <div class="slider-item">
          <img src="./images/news/alien.png" alt="UFO" class="slider-image" />
          <h1>Are UFOs Watching Us?</h1>
        </div>
        <div class="slider-item">
          <img src="./images/news/satellite.png" alt="Global satellites" class="slider-image" />
          <h1>Global Satellites Now Orbiting</h1>
        </div>
        <div class="slider-item">
          <img src="./images/news/galaxy.png" alt="Galaxy Exploration" class="slider-image" />
          <h1>Are We Alone?</h1>
        </div>
      </div>

      {/* About Section */}
      <section id="galaxy">
        <canvas class="web1gl"></canvas>
        <div class="info2">
          <p>The Milky Way is a vast spiral galaxy...</p>
        </div>
        <div class="credits">
          <h1>Made by Christian A. Balasabas 😎</h1>
        </div>
      </section>
    </div>
  );
}

render(<App />, document.getElementById('app'));
