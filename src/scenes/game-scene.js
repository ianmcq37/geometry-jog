import { Player } from "../game-objects/player";

export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: "game"});
    }

    preload() {
        //this will get called by phaser automatically when the scene loads
    }

    create() {
        this. width = this.sys.game.config.width;
        this.height = this.sys.game.config.height;

        //set background color
        this.cameras.main.setBackgroundColor(0x87ceeb);

        this.player = new Player (this, this.width / 2, this.height / 2);
    }

    update() {
        this.player.update();
    }
}