class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    //GOALS FOR SCENE 1:
    // much like phaser project 1, an opening scene

    preload(){
        this.load.image("background", "images/background.png");
        // this.load.image("python_projectile","images/projectiles/python_projectiles.png");
        // this.load.image("yahya_projectile","images/projectiles/yahya_projectiles.png");

        //This sprite falls off the page, needs some more work. 
        this.load.spritesheet("player", "images/yahya/idle/yahyaidle.png",{
            frameWidth: 16,
            frameHeight: 24
          });
    }

    create(){
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");

    }

    update(){

    }
}
