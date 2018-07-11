const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	message.channel.send({embed: {
		color: 3447003,
		title: "A1 Roster",
		description: "```GodlyZ3 \nDivineRekz_A1 \ \nMrRedstoneA1 \nNattanatorH3XA1 \nNoobA1 \nOmegaGeagle12A1 \ \nRubikA1 \nSessA1 \ \n_ShiiftyA1             ```"
	}});
	message.delete().catch(O_o=>{});
}

module.exports.help = {
	name: "a1"
}