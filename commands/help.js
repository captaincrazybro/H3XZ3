const Discord = require("discord.js");
const botConfig = require("../botsettings.json");
let prefix = botConfig.prefix;

module.exports.run = async (bot, message, args) => {
	if(args[0] === `mod`){
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
		let modEmbed = new Discord.RichEmbed()
			.setColor(`BLUE`)
			.setTitle("Mod Help")
			.setDescription("'[]' are not included in the commands")
			.addField("/warn [user] [reason]", "Warns a user")
			.addField("/warnings [user]", "How many warnings a user has had")
			.addField("/mute [user] [how long (I.E. 1m, 3d etc.)] [reason]", "Mutes a user for specified amount of time")
			.addField("/unmute [user]", "Unmutes a user")
			.addField("/kick [user] [reason]", "Kicks a user from the guild")
			.addField("/ban [user] [how long (I.E. 1m, 3d etc.)] [reason]", "Bans a user from the guild for a specified amount of time")
			.addField("/ban [user]", "Bans a user form the guild");
		
		message.channel.send(modEmbed);
		message.delete().catch(O_o=>{});
		return;
	}
	let helpEmbed = new Discord.RichEmbed()
		.setColor(`#ffff00`)
		.setDescription("'[]' are not included in the commands")
		.setTitle(`Commands for ${message.guild.name}`)
		.addField(":scroll: Rosters", "`/tier (6 - elite)`: The rosters of the tiers \n`/z3`: Z3 roster, `/a1`: A1 roster \n`/arouz`: ArouzH3X roster, `/emnas`: EmnasH3X roster")
		.addField(":question: Clan Help", "`/rankup`: How to rank up")
		.addField(":gear: Utilities", "`/embed [content/description]`: Sends and embedded message from the bot \n`/embed title [title] [content/description]`: Sends and embedded message with a title \n`/embed color [color in caps (E.I. RED)] [content/description]`: Sends an embedded message with a color \n`/embed color title [color in caps (E.I. RED)] [title] [content/description]`: Sends an embedded message with a color and title `\n/roll [how high the highest possible role is]`: Rolls a number")
		.addField(":smile: Fun", "`/8ball [question for 8ball]`: Asks 8ball a question")
		.addField(":warning: Report", "`/report [user] [reason]`: Reports a user");
	
	message.channel.send(helpEmbed);
	message.delete().catch(O_o=>{});
}

module.exports.help = {
	name: `${prefix}help`
}