const Discord = require("discord.js")


// Define all commands
commands = [
    {
        name: 'test',
        aliases: [''],
        run: async (client, message, args) => {
            message.channel.send('Test')
        }
    },
    {
        name: 'test1',
        aliases: [''],
        run: async (client, message, args) => {
            message.channel.send('Test1')
        }
    }
]


// Define all events
events = [
    {
        name: 'message',
        run: async (client, message, args) => {
            message.channel.send('Message event ran')
        }
    }
]


module.exports = { commands, events }
