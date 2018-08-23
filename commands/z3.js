const Discord = require("discord.js");
const botConfig = require("../botsettings.json");
let prefix = botConfig.prefix;

module.exports.run = async (bot, message, args) => {
	message.channel.send({embed: {
		color: 3447003,
		title: "Z3 Roster",
		description: "```Hexxel \nHentu \nBelnapZ3 \nGevarZ3 \nGodlyZ3 \nItsJacobZ3 \nNitroZ3 \nTidalZ3 \nVevuxZ3             ```"
	}});
	message.delete().catch(O_o=>{});
}

module.exports.help = {
	name: `${prefix}z3`
}
