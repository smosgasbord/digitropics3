// Naoto Hieda
let hydra, hydraCanvas;
hydraCanvas = document.createElement("canvas");
hydraCanvas.width = 512;
hydraCanvas.height = 512;
hydraCanvas.id = "hydraCanvas";
document.querySelector("a-assets").appendChild(hydraCanvas);

hydra = new Hydra({
  canvas: hydraCanvas,
  enableStreamCapture: false,
  detectAudio: false,
  width: 512,
  height: 512
});

osc(40, 0.1, 2)
  .modulate(noise(3), 0.1)
  //.mask(shape())
  .out(o0);

render();

let delta = 0;

// https://github.com/aframevr/aframe/issues/3936
AFRAME.registerComponent("canvas-updater", {
  dependencies: ["geometry", "material"],

  tick: function() {
    var el = this.el;
    var material;

    material = el.getObject3D("mesh").material;
    if (!material.map) {
      return;
    }
    material.map.needsUpdate = true;
  }
});

AFRAME.registerComponent("aframe-init", {
  init: function() {
    document.querySelector("#hydra0").setAttribute("canvas-updater", "");
    document
      .querySelector("#hydra0")
      .setAttribute("material", "src:#hydraCanvas;transparent:false");
    document
      .querySelector("#hydra0")
      .setAttribute(
        "faceset",
        "vertices: -.5 -.5 0, .5 -.5 0, .5 .5 0, -.5 .5 0;uvs: 0 .501, .499 .501, .499 1, 0 1"
      );

    
  },
  tick: function(time, deltaTime) {
    delta += deltaTime;
  }
});
