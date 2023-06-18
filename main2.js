// Import
import * as THREE from 'three';
import { PointerLockControls } from './node_modules/three/examples/jsm/controls/PointerLockControls.js';
import { GLTFLoader } from './node_modules/three/examples/jsm/loaders/GLTFLoader.js';

// Init THREE JS
var scence = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(45, innerWidth/innerHeight, 1, 1000);
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(innerWidth, innerHeight);
cam.position.z = 8;
cam.position.y = 1.6;
document.body.appendChild(renderer.domElement);
var directionalLight = new THREE.DirectionalLight({
    color: 0xFFFFFF,
    intensity: 100
});
directionalLight.position.set(0, 1, 0);
directionalLight.castShadow = true;
scence.add(directionalLight);
var ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scence.add(ambientLight);

document.body.appendChild(renderer.domElement);

const geo_saya = new THREE.BufferGeometry();
let vertices = new Float32Array([
    3.5,8,
    0,5,
    2,0,
    5,0,
    7,5,
]);
geo_saya.setAttribute('position', new THREE.BufferAttribute(vertices,2));
const material = new THREE.MeshBasicMaterial({color: 0xff0000});
const polygon = new THREE.Mesh(geo_saya,material);
scence.add(polygon);

// const boxGeo = new THREE.BoxGeometry(1,1,1);
// const boxMaterial = new THREE.MeshBasicMaterial({color:0xff0000});
// let box = new THREE.Mesh(boxGeo,boxMaterial);
// box.position.set(0,0,-1);
// scence.add(box);



let clock = new THREE.Clock();
//Render Loop
function draw() {
    renderer.render(scence, cam);
}

draw();