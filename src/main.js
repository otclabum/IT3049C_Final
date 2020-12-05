import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'
import GameScene  from './scenes/GameScene'

const config = {
	type: Phaser.AUTO,
	width: 640,
	height: 400,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 }
		}
	},
	scene: [GameScene]
}

export default new Phaser.Game(config)
