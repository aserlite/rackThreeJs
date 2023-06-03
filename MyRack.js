'use strict';

class MyRack extends THREE.Group{
    constructor(){
        super();
        var stage1 = new Stage();
        this.add(stage1); 

        var stage2 = new Stage();
        stage2.translateY(50);
        this.add(stage2); 

        var stage3 = new Stage();
        stage3.translateY(100);
        stage3.rotateZ(-25);
        this.add(stage3); 
        
        var spotlight = new THREE.SpotLight(0xffffff, 1);
        spotlight.position.set( 0, 200, 0 );
        spotlight.lookAt(0,0,0);
        spotlight.castShadow=true;
        this.add( spotlight );

    }
  
}