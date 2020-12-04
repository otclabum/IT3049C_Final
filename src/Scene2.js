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

        // this.yahyaidle = this.physics.add.sprite(config.width / 2-8, config.height - 64, "yahyaidle");
        // this.yahyaidle.play("yahyaidle_anim");
        yahyaidle = create_yahya(config.width / 2-8, config.height - 64, "yahyaidle");
        pythonidle = create_python();

        this.pythonidle = this.physics.add.sprite(config.width / 2-8, config.height - 64, "pythonidle");
        this.pythonidle.play("pythonidle_anim");

        this.physics.world.setBoundsCollision();

        this.player.setCollideWorldBounds(true);
    }

    update(){

        this.background.tilePositionX += 0.5; //Need to set move stage no player move.

        this.movePlayerManager();

    }

    movePlayerManager() {
        this.player.setVelocity(0);

        if (this.cursorKeys.left.isDown) {
            this.player.setVelocityX(-gameSettings.playerSpeed);
            this.yahyaidle = this.physics.change.sprite(config.width / 2-8, config.height - 64, "yahyawalk");
          } else if (this.cursorKeys.right.isDown) {
            this.player.setVelocityX(gameSettings.playerSpeed);
            this.yahyaidle = this.physics.change.sprite(config.width / 2-8, config.height - 64, "yahyawalk");
          }
      
          if (this.cursorKeys.up.isDown) {
            this.player.setVelocityY(-gameSettings.playerSpeed);
            this.yahyaidle = this.physics.change.sprite(config.width / 2-8, config.height - 64, "yahyajump");
          } else if (this.cursorKeys.down.isDown) {
            this.player.setVelocityY(gameSettings.playerSpeed);
          }
    }

    create_yahya(x,y){
        var yahya = game.add.sprite(x,y, "yahyaidle");
        yahya.body.collideWorldBounds = true;
    }
    create_python(x,y){
        var python = game.add.sprite(x,y, "pythonidle");
    }

}