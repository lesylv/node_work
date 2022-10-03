const userInfo = require ("./information");
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `my name is ${userInfo.name} from ${userInfo.campus}`,
    e : "oO" ,
    T : "U",
}))