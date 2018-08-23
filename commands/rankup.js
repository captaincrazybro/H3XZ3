const Discord = require("discord.js");
const botConfig = require("../botsettings.json");
let prefix = botConfig.prefix;

module.exports.run = async (bot, message, args, cmd) => {
	let rankUpEmbed = new Discord.RichEmbed()
		.setColor("GREEN")
		.setTitle("How to rank up")
		.setDescription("The H3X Staff team has created a system called the Tier Leader System. With this each tier has a leader or someone who is put in the position to get to know as many individuals as possible. You will need to be evaluated by the leader of the next Tier you are going into. It's up to the Tier leader to decide if a player is good enough for the Tier.The H3X Staff team has created a system called the Tier Leader System. With this each tier has a leader or someone who is put in the position to get to know as many individuals as possible. You will need to be evaluated by the leader of the next Tier you are going into. It's up to the Tier leader to decide if a player is good enough for the Tier.")
		.addField("Here are the Tiers and Leaders (and those assisting each Tier)","Tier Elite-  TBD \nTier 1-  JoshZ3 \nTier 2-  GodlyZ3 \nTier 3-  ItsJacobZ3 Tier 4-  captcrazybro_H3X \nTier 5- Be in the clan for 3 weeks to reach Tier 5 \nTier 6- Hentu - Starting tier")
		.addField("In order for each leader to get to know you better and to rank up make sure to fill out the request to contact your tier leader under the applications tab. \nHaving the following amount of points will make you get promoted instantly:", "Tier Elite - 1100 \nTier 1 - 750 \nTier 2 - 600 \nTier 3 - 400 \nTier 4 - 250 \nTier 5 - 100");
	message.channel.send(rankUpEmbed);
}

module.exports.help = {
	name: `${prefix}rankup`
}