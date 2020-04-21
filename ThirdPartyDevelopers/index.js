// Zeltux

// Third Party Developers Copy

// Created By Matt
// In collaboration with Azono & amaan1028

// For Zeltux Version 1.2

const Discord = require("discord.js")
const client = new Discord.Client()
const fs = require("fs")

const yaml = require('js-yaml')
config = yaml.safeLoad(fs.readFileSync('./config/config.yml', 'utf8'))
client.config = config

client.on("ready", () => {
  console.log("Bot online")
})

client.on("message", async message => {
  if (message.author.bot) return
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()
  const cmd = client.commands.get(command)
  if(!cmd) return
  try {cmd.run(client, message, args);return}
  catch{cmd(client, message, args)}
})

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir(`./addons/`, (err, files) => {
  files.forEach((f, i) =>{
    let props = require(`./addons/${f}`)
    if(f.split(".").pop() === "js"){
      console.log(`Loaded addon ${f}`)
      props.commands.forEach(function(p){
        client.commands.set(p.name, p.run)
      })
      props.events.forEach(function(p){
        client.on(p.name, p.run.bind(null, client))
      })
   }
  })
})

client.login(client.config.setup.token);
