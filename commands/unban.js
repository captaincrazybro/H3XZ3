const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let ubUser = message.guild.member(message.guild.members.get(args[0]));
	if(!ubUser) return message.channel.send(":x:" + " ***I can't fine that user***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});
	if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(":x:" + " You do not have permission to execute this command").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});
	if(ubUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x:" + " ***This user can not be banned!***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});
	let ubanChannel = message.guild.channels.find(`name`, "automodlog");
	if(!ubanChannel) return message.channel.send(":x:" + " ***I can't find this channel***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});
	
	let ubReason = args.slice(2).join(" ");
	
	if(!ubReason) return message.channel.send(":x:" + " ***Please specify a reason and/or a time***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});
		
	let banTEmbed = new Discord.RichEmbed()
		.setDescription("TempBan")
		.setColor("RED")
		.addField("Banned User", `${bUser} with ID: ${bUser.id}`)
		.addField("Banned By", `<@${message.author.id}> with ID: ${message.author.id}`)
		.addField("Banned In", message.channel)
		.addField("Time", message.createdAt)
		.addField("How Long", bantime)
		.addField("Reason", bReason); 	
			
	message.guild.unban(ubUser); 
	message.channel.send(":white_check_mark: ***" + `${bUser}` + "*** ***has been banned***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});
}

module.exports.help = {
    name: "unban"
}