import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super('hello-world')
	}

	preload()
    {
        this.load.image("background", "images/background.png");
        this.load.image("python_projectile","images/projectiles/python_projectile.png");
        this.load.image("yahya_projectile","images/projectiles/yahya_projectile.png");
        this.load.spritesheet("yahyaidle","images/yahya/idle/yahyaidle.png",{
            frameWidth: 16,
            frameHeight: 16
        });
        this.load.spritesheet("yahyawalk","images/yahya/walk/yahyawalk.png",{
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

    create()
    {
        this.anims.create({
            key: "yahyaidle_anim",
            frames: this.anims.generateFrameNumbers("yahyaidle", { start: 0, end: 3}),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "yahyawalk_anim",
            frames: this.anims.generateFrameNumbers("yahyawalk", { start: 0, end: 3}),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "yahyashoot_anim",
            frames: this.anims.generateFrameNumbers("yahyashoot", { start: 0, end: 4}),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "yahyadmg_anim",
            frames: this.anims.generateFrameNumbers("yahyadmg", { start: 0, end: 9}),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true,
        });
        this.anims.create({
            key: "yahyajump_anim",
            frames: this.anims.generateFrameNumbers("yahyajump", { start: 0, end: 12}),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true,
        });
        this.anims.create({
            key: "pythonidle_anim",
            frames: this.anims.generateFrameNumbers("pythonidle", { start: 0, end: 9}),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true,
        });
        this.anims.create({
            key: "pythonspit_anim",
            frames: this.anims.generateFrameNumbers("pythonspit", { start: 0, end: 5}),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true,
        });
    }
}
