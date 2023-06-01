'use strict';

class GUI {

  constructor(webgl) {
	this.webgl = webgl;
        
    var guiVars = {
      "animation" : false,
      "cleanScene" : () => {  
        for (var i = 0; i < this.webgl.scene.children.length; )
          this.webgl.scene.remove(this.webgl.scene.children[i]);  
        },
        "drawBox" : () => {  
          for (var i = 0; i < this.webgl.scene.children.length; ){
            this.webgl.scene.remove(this.webgl.scene.children[i]);  
          };
          var box = new MyBox(50,30,15,.2);
          this.webgl.scene.add(box);
        },

        "drawRack" : () => {  
          for (var i = 0; i < this.webgl.scene.children.length; ){
            this.webgl.scene.remove(this.webgl.scene.children[i]);  
          };
          var rack = new MyRack();
          this.webgl.scene.add(rack);
        },

      "drawWarehouse" : () => {  
        for (var i = 0; i < this.webgl.scene.children.length; ){
          this.webgl.scene.remove(this.webgl.scene.children[i]);  
        };
        var warehouse = new Warehouse();
        this.webgl.scene.add(warehouse);
      },

      "drawRobot": () => {
        var robot = new Robot(50, 50, 50);
        robot.translateX(150);
        robot.translateY(25);
        this.webgl.scene.add(robot);
        let direction = false;
      
        const animate = () => {
          if (guiVars.animation) {
            if(robot.position.z == 100){
              
              direction = false;
            }
            if(robot.position.z == -100){
              direction = true;
            }
            if(direction == true){
              robot.translateZ(1);
            }else{
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

    var cleanScene = gui.add(guiVars, 'cleanScene');
    var drawBox = gui.add(guiVars, 'drawBox');
    var drawRack = gui.add(guiVars, 'drawRack');
    var drawWarehouse = gui.add(guiVars, 'drawWarehouse');
    var drawRobot = gui.add(guiVars, 'drawRobot');
    var animation = gui.add(guiVars, "animation");
    var customContainer = document.getElementById('GUI-output');
    customContainer.appendChild(gui.domElement);
}

}

