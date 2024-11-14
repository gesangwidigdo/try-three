import * as THREE from 'three';

// Set up renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// const camera = new THREE.OrthographicCamera(-window.innerWidth, window.innerWidth, window.innerHeight, -window.innerHeight, 1, 500);
const perspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
perspectiveCamera.position.set(0, 0, 5);
perspectiveCamera.lookAt(0, 0, 0);

// Set up scene
const scene = new THREE.Scene();

// Load sprite texture
const map = new THREE.TextureLoader().load('./texture/sprite-sheet.png');
const material = new THREE.SpriteMaterial({ 
  map: map, 
  sizeAttenuation: true,
});

// Modify the value to change the sprite in screen
var spriteIndex = 1;

material.map.offset = new THREE.Vector2(0.2 * spriteIndex, 0);
material.map.repeat = new THREE.Vector2(1 / 5, 1);

// Create sprite and add to scene
const sprite = new THREE.Sprite(material);
sprite.scale.set(1, 1, 1)
sprite.position.set(0, 0, 0);
scene.add(sprite);

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Render scene
  renderer.render(scene, perspectiveCamera);
}

animate();