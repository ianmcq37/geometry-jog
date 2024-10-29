export class Player extends Phaser.GameObjects.Rectangle {
    constructor(scene, x, y) {
        super(scene, x, y, 32, 32, 0x000000);
        
        //set origin to middle of rectangle
        this.setOrigin(0.5);
        
        //add ourself to the existing scene (this = player class)
        this.scene.add.existing(this);
        
        //tell physics about ourself
        this.scene.physics.add.existing(this);
        this.body.collideWorldBounds = true;

        //set our initial scale (increasing makes player bigger)
        this.setScale(1);
    }
}