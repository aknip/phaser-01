// create a new scene
let gameScene = new Phaser.Scene('Game');
 
// load assets
gameScene.preload = function(){
  // load images
  this.load.image('background', 'https://jsbin-user-assets.s3.amazonaws.com/fariazz/original-background.png');
  this.load.image('player', 'https://jsbin-user-assets.s3.amazonaws.com/fariazz/player.png');
};
 


// called once after the preload ends
gameScene.create = function() {
  // create bg sprite
  let bg = this.add.sprite(0, 0, 'background');
 
  // place sprite in the center
  bg.setPosition(640/2, 360/2);
 
  let gameW = this.sys.game.config.width;
  let gameH = this.sys.game.config.height;
  
  let player = this.add.sprite(70, 180, 'player');
};
 
// set the configuration of the game
let config = {
  type: Phaser.AUTO, // Phaser will use WebGL if available, if not it will use Canvas
  width: 640,
  height: 360,
  scene: gameScene
};
 
// create a new game, pass the configuration
let game = new Phaser.Game(config);