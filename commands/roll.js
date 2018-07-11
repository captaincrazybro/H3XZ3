const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
	let d = args[0];
	let dice = Math.floor(Math.random() * d) + 1;
	
	message.channel.send(dice);
}

module.exports.help = {
	name: "roll"
}