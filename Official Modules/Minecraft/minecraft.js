
const Discord = require("discord.js");
const config = require("./minecraft.json");
const request = require('request')

// Status
exports.cmd1 = async (client, message, args) => {
  message.delete()  
  let embed = new Discord.RichEmbed()
      .setColor(client.config.colour)
      .setTitle(`🎮 Minecraft Server Status 🎮`)
  var url = 'http://mcapi.us/server/status?ip=' + config.serverIP
  request(url, function(err, response, body) {
  if(err) {console.log(err);return message.channel.send(`⚠ Error - Contact UDB Team! ⚠`)}
  body = JSON.parse(body)
  status = `🚫 **Offline**`
  var players = body.players.now
  if(body.online){status = `✅ **Online**\n👪 **${players}** players online`}
  embed.setDescription(status)
  message.channel.send(embed) })
}
    
exports.cmd1.help = {
  name: "status"
};

// IP
exports.cmd2 = async (client, message, args) => {
  message.delete()
  let embed = new Discord.RichEmbed()
    .setColor(client.config.colour)
    .setTitle(`🎮 IP - ${config.serverIP}`)
  message.channel.send(embed)
};

exports.cmd2.help = {
  name: "ip"
};  

// Playercount
exports.cmd3 = async (client, message, args) => {
  message.delete()  
  let embed = new Discord.RichEmbed()
      .setColor(client.config.colour)
  var url = 'http://mcapi.us/server/status?ip=' + config.serverIP
  request(url, function(err, response, body) {
  if(err) {console.log(err);return message.channel.send(`⚠ Error - Contact UDB Team! ⚠`)}
  body = JSON.parse(body)
  status = `0`
  var players = body.players.now
  if(body.online){status = players}
  embed.setTitle(`👪 Players - **${status}**`)
  message.channel.send(embed) })
};

exports.cmd3.help = {
  name: "playercount"
};  