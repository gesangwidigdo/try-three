import * as THREE from 'three';

// Set up renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.OrthographicCamera(-window.innerWidth, window.innerWidth, window.innerHeight, -window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

// Set up scene
const scene = new THREE.Scene();

// Load sprite texture
const map = new THREE.TextureLoader().load('./texture/sprite-sheet.png');
const material = new THREE.SpriteMaterial({ 
  map: map, 
  sizeAttenuation: false,
});

// For Ghost
// Modify the value to change the sprite in screen
var spriteIndex = 0;

material.map.offset = new THREE.Vector2(0.2 * spriteIndex, 0);
material.map.repeat = new THREE.Vector2(1 / 5, 1);

// Create sprite and add to scene
const sprite = new THREE.Sprite(material);
sprite.scale.set(250, 250, 250)
sprite.position.set(0, 0, 0);
scene.add(sprite);

// For Pokemon
// const pokemonMap = new THREE.TextureLoader().load('./texture/diamond-pearl.png');
// const pokemonMaterial = new THREE.SpriteMaterial({ 
//   map: pokemonMap, 
//   sizeAttenuation: false,
// });

// var spriteIndexX = 0; // start from left, indexes is 0-27
// var spriteIndexY = 8; // start from bottom, indexes is 0-17

// pokemonMaterial.map.offset = new THREE.Vector2((1/28) * spriteIndexX, (1/18) * spriteIndexY);
// pokemonMaterial.map.repeat = new THREE.Vector2(1 / 28, 1 / 18);

// // Create sprite and add to scene
// const pokemonSprite = new THREE.Sprite(pokemonMaterial);
// pokemonSprite.scale.set(500, 500, 500);
// pokemonSprite.position.set(500, 0, 0);
// scene.add(pokemonSprite);

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Render scene
  renderer.render(scene, camera);
}

animate();