'use strict';

class Robot extends THREE.Object3D{

    constructor(length,width,height) {
        super();
        var base = Robot.createMesh(new THREE.BoxGeometry(width,height, length))      
        
        var wheel1 = Robot.createMesh(new THREE.SphereGeometry( 5, 5, 5 ))
        wheel1.translateY(-25);
        wheel1.translateZ(length/2);
        wheel1.translateX(width/2);
        
        var wheel2 = Robot.createMesh(new THREE.SphereGeometry( 5, 5, 5 ))
        wheel2.translateY(-25);
        wheel2.translateZ(length/2);
        wheel2.translateX(-width/2);
    
        var wheel3 = Robot.createMesh(new THREE.SphereGeometry( 5, 5, 5 ))
        wheel3.translateY(-25);
        wheel3.translateZ(-length/2);
        wheel3.translateX(width/2);
    
        var wheel4 = Robot.createMesh(new THREE.SphereGeometry( 5, 5, 5 ))
        wheel4.translateY(-25);
        wheel4.translateZ(-length/2);
        wheel4.translateX(-width/2);
    
        
        
        this.add(wheel1);
        this.add(wheel2);
        this.add(wheel3);
        this.add(wheel4);
        this.add(base);

    }
    static createMesh(geom) {
    let meshMaterial = new THREE.MeshPhongMaterial();
    meshMaterial.side = THREE.DoubleSide;
    let wireFrameMat = new THREE.MeshPhongMaterial({color:0x00ff00});
    wireFrameMat.wireframe = true;
    let mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial, wireFrameMat]);
    return mesh;
  }
}