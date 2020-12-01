class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }

    //GOALS FOR SCENE 2
    // THE GAME ITSELF

    preload(){

    }

    create(){
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);

        //this.player = this.physics.add.sprite(config.width / 2-8, config.height - 64, "player");

        this.physics.world.setBoundsCollision();

        this.player.setCollideWorldBounds(true);
    }

    update(){

        this.background.tilePositionX += 0.5; //Need to set move stage no player move.

        this.movePlayerManager();

    }

    movePlayerManager() {
        this.player.setVelocity(0);

        // if (this.cursorKeys.left.isDown) {
        //     this.player.setVelocityX(-gameSettings.playerSpeed);
        //   } else if (this.cursorKeys.right.isDown) {
        //     this.player.setVelocityX(gameSettings.playerSpeed);
        //   }
      
        //   if (this.cursorKeys.up.isDown) {
        //     this.player.setVelocityY(-gameSettings.playerSpeed);
        //   } else if (this.cursorKeys.down.isDown) {
        //     this.player.setVelocityY(gameSettings.playerSpeed);
        //   }
    }

}