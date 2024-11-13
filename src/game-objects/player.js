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

        this.scene.input.on("pointerdown", () => this.jump(), this);

        this.space = this.scene.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
        );

        this.jumpTween = this.scene.tweens.add({
            targets: this,
            duraiton: 1000,
            repeat: -1,
            angle: { from: 0, to: 180 }
        });
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(this.space)) {
            this.jump();
        } else if (this.body.blocked.down) {
            this.jumpTween.pause();
            this.rotation = 0;
        }
    }

    jump() {
        if(!this.body.blocked.down) {
            return;
            //don't jump if in air
        }

        this.body.setVelocityY(-500);

        this.jumpTween.restart();

        // this.jumpTween = this.scene.tweens.add({
        //     targets: this,
        //     duraiton: 1000,
        //     repeat: -1,
        //     angle: { from: 0, to: 360 }
        // });
    }
}