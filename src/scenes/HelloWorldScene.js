import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super('hello-world')
	}

	preload()
    {
        this.load.image('background', '../images/background.png')
    }

    create()
    {
        this.add.image(400, 300, 'sky')
    }
}
