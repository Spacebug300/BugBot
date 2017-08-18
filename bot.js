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
