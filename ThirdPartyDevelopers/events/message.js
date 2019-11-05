const Discord = require("discord.js");

module.exports = (client, message) => {
    if (message.author.bot) return;
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.commands.get(command)
    if(!cmd) return
    try {cmd.run(client, message, args);return}
    catch{cmd(client, message, args)}
};