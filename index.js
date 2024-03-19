const information = require(`./information`);
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: ` hello I'm ${information.name} from ${information.campus}`,
    e: "oO",
    T: "U",
  })
);
