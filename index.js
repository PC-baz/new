const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('bot is online'));

app.listen(port, () => console.log(`http://localhost:${port}`));
//bot
const Discord  = require('discord.js');
const token = '';
const bot = new Discord.Client();
//prefix
const prefix = 'w/';
//bot online event
bot.on('ready', () => {
    console.log("bot is online(press ^C to restart or close)");
    bot.user.setActivity("w/help | Walkie Talkie")
})
bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(" ")
    
    if (message.content.startsWith(prefix)) {
        if (args[0] === "help") {
            let help = new Discord.MessageEmbed()
            .setTitle("help commands:")
            .addField("info:", "w/info")
            .addField("backup:", "w/backup")
            message.channel.send(help)
        }
        if (args[0] === "info") {
            let info = new Discord.MessageEmbed()
            .setTitle("server info:")
            .addField("Invite", "https://discord.gg/VjaBwApN")
            .addField("server stats:", "37")
            .addField("server Owner", "NOOB DOG")
            .addField("bot stats:", "supported by: nodejs v16.13.1 LTS \n programmed with: discord JS v13.5.0 \n created by: PC_baz")
            message.channel.send(info)

        }
        if (args[0] === "backup") {
            let backup = new Discord.MessageEmbed()
            .setTitle("backup")
            .addField("text channels:", "created")
            .addField("voice channels:", "created")
            .addField("category:", "time out!")
            .addField("backup use:", "type w/paste to use backup")
            message.channel.send(backup)
        }
      }
})
bot.on('message', message => {
    let args = message.content.substring(prefix.length).split("  ")
    
    if (message.content.startsWith(prefix)) {
      if (args[0] === "server") {
      bot.channels.cache.get(args[2]).send(args[1])
      }
    }
})
//bot login verify
bot.login(token)