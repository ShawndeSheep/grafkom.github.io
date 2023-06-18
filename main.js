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

//Grid
// let grid = new THREE.GridHelper(100, 20, 0x0a0a0a, 0x0a0a0a);
// grid.position.set(0, -0.5, 0);
// scence.add(grid);

//Cube
// let cubeGeo = new THREE.BoxGeometry(1, 1, 1);
// let cubeMat = new THREE.MeshStandardMaterial({
//     color: 0x00ff00
// });
// let cube = new THREE.Mesh(cubeGeo, cubeMat);
// cube.name = "cube1";
// scence.add(cube);

// Flooring
let planeGeo = new THREE.PlaneGeometry(20,20);
let planeTexture = new THREE.TextureLoader().load('./Assets/flooring.jpg'); 
planeTexture.encoding = THREE.sRGBEncoding;
let planeMesh = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({map: planeTexture, transparent:true, side:THREE.DoubleSide}) );
planeMesh.rotation.x -= Math.PI/2;
planeMesh.position.y -= 0.5;
scence.add(planeMesh);

// Ceiling
let planeGeo2 = new THREE.PlaneGeometry(20,20);
let planeTexture2 = new THREE.TextureLoader().load('./Assets/ceiling.jpg'); 
planeTexture2.encoding = THREE.sRGBEncoding;
let planeMesh2 = new THREE.Mesh(planeGeo2, new THREE.MeshBasicMaterial({map: planeTexture2, transparent:true, side:THREE.DoubleSide}) );
planeMesh2.rotation.x -= Math.PI/2;
planeMesh2.position.y = 3.6;
scence.add(planeMesh2);

// Wall North
let walltexture = new THREE.TextureLoader().load('./Assets/wallpaper.jpg'); 
walltexture.encoding = THREE.sRGBEncoding;

let cubeGeo3 = new THREE.BoxGeometry(22,8,1);
let cubeMat3 = new THREE.MeshStandardMaterial({
    map: walltexture
});
let cube3 = new THREE.Mesh(cubeGeo3, cubeMat3);
cube3.position.z -= 8
scence.add(cube3);

// Wall South
let cubeGeo4 = new THREE.BoxGeometry(22,8,1);
let cubeMat4 = new THREE.MeshStandardMaterial({
    map: walltexture
});
let cube4 = new THREE.Mesh(cubeGeo4, cubeMat4);
cube4.position.z += 10
scence.add(cube4);

// Wall West
let cubeGeo = new THREE.BoxGeometry(1,8,22);
let cubeMat = new THREE.MeshStandardMaterial({
    map: walltexture
});
let cube = new THREE.Mesh(cubeGeo, cubeMat);
cube.position.x -= 6
scence.add(cube);

// Wall East
let cubeGeo2 = new THREE.BoxGeometry(1,8,22);
let cubeMat2 = new THREE.MeshStandardMaterial({
    map: walltexture
});
let cube2 = new THREE.Mesh(cubeGeo2, cubeMat2);
cube2.position.x = 6
scence.add(cube2);

// Fan 1
let fan1;
let loader = new GLTFLoader().load('./Assets/fan1.gltf', function(result){
    fan1 = result.scene.children[0];
    fan1.position.y = 3;
    scence.add(fan1);
});

// Fan 2
let fan2;
loader = new GLTFLoader().load('./Assets/fan2.gltf', function(result){
    fan2 = result.scene.children[0];
    fan2.position.y = 2.85;
    fan2.name = "fan";
    scence.add(fan2);
});

// Chair 1
let chair
loader = new GLTFLoader().load('./Assets/chair.gltf', function(result){
    chair = result.scene.children[0];
    chair.name = "chair1";
    chair.position.y = -0.5;
    chair.position.z = 5;
    chair.rotation.z = Math.PI;
    chair.position.x = -0.5;
    scence.add(chair);
});

// Chair 2
let chair2
loader = new GLTFLoader().load('./Assets/chair.gltf', function(result){
    chair2 = result.scene.children[0];
    chair2.name = "chair2";
    chair2.position.y = -0.5;
    chair2.position.z = 5;
    chair2.rotation.z = Math.PI;
    chair2.position.x = 0.5;
    scence.add(chair2);
});

// Chair 3
let chair3
loader = new GLTFLoader().load('./Assets/chair.gltf', function(result){
    chair3 = result.scene.children[0];
    chair3.name = "chair3";
    chair3.position.y = -0.5;
    chair3.position.z = 3.3;
    chair3.position.x = -0.5;
    scence.add(chair3);
});

// Chair 4
let chair4
loader = new GLTFLoader().load('./Assets/chair.gltf', function(result){
    chair4 = result.scene.children[0];
    chair4.name = "chair4";
    chair4.position.y = -0.5;
    chair4.position.z = 3.3;
    chair4.position.x = 0.5;
    scence.add(chair4);
});

// Table
let table;
var posz = 4.2;

loader = new GLTFLoader().load('./Assets/table.gltf', function(result){
    table = result.scene.children[0];
    table.position.y = -0.5;
    table.rotation.z = Math.PI/2;
    table.position.z = posz;
    scence.add(table);
});

// Cloth
var cloth;
loader = new GLTFLoader().load('./Assets/cloth.gltf', function(result){
    cloth = result.scene.children[0];
    cloth.position.y = -0.5;
    cloth.rotation.z = Math.PI/2;
    cloth.position.z = posz;
    scence.add(cloth);
});

// Appliances
var appliances;
loader = new GLTFLoader().load('./Assets/appliances.gltf', function(result){
    appliances = result.scene.children[0];
    appliances.position.y = -0.43;
    appliances.position.z = -7;
    appliances.position.x = -5.4;
    appliances.rotation.y = Math.PI;
    scence.add(appliances);
});

// Cabinet
var cabinet;
loader = new GLTFLoader().load('./Assets/cabinet.gltf', function(result){
    cabinet = result.scene.children[0];
    cabinet.position.y = -0.45;
    cabinet.position.z = -7;
    cabinet.position.x = -5.5;
    cabinet.rotation.y = Math.PI;
    scence.add(cabinet);
});

// TV
var tv;
loader = new GLTFLoader().load('./Assets/tv.gltf', function(result){
    tv = result.scene.children[0];
    tv.rotation.z = Math.PI+Math.PI/2;
    tv.position.x = -4.5;
    tv.position.z = 4.1;
    tv.position.y = 1.0;
    scence.add(tv);
});

// layar
var layar;
loader = new GLTFLoader().load('./Assets/layar.gltf', function(result){
    layar = result.scene.children[0];
    layar.rotation.z = Math.PI/2;
    layar.position.x = -3.9;
    layar.position.z = 4.1;
    layar.position.y = 1.0;
    scence.add(layar);
});

// Tv Table
var tv_table;
loader = new GLTFLoader().load('./Assets/tv_table.gltf', function(result){
    tv_table = result.scene.children[0];
    tv_table.rotation.z = Math.PI;
    tv_table.position.x = -4.6;
    tv_table.position.z = 4.1;
    tv_table.position.y = 0.3;
    scence.add(tv_table);
});

// Cupboard
var cupboard;
loader = new GLTFLoader().load('./Assets/cupboard.gltf', function(result){
    cupboard = result.scene.children[0];
    cupboard.rotation.x = Math.PI;
    cupboard.position.y = 2.9;
    cupboard.position.z = -7.2;
    cupboard.position.x = 3.5;
    scence.add(cupboard);
});

// Knife
var knife;
loader = new GLTFLoader().load('./Assets/knife.gltf', function(result){
    knife = result.scene.children[0];
    knife.rotation.z = Math.PI/2 + Math.PI;
    knife.position.y = 1.2;
    knife.position.z = -2;
    knife.position.x = -0.5;
    knife.name = "knife";
    scence.add(knife);
});

// Lettuce
var lettuce;
loader = new GLTFLoader().load('./Assets/lettuce.gltf', function(result){
    lettuce = result.scene.children[0];
    lettuce.position.y = 1.2;
    lettuce.position.z = -2;
    lettuce.position.x = 0.2;
    scence.add(lettuce);
});

// Pot
var pot;
loader = new GLTFLoader().load('./Assets/pot.gltf', function(result){
    pot = result.scene.children[0];
    pot.position.y = 1.3;
    pot.position.z = -6.2;
    pot.position.x = -1;
    scence.add(pot);
});


// const geo_saya = new THREE.BufferGeometry();
// let vertices = Float32Array([
//     3.5,8,
//     0,5,
//     2,0,
//     5,0,
//     7,5,
// ]);
// geo_saya.setAttribute('position', new THREE.BufferAttribute(vertices,2));
// const material = new THREE.MeshBasicMaterial({color: 0xff0000});
// const polygon = new THREE.Mesh(geo_saya,material);
// scence.add(polygon);

//Keyboard Movement
let keyboard = [];

addEventListener('keydown',(e)=>{
    keyboard[e.key] = true;
})
addEventListener('keyup',(e)=>{
    keyboard[e.key] = false;
})

function process_keyboard(){
    var speed = 0.05;
    if (keyboard['w']){
        controls.moveForward(speed);
    }
    if (keyboard['s']){
        controls.moveForward(-speed);
    }
    if (keyboard['a']){
        controls.moveRight(-speed);
    }
    if (keyboard['d']){
        controls.moveRight(speed);
    }
    if (keyboard['q']){
        controls.lock();
    }
    if (keyboard['e']){
        controls.unlock();
    }
    //Debug Mode
    // if (keyboard[' ']){
    //     cam.position.y += 0.05;
    // }
    // if (keyboard['m']){
    //     cam.position.y -= 0.05;
    // }

    //Border Checking
    var borderz = 8;
    var borderx = 4;
    if(cam.position.z > borderz){
        cam.position.z = borderz;
    }
    if(cam.position.z < -5){
        cam.position.z = -5;
    }
    if(cam.position.x > borderx){
        cam.position.x = borderx;
    }
    if(cam.position.x < -borderx){
        cam.position.x = -borderx;
    }
}

// PointerLock Controls
let controls = new PointerLockControls(cam, renderer.domElement);

// Ray Cast
let rayCast = new THREE.Raycaster();
let mouse = {};
let selected;
var infoFan;
var infoChair1;
var infoChair2;
var infoChair3;
var infoChair4;
var infoKnife;

addEventListener("mousedown", (e)=>{
    mouse.x = (e.clientX/window.innerWidth)*2-1;
    mouse.y = (e.clientY/window.innerHeight)*-2+1;

    rayCast.setFromCamera(mouse, cam);
    let items = rayCast.intersectObjects(scence.children);
    //console.log(items);

    for(var i=0; i<items.length; i++){

        // Check for double clicked
        var skip = false;
        for (var j=0; j<i; j++){
            if(items[i].object.name == items[j].object.name){
                skip = true;
            }
        }

        if(items[i].object.name == "fan" && skip == false){
            infoFan = items[i].object;
            console.log(items[i].object.name);
            turnOn_Fan();
            break;
        }

        if(items[i].object.name == "chair1" && skip == false){
            infoChair1 = items[i].object;
            console.log(items[i].object.name);
            openChair1();
            break;
        }
        if(items[i].object.name == "chair2" && skip == false){
            infoChair2 = items[i].object;
            console.log(items[i].object.name);
            openChair2();
            break;
        }
        if(items[i].object.name == "chair3" && skip == false){
            infoChair3 = items[i].object;
            console.log(items[i].object.name);
            openChair3();
            break;
        }
        if(items[i].object.name == "chair4" && skip == false){
            infoChair4 = items[i].object;
            console.log(items[i].object.name);
            openChair4();
            break;
        }
        if(items[i].object.name == "knife" && skip == false){
            infoKnife = items[i].object;
            console.log(items[i].object.name);
            knifeAnimate();
            break;
        }
    }
})

var fanOn = false;
function turnOn_Fan(){
    if(fanOn == true){
        fanOn = false;
    }else{
        fanOn = true
    }
}

var chair1Open = false;
function openChair1() {
    if(chair1Open){
        gsap.to(infoChair1.position,{z:6, duration:2});
        chair1Open = false;
    }else{
        gsap.to(infoChair1.position,{z:5, duration:2});
        chair1Open = true;
    }
}

var chair2Open = false;
function openChair2() {
    if(chair2Open){
        gsap.to(infoChair2.position,{z:6, duration:2});
        chair2Open = false;
    }else{
        gsap.to(infoChair2.position,{z:5, duration:2});
        chair2Open = true;
    }
}

var chair3Open = false;
function openChair3() {
    if(chair3Open){
        gsap.to(infoChair3.position,{z:2.3, duration:2});
        chair3Open = false;
    }else{
        gsap.to(infoChair3.position,{z:3.3, duration:2});
        chair3Open = true;
    }
}

var chair4Open = false;
function openChair4() {
    if(chair4Open){
        gsap.to(infoChair4.position,{z:2.3, duration:2});
        chair4Open = false;
    }else{
        gsap.to(infoChair4.position,{z:3.3, duration:2});
        chair4Open = true;
    }
}

function knifeAnimate() {
    let t1 = gsap.timeline();
    console.log(infoKnife.position);
    t1.to(infoKnife.position, {y:1.5, duration:1});
    t1.to(infoKnife.rotation, {y:1.5, duration:1});
    t1.to(infoKnife.rotation, {x:1.5, duration:0.5});
    t1.to(infoKnife.rotation, {x:1.7, duration:0.5});
    t1.to(infoKnife.rotation, {x:1.5, duration:0.5});
    t1.to(infoKnife.rotation, {x:1.7, duration:0.5});
    t1.to(infoKnife.rotation, {x:1.5, duration:0.5});
    t1.to(infoKnife.rotation, {x:1.7, duration:0.5});
    t1.to(infoKnife.rotation, {x:1.6, duration:0.5});
    t1.to(infoKnife.rotation, {y:-0.2, duration:1});
    t1.to(infoKnife.position, {y:1.2, duration:1});
}

//Auto Resize
window.addEventListener('resize', function(){
    renderer.setSize(this.window.innerWidth, this.window.innerHeight);
    cam.aspect = this.window.innerWidth/this.window.innerHeight;
    cam.updateProjectionMatrix();
});

let clock = new THREE.Clock();
//Render Loop
function draw() {
    // if(mixer){
    //     mixer.update(clock.getDelta());
    // }
    if(fanOn == true){
        infoFan.rotation.z -= 0.1;
    }
    process_keyboard();
    renderer.render(scence, cam);
    requestAnimationFrame(draw)
}

draw();