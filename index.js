'use strict';


class ServerlessCustomDomain {

  constructor(serverless) {
    this.serverless = serverless;
    this.hooks = {
      'after:deploy:deploy': this.beepBeep.bind(this),
    };
  }

  beepBeep() {
    process.stdout.write('\x07');
    process.stdout.write('\x07');
  }

}

module.exports = ServerlessCustomDomain;
