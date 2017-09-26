'use strict';


class ServerlessCustomDomain {

  constructor(serverless) {
    this.serverless = serverless;
    this.hooks = {
      'after:deploy:deploy': this.alertUser.bind(this),
    };
  }

  alertUser() {
    // get config from serverless.yml
    // at some point check for os type
    // display push notification
    // play appropriate sound (if success, happy.mp3 ; if failure, sad_trombone.mp3)
  }

}

module.exports = ServerlessCustomDomain;
