const Discord = require("discord.js");
const botConfig = require("../botsettings.json");
let prefix = botConfig.prefix;

module.exports.run = async (bot, message, args) => {
	
	let fortniteEmbed = new Discord.RichEmbed()
		.setColor("YELLOW")
		.setTitle("Fortnite Roster")
		.addField("Tier 1", "H3X_Joe")
		.addField("Tier 2", "engulfedinlight (Pro) \nttv.ClassicMW (Pro)")
		.addField("Tier 3", "H3X Risk \nH3X Master \nBobb1515 \nH3X_Dragon \nH3X_Alex \ngodly77 \nTMG_DarkGod101 \nCaptKamikaze");
		
	message.channel.send(fortniteEmbed);
	
}

module.exports.help = {
	name: `${prefix}fortnite`
}