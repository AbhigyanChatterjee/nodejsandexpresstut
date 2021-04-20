const os = require('os');

//info about curr user
const user = os.userInfo();
console.log(user);

//returns system uptime in sec
const uptime = os.uptime();
console.log(`The system uptime is : ${uptime}`);

const currOs = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currOs);