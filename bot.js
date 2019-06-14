const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("589144760758042626")
setInterval(function() {
channel.send(`Hi`);
}, 30)
})

client.login(process.env.BOT_TOKEN);