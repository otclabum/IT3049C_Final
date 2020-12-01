
const config = {
    width: 640,
    height: 400,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2],
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    }
}

var game = new Phaser.Game(config);