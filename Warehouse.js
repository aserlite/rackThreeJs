'use strict';

class Warehouse extends THREE.Group{
    constructor(){
        super();
        var ground = MyBox.createMesh(new THREE.BoxGeometry(500,2,400))
        ground.translateY(-10);
        ground.translateX(100);
        this.add(ground);
         
        var rack1 = new MyRack();
        this.add(rack1); 

        var rack2 = new MyRack();
        rack2.translateZ(75);
        this.add(rack2); 

        var rack3 = new MyRack();
        rack3.translateZ(-75);
        this.add(rack3); 


        const light = new THREE.AmbientLight(0x404040);
        light.intensity = 5;
        this.add(light);
    }
  
}