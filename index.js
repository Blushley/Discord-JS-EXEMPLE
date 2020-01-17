const Discord = require('discord.js');
const moment = require('moment');
const bot = new Discord.Client();

bot.on('message', message => {
    if (message.content === 'hey') {
        message.channel.send(`Heyya, nous sommes le ${moment(message.createdAt).format('LL')}`)
    }
});

bot.login('Le token de l\'application discord de votre robot (https://discordapp.com/developers/)');