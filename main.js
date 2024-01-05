import './style.css'
import * as THREE from 'three';

const dimension = {
  width: window.innerWidth,
  height: window.innerHeight
};

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, dimension.width / dimension.height, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(dimension.width / dimension.height);
document.body.appendChild(renderer.domElement);

// Your Code

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();