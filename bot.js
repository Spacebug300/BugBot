var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

//Configure Logger
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {colorize: true});
logger.level = 'debug';

//Initialize Bot
var bot = new Discord.Client({token: auth.token, autorun: true});
bot.on('ready', function (evt) {logger.info('Connected'); logger.info('Logged in as: '); logger.info(bot.username + ' - (' + bot.id + ')');});

bot.on('message', function (user, userID, channelID, message, evt) {
    // BugBot needs to know when to listen for commands
    // In this case, tt will listen for messages that will start with `b;`
    if (message.substring(0, 1) == 'b;') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            case 'bugbot':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hello!'
                });
            break;
         }
     }
});
