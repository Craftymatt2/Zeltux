// Universal Discord Bot

// Third Party Developers Copy

// Created By Matt
// In collaboration with Azono & amaan1028

// Version 1.0.1

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

fs.readdir(`./commands/modules/`, (err, files) => {
  files.forEach((f, i) =>{
  let props = require(`./commands/modules/${f}`)
  console.log(`Loaded module ${f}.`);
  try{
  if (props.cmd8 && !props.cmd8.help.name) return console.log('Recieved an error loading commands in the module: ' + f)
  if (!props.cmd8 && props.cmd8.help.name) return console.log('Recieved an error loading commands in the module: ' + f)
  client.commands.set(props.cmd1.help.name, props.cmd1);}
  catch{return}
  try{
  if (props.cmd8 && !props.cmd8.help.name) return console.log('Recieved an error loading commands in the module: ' + f)
  if (!props.cmd8 && props.cmd8.help.name) return console.log('Recieved an error loading commands in the module: ' + f)
  client.commands.set(props.cmd2.help.name, props.cmd2);}
  catch{return}
  try{
  if (props.cmd8 && !props.cmd8.help.name) return console.log('Recieved an error loading commands in the module: ' + f)
  if (!props.cmd8 && props.cmd8.help.name) return console.log('Recieved an error loading commands in the module: ' + f)
  client.commands.set(props.cmd3.help.name, props.cmd3);}
  catch{return}
  try{
  if (props.cmd8 && !props.cmd8.help.name) return console.log('Recieved an error loading commands in the module: ' + f)
  if (!props.cmd8 && props.cmd8.help.name) return console.log('Recieved an error loading commands in the module: ' + f)
  client.commands.set(props.cmd4.help.name, props.cmd4);}
  catch{return}
  try{
  if (props.cmd8 && !props.cmd8.help.name) return console.log('Recieved an error loading commands in the module: ' + f)
  if (!props.cmd8 && props.cmd8.help.name) return console.log('Recieved an error loading commands in the module: ' + f)
  client.commands.set(props.cmd5.help.name, props.cmd5);}
  catch{return}
  try{
  if (props.cmd8 && !props.cmd8.help.name) return console.log('Recieved an error loading commands in the module: ' + f)
  if (!props.cmd8 && props.cmd8.help.name) return console.log('Recieved an error loading commands in the module: ' + f)
  client.commands.set(props.cmd6.help.name, props.cmd6);}
  catch{return}
  try{
  if (props.cmd8 && !props.cmd8.help.name) return console.log('Recieved an error loading commands in the module: ' + f)
  if (!props.cmd8 && props.cmd8.help.name) return console.log('Recieved an error loading commands in the module: ' + f)
  client.commands.set(props.cmd7.help.name, props.cmd7);}
  catch{return}
  try{
  if (props.cmd8 && !props.cmd8.help.name) return console.log('Recieved an error loading commands in the module: ' + f)
  if (!props.cmd8 && props.cmd8.help.name) return console.log('Recieved an error loading commands in the module: ' + f)
  client.commands.set(props.cmd8.help.name, props.cmd8);}
  catch{return}
  try{
    if (props.cmd8 && !props.cmd8.help.name) return console.log('Recieved an error loading commands in the module: ' + f)
    if (!props.cmd8 && props.cmd8.help.name) return console.log('Recieved an error loading commands in the module: ' + f)
  client.commands.set(props.cmd9.help.name, props.cmd9);}
  catch{return}
  try{
    if (props.cmd8 && !props.cmd8.help.name) return console.log('Recieved an error loading commands in the module: ' + f)
    if (!props.cmd8 && props.cmd8.help.name) return console.log('Recieved an error loading commands in the module: ' + f)
  client.commands.set(props.cmd10.help.name, props.cmd10);}
  catch{return}
  });});

client.login(client.config.token);