const Discord = require("discord.js")


// Define all commands
commands = [
    {
        name: 'test',
        run: async (client, message, args) => {
            message.channel.send('Test')
        }
    },
    {
        name: 'test1',
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
