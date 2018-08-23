const Discord = require("discord.js")
const botConfig = require("../botsettings.json");
let prefix = botConfig.prefix;

module.exports.run = async (bot, message, args) => {
	let d = args[0];
	let dice = Math.floor(Math.random() * d) + 1;
	
	message.channel.send(dice);
}

module.exports.help = {
	name: `${prefix}roll`
}