//@ts-check
import "./css/style.css";
import Phaser from "phaser";
import { GameScene } from "./scenes/game-scene";
import { HEIGHT, WIDTH } from "./constants";

/** @type { Phaser.Types.Core.GameConfig } */
const config = {
	width: WIDTH,
	height: HEIGHT,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	},
	parent: "app",
    scene: [GameScene],
	physics: {
		default: "arcade",
		arcade: {
			gravity: { x:0, y:500 },
			debug: true,
		},
	},
};

const game = new Phaser.Game(config);