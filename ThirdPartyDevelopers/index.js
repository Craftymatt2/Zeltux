// Zeltux

// Third Party Developers Copy

// Created By Matt
// In collaboration with Azono & amaan1028

// For Zeltux Version 1.0.6

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
      console.log(`Loaded ${f}.`);
      try{
      if (props.cmd1 && !props.cmd1.help.name) return console.log('[ERROR] Recieved an error loading commands in the module: ' + f + ' Please contact Zeltux support.')
      if (!props.cmd1 && props.cmd1.help.name) return console.log('[ERROR] Recieved an error loading commands in the module: ' + f + ' Please contact Zeltux support.')
      client.commands.set(props.cmd1.help.name, props.cmd1);
      }
      catch{return}
      try{
      if (props.cmd2 && !props.cmd2.help.name) return console.log('[ERROR] Recieved an error loading commands in the module: ' + f + ' Please contact Zeltux support.')
      if (!props.cmd2 && props.cmd2.help.name) return console.log('[ERROR] Recieved an error loading commands in the module: ' + f + ' Please contact Zeltux support.')
      client.commands.set(props.cmd2.help.name, props.cmd2);
      }
      catch{return}
      try{
      if (props.cmd3 && !props.cmd3.help.name) return console.log('[ERROR] Recieved an error loading commands in the module: ' + f + ' Please contact Zeltux support.')
      if (!props.cmd3 && props.cmd3.help.name) return console.log('[ERROR] Recieved an error loading commands in the module: ' + f + ' Please contact Zeltux support.')
      client.commands.set(props.cmd3.help.name, props.cmd3);
      }
      catch{return}
      try{
      if (props.cmd4 && !props.cmd4.help.name) return console.log('[ERROR] Recieved an error loading commands in the module: ' + f + ' Please contact Zeltux support.')
      if (!props.cmd4 && props.cmd4.help.name) return console.log('[ERROR] Recieved an error loading commands in the module: ' + f + ' Please contact Zeltux support.')
      client.commands.set(props.cmd4.help.name, props.cmd4);
      }
      catch{return}
      try{
      if (props.cmd5 && !props.cmd5.help.name) return console.log('[ERROR] Recieved an error loading commands in the module: ' + f + ' Please contact Zeltux support.')
      if (!props.cmd5 && props.cmd5.help.name) return console.log('[ERROR] Recieved an error loading commands in the module: ' + f + ' Please contact Zeltux support.')
      client.commands.set(props.cmd5.help.name, props.cmd5);
      }
      catch{return}
      try{
      if (props.cmd6 && !props.cmd6.help.name) return console.log('[ERROR] Recieved an error loading commands in the module: ' + f + ' Please contact Zeltux support.')
      if (!props.cmd6 && props.cmd6.help.name) return console.log('[ERROR] Recieved an error loading commands in the module: ' + f + ' Please contact Zeltux support.')
      client.commands.set(props.cmd6.help.name, props.cmd6);
      }
      catch{return}
      try{
      if (props.cmd7 && !props.cmd7.help.name) return console.log('[ERROR] Recieved an error loading commands in the module: ' + f + ' Please contact Zeltux support.')
      if (!props.cmd7 && props.cmd7.help.name) return console.log('[ERROR] Recieved an error loading commands in the module: ' + f + ' Please contact Zeltux support.')
      client.commands.set(props.cmd7.help.name, props.cmd7);
      }
      catch{return}
      try{
      if (props.cmd8 && !props.cmd8.help.name) return console.log('[ERROR] Recieved an error loading commands in the module: ' + f + ' Please contact Zeltux support.')
      if (!props.cmd8 && props.cmd8.help.name) return console.log('[ERROR] Recieved an error loading commands in the module: ' + f + ' Please contact Zeltux support.')
      client.commands.set(props.cmd8.help.name, props.cmd8);
      }
      catch{return}
      try{
      if (props.cmd9 && !props.cmd9.help.name) return console.log('[ERROR] Recieved an error loading commands in the module: ' + f + ' Please contact Zeltux support.')
      if (!props.cmd9 && props.cmd9.help.name) return console.log('[ERROR] Recieved an error loading commands in the module: ' + f + ' Please contact Zeltux support.')
      client.commands.set(props.cmd9.help.name, props.cmd9);
      }
      catch{return}
      try{
      if (props.cmd10 && !props.cmd10.help.name) return console.log('[ERROR] Recieved an error loading commands in the module: ' + f + ' Please contact Zeltux support.')
      if (!props.cmd10 && props.cmd10.help.name) return console.log('[ERROR] Recieved an error loading commands in the module: ' + f + ' Please contact Zeltux support.')
      client.commands.set(props.cmd10.help.name, props.cmd10);
      }
      catch{return}
     }});
    console.log(`Succesfully Started!`)
  }
  else{
  console.log(`[ERROR] A file has been put in the wrong location!`)
  }
  });
});

client.login(client.config.token);
