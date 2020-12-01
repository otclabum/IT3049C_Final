class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    //GOALS FOR SCENE 1:
    // much like phaser project 1, an opening scene

    preload(){
        this.load.image("python_projectile","src/images/projectiles/python_projectiles.png");
        this.load.image("yahya_projectile","src/images/projectiles/yahya_projectiles.png");
    }

    create(){
        
    }

    update(){

    }
}