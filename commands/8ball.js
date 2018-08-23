const Discord = require("discord.js");
const botConfig = require("../botsettings.json");
let prefix = botConfig.prefix;

module.exports.run = async (bot, message, args) => {
	if(!args[0]) return message.channel.send("Please specify a question");
	let pick = Math.floor(Math.random() * 11); 
	
	if(pick === 0){
		let answer = "Absolutely not!"
		message.channel.send(answer)
	}
	if(pick === 1){
		let answer = "Sure"
		message.channel.send(answer)
	}
	if(pick === 2){
		let answer = "Yes"
		message.channel.send(answer)
	}
	if(pick === 3){
		let answer = "Maybe... :thinking:"
		message.channel.send(answer)
	}
	if(pick === 4){
		let answer = "I can't answer now"
		message.channel.send(answer)
	}
	if(pick === 5){
		let answer = "Probably not"
		message.channel.send(answer)
	}
	if(pick === 6){
		let answer = "Definitely" 
		message.channel.send(answer)
	}
	if(pick === 7){
		let answer = "Never"
		message.channel.send(answer)
	}
	if(pick === 8){
		let answer = "Possibly"
		message.channel.send(answer)
	}
	if(pick === 9){
		let answer = "Not now..."
		message.channel.send(answer)
	}
	if(pick === 10){
		let answer = "Not sure"
		message.channel.send(answer)
	}
}

module.exports.help = {
    name: `${prefix}8ball`
}