const botConfig = require("./botsettings.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

bot.commands = new Discord.Collection();  
fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
      console.log("Couldn't find commands.");
      return;
    }
  
    jsfile.forEach((f, i) =>{
		let commandsCollection = new Discord.Collection();
		let props = require(`./commands/${f}`);
      console.log(`${f} loaded!`);
      bot.commands.set(props.help.name, props);
    });
  });
  
  
bot.on("ready", async () => {
	console.log(`${bot.user.username} is online!`);
	bot.user.setPresence({ status: 'online', game: { name: 'h3x-z3.enjin.com' } });
});

bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	
	let prefix = botConfig.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);
	let tUser = message.guild.member(message.guild.members.get(args[0]));
	
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args,cmd,fs);
	
	if(cmd === `${prefix}arouzH3X`){
				message.channel.send({ embed: {
			color: 3447003,
			title: "ArouzH3X",
			description: "```Leader; BarouzH3X \nArouzH3X \nCaptarouzH3X \nMarouzH3X \nMegarouzH3X             ```"
		}});
		message.delete().catch(O_o=>{});
	};
	if(cmd === `${prefix}arouz`){
				message.channel.send({ embed: {
			color: 3447003,
			title: "ArouzH3X",
			description: "```Leader; BarouzH3X \nArouzH3X \nCaptarouzH3X \nMarouzH3X \nMegarouzH3X             ```"
		}});
		message.delete().catch(O_o=>{});
	};
	if(cmd === `${prefix}Arouz`){
				message.channel.send({ embed: {
			color: 3447003,
			title: "ArouzH3X",
			description: "```Leader; BarouzH3X \nArouzH3X \nCaptarouzH3X \nMarouzH3X \nMegarouzH3X             ```"
		}});
		message.delete().catch(O_o=>{});
	};
	if(cmd === `${prefix}ArouzH3X`){
		message.channel.send({ embed: {
			color: 3447003,
			itle: "ArouzH3X",
			description: "```Leader; BarouzH3X \nArouzH3X \nCaptarouzH3X \nMarouzH3X \nMegarouzH3X             ```"
	}});
	message.delete().catch(O_o=>{});
	};
	if(cmd === `${prefix}emnas`){
		message.channel.send({ embed: {
			color: 3447003,
			title: "EmnasH3X",
			description: "```Leader; BelnapZ3 \nBemnasH3X \nJemnasH3X \ \nVemnasH3X \nVeremnasH3X \nZremnasH3X             ```"
		}});
		message.delete().catch(O_o=>{});
	};
	if(cmd === `${prefix}Emnas`){
		message.channel.send({ embed: {
			color: 3447003,
			title: "EmnasH3X",
			description: "```Leader; BelnapZ3 \nBemnasH3X \nJemnasH3X \ \nVemnasH3X \nVeremnasH3X \nZremnasH3X             ```"
		}});
		message.delete().catch(O_o=>{});
	};
	if(cmd === `${prefix}EmnasH3X`){
		message.channel.send({ embed: {
			color: 3447003,
			title: "EmnasH3X",
			description: "```Leader; BelnapZ3 \nBemnasH3X \nJemnasH3X \ \nVemnasH3X \nVeremnasH3X \nZremnasH3X             ```"
		}});
		message.delete().catch(O_o=>{});
	};
	if(cmd === `${prefix}emnasH3X`){
		message.channel.send({ embed: {
			color: 3447003,
			title: "EmnasH3X",
			description: "```Leader; BelnapZ3 \nBemnasH3X \nJemnasH3X \ \nVemnasH3X \nVeremnasH3X \nZremnasH3X             ```"
		}});
		message.delete().catch(O_o=>{});
	};

});
		
		
	

bot.login(botConfig.token);