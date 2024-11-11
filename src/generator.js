import { Cloud } from "./game-objects/cloud";
import { Obstacle } from "./game-objects/obstacle";

export class Generator {
    constructor(scene) {
        this.scene = scene;

        //call the initialize method after 2 seconds
        this.scene.time.delayedCall(2000, () => this.initialize(), undefined, this);
    }

    initialize() {
        this.generateCloud();
        this.generateObstacle();
    }
    
    generateCloud() {
        new Cloud(this.scene);
        this.scene.time.delayedCall(
            Phaser.Math.Between(2000, 3000),
            () => this.generateCloud(),
            undefined,
            this
        );
    }

    generateObstacle() {
        this.scene.obstacles.add(new Obstacle(this.scene));
        this.scene.time.delayedCall(
            Phaser.Math.Between(1000, 2000),
            () => this.generateObstacle(),
            undefined,
            this
        );
    }
}