'use strict';

class MyBox extends THREE.Object3D {

  constructor(length,width,height,thickness) {
    super();

    var base = MyBox.createMesh(new THREE.BoxGeometry(width,thickness, length ))
    base.translateY(-height/2);
    
    
    var side1 = MyBox.createMesh(new THREE.BoxGeometry( width , height , thickness ))
    side1.translateZ(-length/2);
    
    var side2 = MyBox.createMesh(new THREE.BoxGeometry(width, height,thickness))
    side2.translateZ(length/2);

    var side3 = MyBox.createMesh(new THREE.BoxGeometry(thickness, height, length))
    side3.translateX(width/2);

    var side4 = MyBox.createMesh(new THREE.BoxGeometry(thickness,height, length ))
    side4.translateX(-width/2);
    
    
    
    this.add(side1);
    this.add(side2);
    this.add(side3);
    this.add(side4);
    this.add(base);

    var spotlight = new THREE.SpotLight(0xffffff, 1);
        spotlight.position.set( 0, 50, 0 );
        spotlight.lookAt(20,0,0);
        spotlight.castShadow=true;
        this.add( spotlight );
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
