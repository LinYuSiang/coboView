import * as THREE from '../../../lib/three/three.module.js';
import {
  STLLoader
} from '../../../lib/three/STLLoader.js';
import {
  OrbitControls
} from '../../../lib/three/OrbitControls.js';
import {
  CSS2DRenderer,
  CSS2DObject
} from '../../../lib/three/CSS2DRenderer.js'

let camera, scene, renderer, rendererLabel, grid;
let link0, link1, link2, link3, link4, link5, link6;
let eeFrameX, eeFrameY, eeFrameZ;
let info, tcpDiv;
let T = [];
let links = [];
let deg = 0;
let vscodePath = 'vscode-resource:/d%3A/IBM/Web_Alpha/VSCodeIDE/view/cobotView/';
let chormePath = './'

// DH
let DH = {
  a: [0, 25, 340, 40, 0, 0],
  alpha: [0, -Math.PI / 2, 0, -Math.PI / 2, Math.PI / 2, -Math.PI / 2],
  d: [374, 0, 0, 345, 0, 74],
  theta: [0, -Math.PI / 2, 0, 0, 0, 0],
};

let loader = new STLLoader();
init();

async function init() {
  scene = new THREE.Scene();
  scene.add(new THREE.AmbientLight(0x999999));

  camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 10000);
  camera.up.set(0, 0, 1);
  camera.position.set(1500, 1200, 2000);
  camera.add(new THREE.PointLight(0xffffff, 0.8));
  scene.add(camera);

  grid = new THREE.GridHelper(1100, 20, 0x000000, 0x219dcd);
  grid.rotateOnAxis(new THREE.Vector3(1, 0, 0), 90 * (Math.PI / 180));
  scene.add(grid);

  let origin = new THREE.Vector3(0, 0, 0);
  let length = 50;
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), origin, length, 0xff0000));
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), origin, length, 0x00ff00));
  scene.add(new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), origin, length, 0x0000ff));

  tcpDiv = document.createElement('div');
  tcpDiv.className = 'label';
  tcpDiv.innerHTML = `
  <style>
  .label {
    color: #FFF;
    font-family: sans-serif;
    padding: 5px;
    font-size:6px;
    background: rgba(0, 0, 0, .6);
  }
  </style>
  X: 0&nbsp&nbsp&nbspRX: 0<br>Y: 0&nbsp&nbsp&nbspRY: 0<br>Z: 0&nbsp&nbsp&nbspRZ: 0
  `;
  let tcpLabel = new CSS2DObject(tcpDiv);

  renderer = new THREE.WebGLRenderer({
    preserveDrawingBuffer: true,
    alpha: true
  });
  renderer.setClearColor(0xffffff);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('webGL').appendChild(renderer.domElement);

  rendererLabel = new CSS2DRenderer();
  rendererLabel.setSize(window.innerWidth, window.innerHeight);
  rendererLabel.domElement.style.position = 'absolute';
  rendererLabel.domElement.style.top = '5px';
  document.getElementById('webGL').appendChild(rendererLabel.domElement);
  scene.add(tcpLabel);

  loadBase().then(() => {
    loadLink1().then(() => {
      link0.add(link1);
    }).then(() => {
      loadLink2().then(() => {
        link1.add(link2);
      }).then(() => {
        loadLink3().then(() => {
          link2.add(link3);
        }).then(() => {
          loadLink4().then(() => {
            link3.add(link4);
          }).then(() => {
            loadLink5().then(() => {
              link4.add(link5);
            }).then(() => {
              loadLink6().then(() => {
                link5.add(link6);
                eeFrameX = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), origin, 100, 0xff0000);
                eeFrameY = new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0), origin, 100, 0x00ff00);
                eeFrameZ = new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1), origin, 100, 0x0000ff);
                link6.add(eeFrameX);
                link6.add(eeFrameY);
                link6.add(eeFrameZ);
                render();
              })
            })
          })
        })
      })
    })
  });

  createText();

  let controls = new OrbitControls(camera, rendererLabel.domElement);
  controls.addEventListener('change', render);
  controls.target.set(0, 1.2, 2);
  controls.update();
  window.addEventListener('resize', onWindowResize, false);
  // parent.addEventListener('resize', onWindowResize, false);
  // parent.parent.addEventListener('resize', onWindowResize, false);
};

function loadBase() {
  return new Promise((resolve, reject) => {
    let material = new THREE.MeshPhongMaterial({
      color: 0xd4d4d4,
      specular: 0x111111,
      shininess: 200
    });

    loader.load(chormePath + 'models/stl/base.stl', function (geometry) {
      link0 = new THREE.Mesh(geometry, material);
      link0.position.set(0, 0, 0);
      link0.rotation.set(0, 0, 0);
      link0.castShadow = true;
      link0.receiveShadow = true;

      T.push(new THREE.Matrix4());
      T[0] = (link0.matrix);
      link0.applyMatrix(T[0]);
      scene.add(link0);
      resolve();
    });
  });
};

function loadLink1() {
  return new Promise((resolve) => {
    let material = new THREE.MeshPhongMaterial({
      color: 0xd4d4d4,
      specular: 0x111111,
      shininess: 200
    });

    loader.load(chormePath + 'models/stl/link1.stl', function (geometry) {
      link1 = new THREE.Mesh(geometry, material);

      let rotX = new THREE.Matrix4().makeRotationX(DH.alpha[0]);
      let rotZ = new THREE.Matrix4().makeRotationZ(DH.theta[0]);
      let transX = new THREE.Matrix4().makeTranslation(DH.a[0], 0, 0);
      let transZ = new THREE.Matrix4().makeTranslation(0, 0, DH.d[0]);

      T.push(new THREE.Matrix4());
      T[1].multiplyMatrices(T[0], rotX.multiply(transX).multiply(rotZ).multiply(transZ));
      link1.applyMatrix(T[1]);
      link1.castShadow = true;
      link1.receiveShadow = true;
      links.push(link1);
      resolve();
    });
  });
};

function loadLink2() {
  return new Promise((resolve) => {
    let material = new THREE.MeshPhongMaterial({
      color: 0xd4d4d4,
      specular: 0x111111,
      shininess: 200
    });

    loader.load(chormePath + 'models/stl/link2.stl', function (geometry) {
      link2 = new THREE.Mesh(geometry, material);

      let rotX = new THREE.Matrix4().makeRotationX(DH.alpha[1]);
      let rotZ = new THREE.Matrix4().makeRotationZ(DH.theta[1]);
      let transX = new THREE.Matrix4().makeTranslation(DH.a[1], 0, 0);
      let transZ = new THREE.Matrix4().makeTranslation(0, 0, DH.d[1]);

      T.push(new THREE.Matrix4());
      link2.applyMatrix(rotX.multiply(transX).multiply(rotZ).multiply(transZ));
      link2.castShadow = true;
      link2.receiveShadow = true;
      links.push(link2);
      resolve();
    });
  });
};

function loadLink3() {
  return new Promise((resolve) => {
    let material = new THREE.MeshPhongMaterial({
      color: 0xd4d4d4,
      specular: 0x111111,
      shininess: 200
    });

    loader.load(chormePath + 'models/stl/link3.stl', function (geometry) {
      link3 = new THREE.Mesh(geometry, material);

      let rotX = new THREE.Matrix4().makeRotationX(DH.alpha[2]);
      let rotZ = new THREE.Matrix4().makeRotationZ(DH.theta[2]);
      let transX = new THREE.Matrix4().makeTranslation(DH.a[2], 0, 0);
      let transZ = new THREE.Matrix4().makeTranslation(0, 0, DH.d[2]);

      T.push(new THREE.Matrix4());
      link3.applyMatrix(rotX.multiply(transX).multiply(rotZ).multiply(transZ));
      link3.castShadow = true;
      link3.receiveShadow = true;
      links.push(link3);
      resolve();
    });
  });
};

function loadLink4() {
  return new Promise((resolve) => {
    let material = new THREE.MeshPhongMaterial({
      color: 0xd4d4d4,
      specular: 0x111111,
      shininess: 200
    });

    loader.load(chormePath + 'models/stl/link4.stl', function (geometry) {
      link4 = new THREE.Mesh(geometry, material);

      let rotX = new THREE.Matrix4().makeRotationX(DH.alpha[3]);
      let rotZ = new THREE.Matrix4().makeRotationZ(DH.theta[3]);
      let transX = new THREE.Matrix4().makeTranslation(DH.a[3], 0, 0);
      let transZ = new THREE.Matrix4().makeTranslation(0, 0, DH.d[3]);

      T.push(new THREE.Matrix4());
      link4.applyMatrix(rotX.multiply(transX).multiply(rotZ).multiply(transZ));
      link4.castShadow = true;
      link4.receiveShadow = true;
      links.push(link4);
      resolve();
    });
  });
};

function loadLink5() {
  return new Promise((resolve) => {
    let material = new THREE.MeshPhongMaterial({
      color: 0xd4d4d4,
      specular: 0x111111,
      shininess: 200
    });

    loader.load(chormePath + 'models/stl/link5.stl', function (geometry) {
      link5 = new THREE.Mesh(geometry, material);

      let rotX = new THREE.Matrix4().makeRotationX(DH.alpha[4]);
      let rotZ = new THREE.Matrix4().makeRotationZ(DH.theta[4]);
      let transX = new THREE.Matrix4().makeTranslation(DH.a[4], 0, 0);
      let transZ = new THREE.Matrix4().makeTranslation(0, 0, DH.d[4]);

      T.push(new THREE.Matrix4());
      link5.applyMatrix(rotX.multiply(transX).multiply(rotZ).multiply(transZ));
      link5.castShadow = true;
      link5.receiveShadow = true;
      links.push(link5);
      resolve();
    });
  });
};

function loadLink6() {
  return new Promise((resolve) => {
    let material = new THREE.MeshPhongMaterial({
      color: 0xd4d4d4,
      specular: 0x111111,
      shininess: 200
    });

    loader.load(chormePath + 'models/stl/link6.stl', function (geometry) {
      link6 = new THREE.Mesh(geometry, material);

      let rotX = new THREE.Matrix4().makeRotationX(DH.alpha[5]);
      let rotZ = new THREE.Matrix4().makeRotationZ(DH.theta[5]);
      let transX = new THREE.Matrix4().makeTranslation(DH.a[5], 0, 0);
      let transZ = new THREE.Matrix4().makeTranslation(0, 0, DH.d[5]);

      T.push(new THREE.Matrix4());
      link6.applyMatrix(rotX.multiply(transX).multiply(rotZ).multiply(transZ));
      link6.castShadow = true;
      link6.receiveShadow = true;
      links.push(link6);
      resolve();
    });
  });
};

function createText() {
  return new Promise((resolve) => {
    info = document.createElement('div');
    info.style.position = 'absolute';
    info.style.width = 100;
    info.style.height = 100;
    document.getElementById('webGL').appendChild(info);

    let vector = new THREE.Vector3();
    let widthHalf = 0.02 * renderer.getContext().canvas.width;
    let heightHalf = 0.02 * renderer.getContext().canvas.height;
    vector.x = (vector.x * widthHalf) + widthHalf;
    vector.y = -(vector.y * heightHalf) + heightHalf;
    info.style.left = vector.x + 'px';
    info.style.top = vector.y + 'px';
    info.innerHTML = `
    <style>
    table, th, td {
      border: 1px solid gray;
      font-family: sans-serif;
      text-align: center;
      font-size: 8px;
    }
    </style>
    <table id="ta">
      <tr>
        <th>Axis</th>
        <th>Jnt</th>
        <th>Vol</th>
        <th>Cur</th>
      </tr>
      <tr>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>2</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>3</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>4</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>5</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>6</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
    </table>
    `
  });
};

function updateText(degree) {
  for (let i = 0; i < 6; i++) {
    document.getElementById("ta").rows[i + 1].cells[1].innerHTML = degree[i].toFixed(3);
  }
};

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render(window.innerWidth + ',' + window.innerHeight);
};

function render() {
  // updateText(0, 0, 0, 0, 0, 0);
  renderer.render(scene, camera);
  rendererLabel.render(scene, camera);
};

function update(degree) {
  link1.rotation.z = DH.theta[0] + (degree[0] * Math.PI) / 180;
  link2.rotation.z = DH.theta[1] + (degree[1] * Math.PI) / 180;
  link3.rotation.z = DH.theta[2] + (degree[2] * Math.PI) / 180;
  link4.rotation.z = DH.theta[3] + (degree[3] * Math.PI) / 180;
  link5.rotation.z = DH.theta[4] + (degree[4] * Math.PI) / 180;
  link6.rotation.z = DH.theta[5] + (degree[5] * Math.PI) / 180;

  updateText(degree);
  render();
}

window.update = update;