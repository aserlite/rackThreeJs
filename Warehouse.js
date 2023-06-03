'use strict';

class Warehouse extends THREE.Group{
    constructor(){
        super();
        var ground = Warehouse.createMesh(new THREE.BoxGeometry(500,2,400), "beton.jpg")
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


        const light = new THREE.AmbientLight( 0x404040 ); // soft white light
        this.add( light );

    }
    static createMesh(geom,imageFile) {
        var texture = THREE.ImageUtils.loadTexture("./material/" + imageFile);
        var mat = new THREE.MeshPhongMaterial();
        mat.map = texture;
    
        var mesh = new THREE.Mesh(geom, mat);
        return mesh;
      }
}