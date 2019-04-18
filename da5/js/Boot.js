"use strict";

var BasicGame = {};

BasicGame.Boot = function (game) {

};

BasicGame.Boot.prototype = {

    init: function () {

        //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
        this.input.maxPointers = 1;

        //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
        this.stage.disableVisibilityChange = true;

        if (this.game.device.desktop)
        {
            //  If you have any desktop specific settings, they can go in here
            this.scale.pageAlignHorizontally = true;
        }
        else
        {
            //  Same goes for mobile settings.
            //  In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(480, 260, 1024, 768);
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally = true;
        }

    },

    preload: function () {

        //  Here we load the assets required for our Preloader state (in this case a background and a loading bar)
        // this.load.image('preloaderBackground', 'assets/preloader_background.jpg');
        // this.load.image('preloaderBar', 'assets/preloader_bar.png');
        // this.load.spritesheet('ninya', 'assets/Ninja/ninya.png', 64,128);
        // this.load.image('preloaderScene', 'assets/Ninja/preloading_ninja.png')
        // this.load.image('letterScene', 'assets/Ninja/ninja_letters.png');
        // this.load.image('maintitle', 'assets/Ninja/maintitle.png');

        this.load.image('main_title', 'assets/main_title.png');
        this.load.image('firstScene', 'assets/crimescene.png');


    },

    create: function () {

        //  By this point the preloader assets have loaded to the cache, we've set the game settings
        //  So now let's start the real preloader going
        this.state.start('Preloader');

    }

};