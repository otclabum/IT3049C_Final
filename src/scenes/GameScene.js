import Phaser from 'phaser'

const GROUND_KEY = 'ground'
const PLAYER_KEY = 'yahya'

export default class GameScene extends Phaser.Scene
{
	constructor()
	{
		super('game-scene')

		this.player = undefined
		this.cursors = undefined

	}

	preload()
	{
		this.load.image('forest', 'images/background.png');
		this.load.image(GROUND_KEY, 'images/platform.png');

		this.load.spritesheet(PLAYER_KEY, 'images/yahya/idle/yadyaidle.png', 
			{ frameWidth: 32, frameHeight: 48 }
		)
	}

	create()
	{
		this.add.sprite(320, 200, 'forest');
		const platforms = this.createPlatforms()
		this.player = this.createPlayer()

		this.physics.add.collider(this.player, platforms)

		this.cursors = this.input.keyboard.createCursorKeys()
	
	}

	update()
	{
		// if (this.cursors.left.isDown)
		// {
		// 	this.player.setVelocityX(-160)

		// 	this.player.anims.play('left', true)
		// }
		// else if (this.cursors.right.isDown)
		// {
		// 	this.player.setVelocityX(160)

		// 	this.player.anims.play('right', true)
		// }
		// else
		// {
		// 	this.player.setVelocityX(0)

		// 	this.player.anims.play('turn')
		// }

		// if (this.cursors.up.isDown && this.player.body.touching.down)
		// {
		// 	this.player.setVelocityY(-330)
		// }
	}

	createPlatforms()
	{
		const platforms = this.physics.add.staticGroup();

		platforms.create(400, 368, 'GROUND_KEY').setScale(2).refreshBody()

		return platforms
	}

	createPlayer()
	{
		const player = this.physics.add.sprite(100, 450, PLAYER_KEY)
		player.setBounce(0.2)
		player.setCollideWorldBounds(true)

		this.anims.create({
			key: 'left',
			frames: this.anims.generateFrameNumbers(PLAYER_KEY, { start: 0, end: 3 }),
			frameRate: 10,
			repeat: -1
		})
		
		this.anims.create({
			key: 'turn',
			frames: [ { key: PLAYER_KEY, frame: 4 } ],
			frameRate: 20
		})
		
		this.anims.create({
			key: 'right',
			frames: this.anims.generateFrameNumbers(PLAYER_KEY, { start: 5, end: 8 }),
			frameRate: 10,
			repeat: -1
		})
		return player
	}
}