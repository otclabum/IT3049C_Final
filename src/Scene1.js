class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    //GOALS FOR SCENE 1:
    // much like phaser project 1, an opening scene

    preload(){
        this.load.image("background", "images/background.png");
        this.load.image("python_projectile","images/projectiles/python_projectile.png");
        this.load.image("yahya_projectile","images/projectiles/yahya_projectile.png");
        this.load.spritesheet("yahyaidle","images/yahya/idle/yahyaidle.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("yahyawalk","images/yahya/walk/yahywalk.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("yahyashoot","images/yahya/shoot/yahyashoot.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("yahyadmg","images/yahya/dmg/yahyadmg.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("yahyajump","images/yahya/jump/yahyajump.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("pythonidle","images/python/idle/pythonidle.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("pythonspit","images/python/spit/pythonspit.png",{
            frameWidth: 16,
            frameHeight: 16
        });

    }

    create(){
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");

        this.anims.create({
            key: "yahyaidle_anim",
            frames: this.anims.generatedFrameNumbers("yahyaidle"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "yahyawalk_anim",
            frames: this.anims.generatedFrameNumbers("yahyawalk"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "yahyashoot_anim",
            frames: this.anims.generatedFrameNumbers("yahyashoot"),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "yahyadmg_anim",
            frames: this.anims.generatedFrameNumbers("yahyadmg"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true,
        });
        this.anims.create({
            key: "yahyajump_anim",
            frames: this.anims.generatedFrameNumbers("yahyajump"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true,
        });
        this.anims.create({
            key: "pythonidle_anim",
            frames: this.anims.generatedFrameNumbers("pythonidle"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true,
        });
        this.anims.create({
            key: "pythonspit_anim",
            frames: this.anims.generatedFrameNumbers("pythonspit"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true,
        });
    }

    update(){

    }
}
