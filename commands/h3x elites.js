const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if(args[0] === `elites` || `Elites`){
		message.channel.send({embed: {
			color: 3447003,
			title: "H3X Elites",
			description: "```BarouzH3X \nCipherH3X \nDarkrai_H3X \nItsJacobH3X \nkoalaplayerA1 \nReedH3X             ```"
		}});
	};
	message.delete().catch(O_o=>{});
}

module.exports.help = {
	name: "h3x"
}