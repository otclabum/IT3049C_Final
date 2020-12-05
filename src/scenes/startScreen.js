import Phaser from 'phaser'

export default class startScreen extends Phaser.Scene
{
	constructor()
	{
		super('startScreen')
	}

	preload()
    {
      this.load.image(`codeheadboxxart`, `images/codeheadboxart.png`);
    }
    clickButton() {
      this.scene.start(`game-scene`);
      console.log(`click`);
  }
    create()
    {
      this.add.sprite(320, 200, 'codeheadboxxart').setScale(.6);
      //this.add.text(50,50, `PLAY GAME!`);
      var text = this.add.text(400,330, 'PLAY GAME!');
      text.setInteractive({ useHandCursor: true });
      text.on('pointerdown', () => this.clickButton());
    }
}
