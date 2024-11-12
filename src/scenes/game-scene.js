import { HEIGHT, WIDTH } from "../constants";
import { Player } from "../game-objects/player";
import { Generator } from "../generator";
import { Obstacle } from "../game-objects/obstacle";

export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: "game"});

        this.obstacles;
    }

    preload() {
        //this will get called by phaser automatically when the scene loads

        //load font
        this.load.bitmapFont(
            "arcade",
            "/assets/fonts/arcade.png",
            "/assets/fonts/arcade.xml",
        );
    }

    create() {
        //set background color
        this.cameras.main.setBackgroundColor(0x87ceeb);

        this.obstacles = this.add.group();
        this.Generator = new Generator(this);

        this.player = new Player (this, WIDTH / 2, HEIGHT / 2);

        this.physics.add.collider(
            this.player,
            this.obstacles,
            this.hitObstacle,
            () => { return true; },
            this
            )
    }

    update() {
        this.player.update();
    }

    hitObstacle(player, obstacle) {
        console.log("you died");
    }
}