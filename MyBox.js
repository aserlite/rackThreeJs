'use strict';

class MyBox extends THREE.Object3D {

  constructor(length,width,height,thickness) {
    super();

    var base = MyBox.createMesh(new THREE.BoxGeometry(width,thickness, length ), "wood.jpg")
    base.translateY(-height/2);
    
    
    var side1 = MyBox.createMesh(new THREE.BoxGeometry( width , height , thickness ), "wood.jpg")
    side1.translateZ(-length/2);
    
    var side2 = MyBox.createMesh(new THREE.BoxGeometry(width, height,thickness), "wood.jpg")
    side2.translateZ(length/2);

    var side3 = MyBox.createMesh(new THREE.BoxGeometry(thickness, height, length), "wood.jpg")
    side3.translateX(width/2);

    var side4 = MyBox.createMesh(new THREE.BoxGeometry(thickness,height, length ), "wood.jpg")
    side4.translateX(-width/2);
    
    
    
    this.add(side1);
    this.add(side2);
    this.add(side3);
    this.add(side4);
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
