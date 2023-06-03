'use strict';

class GUI {
  constructor(webgl) {
    this.webgl = webgl;

    var guiVars = {
      switchCamera: () => {
        if (this.webgl.camera instanceof THREE.PerspectiveCamera) {
          this.webgl.camera = new THREE.OrthographicCamera(
            window.innerWidth / -16,
            window.innerWidth / 16,
            window.innerHeight / 16,
            window.innerHeight / -16,
            -200,
            500
          );
          this.webgl.camera.position.x = 120;
          this.webgl.camera.position.y = 60;
          this.webgl.camera.position.z = 180;
          this.webgl.camera.lookAt(this.webgl.scene.position);
          this.perspective = "Orthographic";
        } else {
          this.webgl.camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
          );
          this.webgl.camera.position.x = 120;
          this.webgl.camera.position.y = 60;
          this.webgl.camera.position.z = 180;
          this.webgl.camera.lookAt(this.webgl.scene.position);
          this.perspective = "Perspective";
        }
      },
      animation: false,
      cleanScene: () => {
        while (this.webgl.scene.children.length > 0) {
          this.webgl.scene.remove(this.webgl.scene.children[0]);
        }
      },
      drawBox: () => {
        guiVars.cleanScene();
        var box = new MyBox(50, 30, 15, 0.2);
        this.webgl.scene.add(box);
        
        const light = new THREE.AmbientLight( 0x404040 ); // soft white light
        this.scene.add( light );
      },
      drawRack: () => {
        guiVars.cleanScene();
        var rack = new MyRack();
        this.webgl.scene.add(rack);
      },
      drawWarehouse: () => {
        var warehouse = new Warehouse();
        this.webgl.scene.add(warehouse);
      },
      drawRobot: () => {
        var robot = new Robot(50, 50, 50);
        robot.translateX(150);
        robot.translateY(25);
        this.webgl.scene.add(robot);
        let direction = false;

        const animate = () => {
          if (guiVars.animation) {
            if (robot.position.z == 100) {
              direction = false;
            }
            if (robot.position.z == -100) {
              direction = true;
            }
            if (direction == true) {
              robot.translateZ(1);
            } else {
              robot.translateZ(-1);
            }
            this.webgl.render(this.webgl.scene, this.webgl.camera);
          }
          requestAnimationFrame(animate);
        };

        animate();
      }
    };

    var gui = new dat.GUI({ autoPlace: false });

    gui.add(guiVars, "cleanScene");
    gui.add(guiVars, "drawBox");
    gui.add(guiVars, "drawRack");
    gui.add(guiVars, "drawWarehouse");
    gui.add(guiVars, "drawRobot");
    gui.add(guiVars, "animation");
    gui.add(guiVars, "switchCamera");

    var customContainer = document.getElementById("GUI-output");
    customContainer.appendChild(gui.domElement);
  }
}
