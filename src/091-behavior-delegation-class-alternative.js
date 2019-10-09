{
  // ES5
  function Router() {
    this.ipBlacklist = [];
    this.online = false;
  }

  Router.prototype.forwardPacket = function() {
    if (this.ipBlacklist.includes(destinationIp)) {
      return;
    }

    console.log('Forwarding packet', packet, 'to', destinationIp);
  };

  const ciscoRouter = new Router();
}

{
  // ES6
  class Router {
    constructor() {
      this.ipBlacklist = [];
      this.online = false;
    }

    forwardPacket() {
      if (this.ipBlacklist.includes(destinationIp)) {
        return;
      }

      console.log('Forwarding packet', packet, 'to', destinationIp);
    }
  }

  const ciscoRouter = new Router();
}
