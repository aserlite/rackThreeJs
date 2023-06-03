'use strict';

class Robot extends THREE.Object3D{

    constructor(length,width,height) {
        super();
        var base = Robot.createMesh(new THREE.BoxGeometry(width,height, length), "acier.jpg")      
        
        var wheel1 = Robot.createMesh(new THREE.SphereGeometry( 5, 5, 5 ), "acier.jpg")
        wheel1.translateY(-25);
        wheel1.translateZ(length/2);
        wheel1.translateX(width/2);
        
        var wheel2 = Robot.createMesh(new THREE.SphereGeometry( 5, 5, 5 ), "acier.jpg")
        wheel2.translateY(-25);
        wheel2.translateZ(length/2);
        wheel2.translateX(-width/2);
    
        var wheel3 = Robot.createMesh(new THREE.SphereGeometry( 5, 5, 5 ), "acier.jpg")
        wheel3.translateY(-25);
        wheel3.translateZ(-length/2);
        wheel3.translateX(width/2);
    
        var wheel4 = Robot.createMesh(new THREE.SphereGeometry( 5, 5, 5 ), "acier.jpg")
        wheel4.translateY(-25);
        wheel4.translateZ(-length/2);
        wheel4.translateX(-width/2);
    
        
        
        this.add(wheel1);
        this.add(wheel2);
        this.add(wheel3);
        this.add(wheel4);
        this.add(base);

    }
    static createMesh(geom,imageFile) {
      var texture = THREE.ImageUtils.loadTexture("./material/" + imageFile);
      var mat = new THREE.MeshPhongMaterial();
      mat.map = texture;
  
      var mesh = new THREE.Mesh(geom, mat);
      return mesh;
    }
}