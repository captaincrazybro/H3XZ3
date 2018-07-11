const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	message.channel.send({embed: {
		color: 3447003,
		title: "A1 Roster",
		description: "```Hexxel  \nBelnapZ3  \nVevuxZ3  \ \niCharmanderZ3  \nTidalZ3             ```"
	}});
	message.delete().catch(O_o=>{});
}

module.exports.help = {
	name: "z3"
}