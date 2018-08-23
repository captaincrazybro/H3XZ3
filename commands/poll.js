const Discord = require("discord.js");
const fs = require("fs");
let varrr = 0;
const botConfig = require("../botsettings.json");
let prefix = botConfig.prefix;

module.exports.run = async (bot, message, args) => {
	let voteLvl = 1;
/* 	let votes =  */
 	let voteNumber = args[0]; 
	if(args[0] === `start`){
		let poll = "";
		let n = 0;
		let msgArray = message.content.split(" | ");
		let fields = msgArray.slice(1); 
		while(fields[n] < fields.length){
/* 			message.channel.send("Poll"); */
			if(n === 0){
				let poll = fields[n];
				n++;
			}
			else{
				let poll = poll + fields[n];
				n++;
			}
		}
 		console.log(poll);
		message.channel.send(poll);
		message.delete().catch(O_o=>{}); 
	};
}

module.exports.help = {
	name: `${prefix}vote`
}
