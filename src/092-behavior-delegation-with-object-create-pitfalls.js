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

  // why it's important to create a new `ipBlacklist` array
  // router.ipBlacklist = [];

  return router;
};

//

const ciscoRouter = createRouter();
ciscoRouter.ipBlacklist.push('1.2.3.4');
const juniperRouter = createRouter();
juniperRouter.ipBlacklist.push('1.2.3.5');

ciscoRouter.forwardPacket('1.2.3.4', 'blacklisted hello world');
ciscoRouter.forwardPacket('1.2.3.5', 'this will be blacklisted too');

const ciscoRouter = createRouter();
ciscoRouter.ipBlacklist.push('1.2.3.4');
const juniperRouter = createRouter();
juniperRouter.ipBlacklist.push('1.2.3.5');

console.log(ciscoRouter.ipBlacklist); // ['1.2.3.4', '1.2.3.5']
console.log(baseRouter.ipBlacklist); // ['1.2.3.4', '1.2.3.5']
console.log(ciscoRouter.ipBlacklist === juniperRouter.ipBlacklist); // true
