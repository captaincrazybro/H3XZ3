const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if(args[0] === `color`){
		if(args[1] === `title`){
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x:" + " ***You do not have permission to execute this command***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	}); 
			if(args[2] === `mention`){
			let mention = args[3];
			let color = args[4];
			let title = args[5];
			let description = args.slice(6).join(" ");
	
			if(!color) return message.channel.send(":x:" + " ***Please specify a color***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});
			if(!title) return message.channel.send(":x:" + " ***Please specify a title***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});
			if(!description) return message.channel.send(":x:" + " ***Please specify a description***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});
	
			let embeddedCT = new Discord.RichEmbed()
				.setTitle(`${title}`)
				.setColor(`${color}`)
				.setDescription(`${description}`);

			message.channel.send(mention);
			message.channel.send(embeddedCT);
			message.delete().catch(O_o=>{});
			return;
		}
			let color = args[2];
			let title = args[3];
			let description = args.slice(4).join(" ");
			
			if(!mention) return message.channel.send(":x:" + " ***Please specify a mention***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});
	
			if(!color) return message.channel.send(":x:" + " ***Please specify a color***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});
			if(!title) return message.channel.send(":x:" + " ***Please specify a title***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});
			if(!description) return message.channel.send(":x:" + " ***Please specify a description***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});
	
			let embeddedCT = new Discord.RichEmbed()
				.setTitle(`${title}`)
				.setColor(`${color}`)
				.setDescription(`${description}`);

			message.channel.send(embeddedCT);
			message.delete().catch(O_o=>{});
			return;
		}
		return;
	}
	if(args[0] === `color`){
		let color = args[1];
		let title = args[2];
		let description = args.slice(3).join(" ");
	
		if(!color) return message.channel.send(":x:" + " ***Please specify a color***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});
				if(!title) return message.channel.send(":x:" + " ***Please specify a title***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});
		if(!description) return message.channel.send(":x:" + " ***Please specify a description***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});
	
		let embeddedC = new Discord.RichEmbed()
			.setTitle(`${title}`)
			.setColor(`${color}`)
			.setDescription(`${description}`);
			
		message.channel.send(embeddedC);
		message.delete().catch(O_o=>{});
		return;
	}
	if(args[0] === `title`){
		let title = args[1];
		let description = args.slice(2).join(" ");
		
		if(!title) return message.channel.send(":x:" + " ***Please specify a title***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});
		if(!description) return message.channel.send(":x:" + " ***Please specify a description***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});		
		
		let embeddedT = new Discord.RichEmbed()
			.setTitle(`${title}`)
			.setDescription(`${description}`);
			
		message.channel.send(embedded);
		message.delete().catch(O_o=>{});
		return;
	}
	else{
		let description = args.slice(0).join(" ");
		
		if(!description) return message.channel.send(":x:" + " ***Please specify a description***").then(m => {
		message.delete().catch(O_o=>{});
		m.delete(5000);
	});		
		
		let embedded = new Discord.RichEmbed()
			.setDescription(`${description}`);
		message.channel.send(embedded);
		message.delete().catch(O_o=>{});
		return;
	}
	message.delete().catch(O_o=>{});
}

module.exports.help = {
	name: "embed"
}