const baseRouter = {
  ipBlacklist: [],
  online: true,
  forwardPacket(destinationIp, packet) {
    if (this.ipBlacklist.includes(destinationIp)) {
      return;
    }

    console.log('Forwarding packet', packet, 'to', destinationIp);
  }
};

const createRouter = () => {
  const router = Object.create(baseRouter);

  router.ipBlacklist = [];

  return router;
};

//

const ciscoRouter = createRouter();
ciscoRouter.ipBlacklist.push('1.2.3.4');

ciscoRouter.forwardPacket('1.2.3.4', 'blacklisted hello world');
ciscoRouter.forwardPacket('1.2.3.5', 'this will be forwarded');

console.log(ciscoRouter.online); // true

baseRouter.online = false;

console.log(ciscoRouter.online); // false

const juniperRouter = createRouter();
console.log(juniperRouter.online); // false
