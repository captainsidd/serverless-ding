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
    const service = this.serverless.service;
    const serviceName = service.service;
    const customVars = service.custom.serverlessDing;
    console.log(serviceName);
    console.log(customVars);
    if (customVars.soundFailure) {

    }
    if (customVars.soundSuccess) {

    }
    // at some point check for os type
    // display push notification
    // play appropriate sound (if success, happy.mp3 ; if failure, sad_trombone.mp3)
  }

}

module.exports = ServerlessCustomDomain;
