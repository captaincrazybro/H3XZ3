const Discord = require("discord.js");
const botConfig = require("../botsettings.json");
let prefix = botConfig.prefix;

module.exports.run = async (bot, message, args) => {
	if(args[0] === `6`){
		return message.channel.send({embed: {
			color: 3447003,
			title: "Tier 6",
			description: "```PemnasH3X 7/17      ```"
		}});
		message.delete().catch(O_o=>{});
	};
	if(args[0] === `5`){
		return message.channel.send({embed: {
			color: 3447003,
			title: "Tier 5",
			description: "```AlixionH3X \nAtchen83_H3X \nBenAnnikaH3X \nArculfH3X \nAristocracyH3X \nBeast444H3X \nBleachyH3X \nCatH3X \nCaptainBud_H3X \ncanard_H3X \nCheesyH3X \nCMonster0311 \nCobraUltimateH3X \nCocoFrostyH3X \nCoopyH3X \nCreeperJackH3X \nCrockamH3X \nDarkNinjaH3X \nDeathFlameH3X \nDerpMaster_H3X \nDerpyH3X \nDivineRekz_A1 \nDocho_H3X \nElfieH3X \nEmilisSuxH3X \nEmojiH3X \nExplodingH3X \nFlame_EnderH3X \nHarryH3X \nHDredHDH3X \nJayH3X \nJBIT_H3X \nJOHN_CENAAAA2H3X \nKiwi_H3X \nKitte9087_H3X \nLameH3X \nLoserFaceH3X \nMCM3911H3X \nMLGWizardH3X \nMangoH3X \nMapDestroyerH3X \nMcproH3X \nMegarouzH3X \nMirriH3X \nMyDxnutH3X \nMysticalH3X \nNikeH3X \nObsidianH3X \nOriginalH3X \nPanthers10H3X \nPaytonMalinH3X \nPhoenixH3X \nPorkChopH3X \nPvt_PringlesH3X \nRabidRacoon_H3X \nRageGamingH3X \nRebelzH3X \nRenagadeH3X \nSamH3X \nShotGunH3X \nShotgunmasterH3X \nSinantraA1 \nSmazerH3Xs \nSmj_of_H3X \nSpadeH3X \nSpoderfishH3X \nSoulifH3X \nSquashedMelunH3X \nStudmasterH3X \nSurvivorH3X \nT4btab_H3X \nTheBanHammerH3X \nThesapH3X \nTidePodsH3X \nTrueEmpiresH3X \nVortexH3X \nYudoH3X \nZinchH3X \n__The_Dead__H3X \n_ExoticPlayzH3X_ \n_SandboxH3X \n_ShiiftyA1 \ngoodH3XVX \nheiressH3X \niceH3X \niHxckJason_H3X \nitzmathewH3X \njameswlee_H3X_Z3 \nLuisjrH3X \nnerfcake81H3X \nnfp2005_H3X \nrmsyH3X_ \nshotgunpigH3X \nsilentwulfH3X \nsparklebuble_H3X \ntaskyH3X \nthe3eaglesH3X \nthefryingpan_H3X \nturbulentH3X \nultrakoH3X \nvampishowl53H3X \nxH3X \nyoshi0022H3X \nzephH3X             ```"
		}});
		message.delete().catch(O_o=>{});
	};
	if(args[0] === `4`){
		return message.channel.send({embed: {
			color: 3447003,
			title: "Tier 4",
			description: "```_FrqmedH3X \nAnnjeliH3X \nBambaH3X \nBananaTheBobH3X \nBemnasH3X \nblurryface_H3X \nBobCipherH3X \ncarson49H3X \nDav425H3X \ndiamondpixelsH3X \nDrFlash_H3X \nEastynH3X \nGamerBeeH3X \nH3Xadecimal \nH3XIsSteve \nHexxell_H3X \nHippieH3X \niSparrowH3X \nMarouzH3X \nMaxeryCallH3X \nNavH3X \nNightH3X \nOmegaGeagle12A1 \nRubikA1 \nSonic_H3X \nThat_One_KidH3X \nUnfollowH3X \nWolfeusH3X \nZeroWinsH3X             ```"
		}});
		message.delete().catch(O_o=>{});
	};
	if(args[0] === `3`){
		return message.channel.send({embed: {
			color: 3447003,
			title: "Tier 3",
			description: "```ArouzH3X \nBobbH3X \nCrossxFade_H3X \nEmoH3X \nFosterZillaH3X \nJemnasH3X \nNattanatorH3XA1 \nNightH3X \nRiRiA1 \nShayH3X \nTomTheChaosH3X \nTrapNation_H3X \nTwixxel_H3X             ```"
		}});
		message.delete().catch(O_o=>{});
	};
	if(args[0] === `2`){
		return message.channel.send({embed: {
			color: 3447003,
			title: "Tier 2",
			description: "```captcrazybro_H3X \nCipherH3X \nFireriderH3X \nFL3XSHH3X \nMyst_H3X \nNoobA1 \nRaamseH3X \nSezemnasH3X \nSlyFireSharkH3X             ```"
		}});
		message.delete().catch(O_o=>{});
	};
	if(args[0] === `1`){
		return message.channel.send({embed: {
			color: 3447003,
			title: "Tier 1",
			description: "```BarouzH3X \nkoalaplayerA1 \nMrRedstoneA1        ```"
		}});
		message.delete().catch(O_o=>{});
	};
	if(args[0] === `elite`){
		return message.channel.send({embed: {
			color: 3447003,
			title: "Tier Elite",
			description: "```\nHexxel \nXarH3X \nSrajH3X \nZerouxH3X \nDezemnasH3X             ```"
		}});
		message.delete().catch(O_o=>{});
	};

};

module.exports.help = {
	name: `${prefix}tier`
}