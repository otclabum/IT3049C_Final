import Phaser from 'phaser'

import Background from '../public/images/background'

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: [Background]
}

export default new Phaser.Game(config)