// Zeltux

// Third Party Developers Copy

// Created By Matt
// Developed by Matt & Azono 

// For Zeltux Version 1.3

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
  if (message.content.indexOf(client.config.prefix) !== 0) return
  var args = message.content.slice(client.config.prefix.length).trim().split(/ +/g)
  var command = args.shift().toLowerCase()
  var cmd = client.commands.get(command)
  if(cmd) client.command = command
  if(!cmd) { 
    client.commands.forEach(com => {
      if(com.name != undefined){
        if(com.aliases.includes(command)){
          cmd = client.commands.get(com.name)
          client.command = com.name}}})}
  if(!cmd) return
  client.sentCommand = command
  client.commandDetails = cmd
  if(client.config.commandChannels.length > 0) {
    if(!client.commandChannels.includes(`${message.channel.id}`)){
      if(!client.config.bypassCommands.includes(client.command)) return} }
  cmd.run(client, message, args)
})

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir(`./addons/`, (err, files) => {
  files.forEach((f, i) =>{
    let props = require(`./addons/${f}`)
    if(f.split(".").pop() === "js"){
      console.log(`Loaded addon ${f}.`)
      props.commands.forEach(function(p){
        p.type = "addon"
        client.commands.set(p.name, p)
      })
      props.events.forEach(function(p){
        client.on(p.name, p.run.bind(null, client))
      })
    }
  })
})

client.login(client.config.setup.token);
