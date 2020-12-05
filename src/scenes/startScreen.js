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
      var text = this.add.text(320,310, 'PLAY GAME!', {fontSize: `25px`, fill: `red`, fontStyle: `bold`});
      text.setInteractive({ useHandCursor: true });
      text.on('pointerdown', () => this.clickButton());
    }
}
