// Zeltux

// Third Party Developers Copy

// Created By Matt
// In collaboration with Azono & amaan1028

// For Zeltux Version 1.1.2

const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");
client.config = config;

client.on("ready", () => {
  console.log("Bot online")
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const modules = ['modules']

modules.forEach(c => {
  fs.readdir(`./commands/${c}/`, (err, files) => {
  if (err) throw err;

  if(c === 'modules'){

    files.forEach((f, i) =>{
      let props = require(`./commands/modules/${f}`)
      if(f.split(".").pop() === "js"){
      console.log(`\x1b[42mINFO\x1b[40m \x1b[33mLoaded \x1b[35mmodule \x1b[36m${f}\x1b[33m.\x1b[37m`);
      props.commands.forEach(function(p)  {
        client.commands.set(p.name, p.run)
      })
      props.events.forEach(function(p)  {
        client.on(p.name, p.run.bind(null, client));
      })
     }});
    console.log(`\x1b[37m`)
    console.log(`\x1b[42mINFO\x1b[40m \x1b[32mSuccesfully Started!\x1b[37m`)
    console.log(`\x1b[37m`)
  }
  else{
  console.log(`\x1b[42mINFO\x1b[40m \x1b[33mLoaded \x1b[35mcore \x1b[34m${c}\x1b[33m.\x1b[37m`);
    files.forEach(f => {
      if(!(f.split(".").pop() === "js")) return
      let commandName = f.split(".")[0];
      const props = require(`./commands/${c}/${f}`);
      if(!client.config.disabledCommands.includes(commandName)){
      client.commands.set(commandName, props)}
    })
  }
  })
})

client.login(client.config.token);
