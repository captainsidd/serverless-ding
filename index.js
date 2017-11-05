'use strict';

// const player = require('play-sound')();
var Player = require('player'); // @TODO USE THIS!!!!
const fs = require('fs');


class ServerlessCustomDomain {

  constructor(serverless) {
    this.serverless = serverless;

    // hooks tell when to run what function
    this.hooks = {
      'after:deploy:deploy': this.alertUser.bind(this),
    };
  }

  /**
   * Alerts the user with a doorbell noise
   */
  alertUser() {
    if (fs.existsSync('doorbell.wav')) {
        console.log('stuff exists!!!');
    }
    player.play('doorbell.wav', (err) => {
      if (err) {
        this.serverless.cli.consoleLog('Notifying user of deploy failed.');
        console.log(err);
      }
    });
  }

}

module.exports = ServerlessCustomDomain;
