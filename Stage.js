'use strict';

class Stage extends THREE.Group{
    constructor(){
        super();
        var box1 = new MyBox(50,30,15,.2);
        this.add(box1);
        
        var box2 = new MyBox(50,30,15,.2);
        box2.translateX(50);
        this.add(box2);

        var base = MyBox.createMesh(new THREE.BoxGeometry(150,2,60))
        base.translateY(-7.5);
        this.add(base);   
                
    }
  
}